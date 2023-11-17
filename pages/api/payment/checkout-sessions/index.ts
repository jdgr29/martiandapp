import { NextApiRequest, NextApiResponse } from 'next'

import Stripe from 'stripe'
import supabase from '../../../../src/modules/core/db/supabase';
import { getTicket, getTickets } from '../../../../src/modules/core/db/tickets';
import lockTickets from '../../../../src/modules/core/rpc/lockTickets';
import stripe from '../../../../src/modules/core/singletons/stripe';
import { TicketPurchase } from '../../../../src/modules/tickets/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { 
        userId,
        ticketsToPurchase
    } : {
        userId: string,
        ticketsToPurchase: TicketPurchase[]
    } = req.body;
    try {
      console.log(ticketsToPurchase);
      
      // Get ticket details
      const ticketRecs = await getTickets(supabase, ticketsToPurchase);
      
      // Lock tickets
      const ticketsLocked = await lockTickets(ticketsToPurchase, userId);
      if(!ticketsLocked) throw Error('Unable to lock tickets')

      // Generate line items to purchase
      const lineItems = ticketsToPurchase.map((ticketPurchase) => {
        const ticket = ticketRecs.find((ticket) => ticket.id === ticketPurchase.ticketId);
        if(!ticket) throw Error('Unable to find ticket')

        return {
          price_data: {
            unit_amount: ticket.fiatCost,
            currency: ticket.fiatCurrency
          },
          quantity: ticketPurchase.quantity,
        }
      });

      // Create Checkout Sessions from body params.
      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: 'donate',
        payment_method_types: ['card'],
        line_items: lineItems,
        // TODO!!   
        success_url: `${req.headers.origin}/result/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/result/failure?session_id={CHECKOUT_SESSION_ID}`,
      }

      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params)

      if(checkoutSession.url == null) {
        res.status(400).json({ success: false, message: 'Unable to checkout'})
        return
      }

      res.redirect(303, checkoutSession.url);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Internal server error'
      res.status(500).json({ statusCode: 500, message: errorMessage })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}