export interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  features: string[]
  inStock: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface ShippingAddress {
  name: string
  email: string
  phone?: string
  addressLine1: string
  addressLine2?: string
  city: string
  state?: string
  postalCode: string
  country: string
}

export interface OrderData {
  items: CartItem[]
  shipping: ShippingAddress
  total: number
  subtotal: number
  shippingCost: number
}