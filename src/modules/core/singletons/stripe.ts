import { loadStripe } from "@stripe/stripe-js"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15',
  });

// const stripe = getStripe();

// async function getStripe() {
//     return await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
// }
export default stripe