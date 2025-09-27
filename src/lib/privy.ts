import { PrivyConfig } from '@privy-io/react-auth'

export const privyConfig: PrivyConfig = {
  appId: 'cmg2newos015ljy0c6gdm0sqe',
  config: {
    appearance: {
      theme: 'light',
      accentColor: '#676FFF',
      logo: '/logo.png', // You can add your logo here
    },
    embeddedWallets: {
      createOnLogin: 'users-without-wallets',
    },
    loginMethods: ['email', 'wallet', 'google', 'twitter'],
    mfa: {
      noPromptOnMfaRequired: false,
    },
    legal: {
      termsAndConditionsUrl: 'https://your-terms-url.com',
      privacyPolicyUrl: 'https://your-privacy-url.com',
    },
  },
}
