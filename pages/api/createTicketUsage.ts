// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { verifyMessage } from 'ethers/lib/utils';
import type { NextApiRequest, NextApiResponse } from 'next'
import { createMartianUser, getMartianUser, getMartianUserByName } from '../../src/modules/core/db/mmmcUser';
import supabase, { SupabaseResult } from '../../src/modules/core/db/supabase'
import { createTicketUsage, getTicketUsage } from '../../src/modules/core/db/ticketUsage';
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
  const { address, ticketContractAddress, ticketId, sig } = req.query;

  await runMiddleware(req, res, cors)


  if(sig == undefined || address == undefined) {
    res.status(500).json({result: null, success: false})
    return

  } else {
    // Check sig is correct for details
    const expectedMessage = `ACCOUNT_${address}_USE_ERC721_TICKET_${ticketContractAddress}_TOKEN_ID_${ticketId}`;

    const calculatedPubkey = verifyMessage(expectedMessage, sig as string);
    console.log('cacle ' + calculatedPubkey);
    if(calculatedPubkey != address as string) {
        res.status(500).json({result: null, success: false})
        return
    }
  }



  try {

    // Check usage exists
    const usageRecord = await getTicketUsage(supabase, ticketContractAddress as string, Number(ticketId));
    console.log(usageRecord);
    if(usageRecord.success && usageRecord.result == null) {
      // No record yet, lets create one!
      const ticketUsageCreationResult = await createTicketUsage(
        supabase,
        ticketContractAddress as string,
        Number(ticketId),
        address as string,
        sig as string
      );

      console.log(ticketUsageCreationResult);

      // TODO - Add handling if this fails????

      if(ticketUsageCreationResult) {
        res.status(200).json({result: true, success: true})
        return        
      }
    }
    res.status(500).json({result: false, success: false})
  } catch(err) {
    res.status(500).json({result: false, success: false})
  }
}
