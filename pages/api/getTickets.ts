// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getEvents } from '../../src/modules/core/db/events';
import { getMartianUser, getMartianUserByName } from '../../src/modules/core/db/mmmcUser';
import supabase, { SupabaseResult } from '../../src/modules/core/db/supabase'
import { getTicketAddresses } from '../../src/modules/core/db/tickets';


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
        // Fetch tickets
        const ticketsRes: SupabaseResult = await getTicketAddresses(supabase);
        
        if(ticketsRes) {
    
            if(!ticketsRes.success) {
              res.status(500).json({result: null, success: false})
              return
            }
            // Successful:

            if(ticketsRes.result && ticketsRes.result.length == 0) {
              res.status(200).json({result: [], success: true})
              return
            }
      
            // Successful user find!
            if(ticketsRes.result && ticketsRes.result.length > 0) {
              res.status(200).json({result: ticketsRes.result, success: true})
              return
            }
        }
        res.status(500).json({result: null, success: false})
    } catch (error) {
        res.status(500).json({result: error, success: false})
    }
}
