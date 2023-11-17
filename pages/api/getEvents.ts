// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getEvents } from '../../src/modules/core/db/events';
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
        // Limit of most recent events at particular offset (to paginate)
        let { limit, offset} = req.query;
        const numLimit = Number(limit);
        let numOffset = 0;
        if(offset != undefined) {
            numOffset = Number(offset);
        }

        // Check valid values
        if(numLimit <= 0 || numOffset < 0) {
            res.status(500).json({result: null, success: false})
        }

        // Fetch events
        const eventsRes: SupabaseResult = await getEvents(supabase, numLimit, numOffset);

        
        if(eventsRes) {
    
            if(!eventsRes.success) {
              res.status(500).json({result: null, success: false})
              return
            }
            // Successful:

            if(eventsRes.result && eventsRes.result.length == 0) {
              res.status(200).json({result: [], success: true})
              return
            }
      
            // Successful user find!
            if(eventsRes.result && eventsRes.result.length > 0) {
              res.status(200).json({result: eventsRes.result, success: true})
              return
            }
        }
        res.status(500).json({result: null, success: false})
    } catch (error) {
        res.status(500).json({result: error, success: false})
    }
}
