// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getMartianUser, getMartianUserAttendees, getMartianUserByName } from '../../src/modules/core/db/mmmcUser';
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
  const { ticketaddress, namestring } = req.query;

  await runMiddleware(req, res, cors);

  if (ticketaddress == undefined || namestring == undefined) {
    res.status(500).json({result: null, success: false})
    return;
  }

  try {
    console.log(namestring);
    console.log(ticketaddress);
      const martianUsers = await getMartianUserAttendees(supabase, ticketaddress as string, namestring as string);
    console.log('life check 2');
    console.log(martianUsers);

    if(martianUsers.success) {
        // success
        if((martianUsers.result as Array<{name: string, address:string}>).length > 0) {
            res.status(200).json({result: martianUsers.result, success: true})
            return
        } else {
            res.status(200).json({result: [], success: true})
            return
        }
    }
    res.status(500).json({result: [], success: false})
  } catch(err) {
    res.status(500).json({result: err, success: false})
  }
}
