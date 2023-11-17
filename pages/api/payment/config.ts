import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).send({ publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY})
}
