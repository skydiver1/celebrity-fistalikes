import { loadStripe } from '@stripe/stripe-js'

// Make sure to add your Stripe publishable key to .env.local
export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)