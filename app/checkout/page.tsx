'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from '@/lib/stripe'
import CheckoutForm from '@/components/CheckoutForm'
import { useCartStore } from '@/lib/store'
import Image from 'next/image'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getSubtotal } = useCartStore()
  const subtotal = getSubtotal()
  const shipping = 9.95
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <button 
          onClick={() => router.push('/products')}
          className="btn-primary"
        >
          Continue Shopping
        </button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>

        {/* Order Summary */}
        <div>
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                    sizes="60px"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLU4GKAsuupv8AZZHy8x5QBB7cDGeO2/q1xUSVkEySuoTc3lQxeznJLkIlSCRfH1x/FwciH2qOSqFl8s1KNgyGN/Xsx/aBfzJAFz3weLlM/k5+9WX7qkRGkV0yOjVPnYGCUKqoJk1H0z9w="
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.product.name}</h3>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity} × £{item.product.price}
                    </p>
                  </div>
                  <span className="font-semibold">
                    £{(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>£{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>£{shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total</span>
                <span className="text-primary">£{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Security badges */}
            <div className="mt-6 pt-6 border-t">
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <span>🔒</span>
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>💳</span>
                  <span>Powered by Stripe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}