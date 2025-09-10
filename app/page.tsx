import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { getFeaturedProducts } from '@/data/products'

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Authentic Celebrity Fisting Replicas
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Introduce a piece of celebrity history to your special place with our premium collection 
            of authentic fist moulds, created from genuine celebrity impressions for fun and games.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span>100% Authentic</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✊</span>
              <span>High Quality Materials</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span>Fast Shipping</span>
            </div>
          </div>
          <Link href="/products" className="btn-primary text-lg">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Celebrity Fists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Celebrity Fistalikes?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2">Celebrity Authentic</h3>
              <p className="text-gray-600">
                Each replica is created from genuine celebrity impressions, 
                ensuring authenticity and quality.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Made with medical-grade materials for durability, 
                safety, and a realistic feel.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-2">Discreet Shipping</h3>
              <p className="text-gray-600">
                Your privacy is our priority. All orders are shipped 
                in plain, unmarked packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Your Hands On a Celebrity?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied collectors worldwide
          </p>
          <Link href="/products" className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Browse Collection
          </Link>
        </div>
      </section>
    </>
  )
}