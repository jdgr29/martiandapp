// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getEvents, getEventsByTicketAddress } from '../../src/modules/core/db/events';
import { getMartianUser, getMartianUserByName } from '../../src/modules/core/db/mmmcUser';
import supabase, { SupabaseResult } from '../../src/modules/core/db/supabase'

import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'HEAD'],
})


function runMiddleware(
  req: any,
  res: any,
  fn: (arg0: any, arg1: any, arg2: (result: any) => void) => void
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SupabaseResult>
) {

  await runMiddleware(req, res, cors)
    try {
        // List of Events used by a ticket
        let { ticketAddress } = req.query;

        // Check valid values
        if(ticketAddress == "") {
            res.status(500).json({result: null, success: false})
        }

        // Fetch events
        const eventsRes: SupabaseResult = await getEventsByTicketAddress(supabase, ticketAddress as string);

        console.log(eventsRes);
        if(eventsRes) {
    
            if(!eventsRes.success) {
              res.status(500).json({result: null, success: false})
              return
            }
            // Successful:
            if(eventsRes.result && eventsRes.result.id) {
              res.status(200).json({result: eventsRes.result, success: true})
              return
            }
      
            res.status(200).json({result: null, success: true})
        }
        res.status(500).json({result: null, success: false})
    } catch (error) {
        res.status(500).json({result: error, success: false})
    }
}
