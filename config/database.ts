export const databaseConfig = {
  // For development, you can use SQLite
  // DATABASE_URL: "file:./dev.db"
  
  // For production, use PostgreSQL
  // DATABASE_URL: "postgresql://username:password@localhost:5432/starry_db"
  
  // Environment variables needed:
  // DATABASE_URL - PostgreSQL connection string
  // NEXTAUTH_URL - Your app URL (e.g., http://localhost:3000)
  // NEXTAUTH_SECRET - Random secret for NextAuth.js
  
  // Privy Configuration (already configured in src/lib/privy.ts)
  // PRIVY_APP_ID: "cmg2newos015ljy0c6gdm0sqe"
  // PRIVY_APP_SECRET: "yv9SZ5fkMu5An72z5zGFTV9J8dYxNNEMJSjtZTHtYXghFW52KTcKDRpswpDgCqwZSUadefQ2NJ96BvhtPVr6omb"
  // PRIVY_JWKS_URL: "https://auth.privy.io/api/v1/apps/cmg2newos015ljy0c6gdm0sqe/jwks.json"
};
