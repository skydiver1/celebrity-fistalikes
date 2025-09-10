# Celebrity Fistalikes E-commerce Store

A modern Next.js e-commerce application with Stripe integration for selling celebrity fist replicas.

## Features

- 🛍️ Full e-commerce functionality
- 💳 Stripe Elements for secure payments
- 🛒 Persistent shopping cart with Zustand
- 📱 Fully responsive design
- 🎨 Beautiful UI with Tailwind CSS
- 🚀 Fast performance with Next.js 14
- 🔒 Secure checkout process
- 📦 Order management through Stripe Dashboard

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Stripe

1. Create a Stripe account at https://stripe.com
2. Get your API keys from https://dashboard.stripe.com/apikeys
3. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Testing Payments

Use Stripe's test card numbers:
- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **3D Secure**: 4000 0025 0000 3155

Use any future expiry date and any 3-digit CVC.

## Project Structure

```
nextjs-store/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── checkout/          # Checkout page
│   ├── products/          # Product pages
│   └── success/           # Order success page
├── components/            # React components
├── data/                  # Static product data
├── lib/                   # Utilities and configuration
├── public/                # Static assets (images)
└── types/                 # TypeScript types
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Order Management

All orders appear in your Stripe Dashboard with complete customer and order information:
- Customer details (name, email, address)
- Items purchased
- Payment amount
- Order metadata

Access your orders at: https://dashboard.stripe.com/payments

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Stripe** - Payment processing
- **Zustand** - State management
- **Tailwind CSS** - Styling
- **React Hook Form** - Form handling

## License

MIT