// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
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
  const { address, name } = req.query;

  await runMiddleware(req, res, cors)

  if ( (address == undefined && name == undefined) || (address != undefined && name != undefined)) {
    res.status(500).json({result: null, success: false})
    return;
  }


  try {
    console.log('life check 1');
    // Check user exists
    let userRes;
    if(address == undefined) {
      userRes = await getMartianUserByName(supabase, name as string);
    }
    if(name == undefined) {
      console.log(name);
      console.log(address);
      userRes = await getMartianUser(supabase, address as string);
    }
    console.log('life check 2');

    if(userRes) {
      console.log(userRes);
    
      if(!userRes.success) {
        res.status(500).json({result: null, success: false})
        return
      }

      console.log('life check 3');
      // Successful user find!
      if(userRes.result && userRes.result.id) {
        res.status(200).json({result: userRes.result, success: true})
        return
      }
      console.log('life check 4');

      res.status(200).json({result: null, success: true})
      return
    }
    res.status(500).json({result: null, success: false})
  } catch(err) {
    res.status(500).json({result: err, success: false})
  }
}
