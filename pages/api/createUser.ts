// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { verifyMessage } from 'ethers/lib/utils';
import type { NextApiRequest, NextApiResponse } from 'next'
import { createMartianUser, getMartianUser, getMartianUserByName } from '../../src/modules/core/db/mmmcUser';
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
  const { address, name, sig } = req.query;

  await runMiddleware(req, res, cors)

  // TODO - make sure to remove this
  res.status(200).json({result: true, success: true}) 
  return;
  

  if(sig == undefined || address == undefined || name == undefined) {
    res.status(500).json({result: null, success: false})
    return

  } else {
    // Check sig is correct for details
    const expectedMessage = `CREATE_ACCOUNT_${address}_WITH_NAME_${name}`;

    const calculatedPubkey = verifyMessage(expectedMessage, sig as string);
    console.log('cacle ' + calculatedPubkey);
    if(calculatedPubkey != address as string) {
      console.log('hgejrhgkjhghkerdhjkgt');
        res.status(500).json({result: null, success: false})
        return
    }
  }


  try {

    // Check user exists
    const userResByName = await getMartianUserByName(supabase, name as string);
    const userResByWallet = await getMartianUser(supabase, address as string);

    console.log(userResByName);
    console.log(userResByWallet);

    // Ensure nothing exists
    let valid = false;
    if(userResByName.success &&
        (userResByName.result == null || userResByName.result.length == 0) &&
        userResByWallet.success &&
        (userResByWallet.result == null || userResByWallet.result.length == 0)) {

        valid = true;
    }

    if(valid) {
        // create account
        console.log('about to create martian user');
        const success = await createMartianUser(supabase, address as string, name as string);

        if(success) {
            res.status(200).json({result: true, success: true})        
        }
    }
    res.status(500).json({result: false, success: false})
  } catch(err) {
    console.log(err);
    res.status(500).json({result: false, success: false})
  }
}
