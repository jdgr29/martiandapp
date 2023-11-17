import type { NextApiRequest, NextApiResponse } from 'next'
import { getTicket } from '../../../src/modules/core/db/tickets';
import supabase from '../../../src/modules/core/db/supabase';
import { Ticket } from '../../../src/modules/tickets/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ticket?: Ticket, message?: string}>
) {

  try {
    const { ticketId } = req.query;

    const ticket = await getTicket(supabase, Number(ticketId));
    res.status(200).json({ticket})
  } catch (error) {
    res.status(500).json({message: String(error)})
  }
}
