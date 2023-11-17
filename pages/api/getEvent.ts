// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getEvent, getEventByName, getEvents } from '../../src/modules/core/db/events';
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

enum SearchEventBy {
  id,
  name
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SupabaseResult>
) {

  await runMiddleware(req, res, cors)
    try {
        // Limit of most recent events at particular offset (to paginate)
        let { eventId, eventName} = req.query;

        // decide how to search, defaults to eventId
        let searchMethod = SearchEventBy.id;

        if(eventName != undefined) {
          searchMethod = SearchEventBy.name;
        }
        console.log('starting');
        // Ensure details supplied
        switch (searchMethod) {
          case SearchEventBy.name:
            if(eventName == undefined) {
              res.status(500).json({result: null, success: false})
              return;
            }
            break;

          case SearchEventBy.id:
            if(eventId == undefined) {
              res.status(500).json({result: null, success: false})
              return;
            }
            break;
      
          default:
            if(eventId == undefined) {
              res.status(500).json({result: null, success: false})
              return;
            }
            break;
        }
        console.log('starting2');
        let eventRes: SupabaseResult | null = null;
        // Fetch event
        if(SearchEventBy.id == searchMethod) {
          console.log('!!!!' + eventId);
          const eventIdNum = Number(eventId);
          eventRes = await getEvent(supabase, eventIdNum);
          console.log(eventRes);
        }
        if(SearchEventBy.name == searchMethod) {
          eventRes = await getEventByName(supabase, eventName as string);
        }
        console.log('survived fetching');
        console.log(searchMethod);

        console.log(eventRes);
        if(eventRes) {

            if(!eventRes.success) {
              res.status(500).json({result: null, success: false})
              return
            }
            // Successful:
            if(eventRes.result) {
              res.status(200).json({result: eventRes.result, success: true})
              return
            }
        }
        res.status(500).json({result: null, success: false})
    } catch (error) {
        res.status(500).json({result: error, success: false})
    }
}
