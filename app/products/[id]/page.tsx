'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { getProductById } from '@/data/products'
import { useCartStore } from '@/lib/store'

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const product = getProductById(params.id as string)
  const { addItem, toggleCart } = useCartStore()
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <button onClick={() => router.push('/products')} className="btn-primary">
          Back to Products
        </button>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
    setTimeout(toggleCart, 100)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => router.back()}
        className="mb-6 text-gray-600 hover:text-primary transition-colors"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative h-96 lg:h-[600px] rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLU4GKAsuupv8AZZHy8x5QBB7cDGeO2/q1xUSVkEySuoTc3lQxeznJLkIlSCRfH1x/FwciH2qOSqFl8s1KNgyGN/Xsx/aBfzJAFz3weLlM/k5+9WX7qkRGkV0yOjVPnYGCUKqoJk1H0z9w="
            quality={85}
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-primary mb-6">
            £{product.price}
          </p>
          
          <p className="text-gray-700 mb-8 text-lg">
            {product.description}
          </p>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Features:</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                -
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
            
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>

          {/* Shipping Info */}
          <div className="border-t pt-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚚</span>
                <div>
                  <p className="font-semibold">Free Shipping</p>
                  <p className="text-sm text-gray-600">On orders over £500</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📦</span>
                <div>
                  <p className="font-semibold">Discreet Packaging</p>
                  <p className="text-sm text-gray-600">Your privacy is guaranteed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="font-semibold">Authenticity Guaranteed</p>
                  <p className="text-sm text-gray-600">Certificate included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}