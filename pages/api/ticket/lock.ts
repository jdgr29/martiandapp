import type { NextApiRequest, NextApiResponse } from 'next'
import { Ticket, TicketPurchase } from '../../../src/modules/tickets/types';
import lockTickets from '../../../src/modules/core/rpc/lockTickets';

interface LockTicketsParams {
  ticketPurchases: TicketPurchase[];
  userId: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ticket?: Ticket, message?: string}>
) {
  // !!! Disabled
  res.status(400).json({message: ''})
  return 
  
  try {
    const params: LockTicketsParams = JSON.parse(req.body);
    console.log(params);

    const lockSuccess = await lockTickets(params.ticketPurchases, params.userId);
    const statusCode = lockSuccess ? 200 : 400;
    const message = lockSuccess ? 'Tickets locked' : 'Unable to lock tickets';
    res.status(statusCode).json({message})
  } catch (error) {
    res.status(500).json({message: String(error)})
  }
}
