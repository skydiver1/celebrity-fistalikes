import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
})

const SHIPPING_COST = 9.95 // Fixed shipping cost

export async function POST(request: NextRequest) {
  try {
    const { items, customer } = await request.json()

    // Calculate total
    let subtotal = 0
    const lineItems = items.map((item: any) => {
      const itemTotal = item.product.price * item.quantity
      subtotal += itemTotal
      return {
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price,
      }
    })

    const total = subtotal + SHIPPING_COST

    // Create payment intent with metadata
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(total * 100), // Convert to pence
      currency: 'gbp',
      metadata: {
        customer_name: customer.name,
        customer_email: customer.email,
        customer_phone: customer.phone || '',
        shipping_address: JSON.stringify({
          line1: customer.addressLine1,
          line2: customer.addressLine2 || '',
          city: customer.city,
          state: customer.state || '',
          postal_code: customer.postalCode,
          country: customer.country,
        }),
        items: JSON.stringify(lineItems),
        subtotal: subtotal.toFixed(2),
        shipping: SHIPPING_COST.toFixed(2),
        total: total.toFixed(2),
      },
      description: `Order from ${customer.name} - ${items.length} item(s)`,
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
      total: total.toFixed(2),
    })
  } catch (error: any) {
    console.error('Payment intent error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create payment intent' },
      { status: 500 }
    )
  }
}