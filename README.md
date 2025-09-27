# Starry - Alternative Asset Investment Platform

A platform for fractional ownership of alternative assets like cars, wine, and art, making them liquid through crypto/blockchain technology.

## Features

- **Portfolio Management**: Create and manage portfolios of alternative assets
- **Fractional Ownership**: Invest in shares of high-value assets
- **Performance Tracking**: Monitor portfolio performance with detailed metrics
- **User Authentication**: Traditional email/password authentication (with Privy wallet integration planned)
- **Modern UI**: Clean, responsive design with dark/light mode support

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL (with SQLite for development)
- **Authentication**: NextAuth.js (with Privy wallet integration planned)
- **Styling**: Custom CSS variables with OKLCH color space

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL (or use SQLite for development)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd starry
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local with your configuration
DATABASE_URL="postgresql://username:password@localhost:5432/starry_db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

4. Set up the database:
```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# (Optional) Seed the database
npx prisma db seed
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

The application uses the following main entities:

- **User**: User accounts with authentication
- **Portfolio**: Investment groups/portfolios
- **Asset**: Individual assets within portfolios
- **Investment**: User investments in portfolios
- **Transaction**: Buy/sell transactions
- **Performance**: Portfolio performance metrics

## Future Integrations

### Privy Wallet Integration

Privy wallet integration is now fully configured and ready to use:

**Configuration:**
- App ID: `cmg2newos015ljy0c6gdm0sqe`
- JWKS Endpoint: `https://auth.privy.io/api/v1/apps/cmg2newos015ljy0c6gdm0sqe/jwks.json`
- App Secret: Configured in `src/lib/privy.ts`

**Features:**
- ✅ Wallet connection via multiple methods (email, wallet, Google, Twitter)
- ✅ Embedded wallet creation for users without wallets
- ✅ User profile management
- ✅ Wallet address display and copying
- ✅ Etherscan integration for address verification

**Usage:**
- Click "Connect Wallet" in the header to authenticate
- View wallet information in the Portfolio page
- Copy wallet addresses and view on Etherscan

### Blockchain Integration

The platform is designed to support:
- Asset tokenization
- Fractional ownership tokens
- Trading and liquidity
- Smart contract integration

## Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/            # React components
│   ├── auth/             # Authentication components
│   ├── layout/           # Layout components
│   ├── portfolio/        # Portfolio-related components
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions and configurations
│   ├── auth.ts          # NextAuth configuration
│   ├── prisma.ts        # Prisma client
│   ├── privy.ts         # Privy configuration (placeholder)
│   └── utils.ts         # Utility functions
└── styles/              # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.