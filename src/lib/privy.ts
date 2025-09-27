export const privyConfig = {
  appId: 'cmg2newos015ljy0c6gdm0sqe',
  config: {
    appearance: {
      theme: 'light' as const,
      accentColor: '#676FFF' as const,
      logo: '/logo.png',
    },
    embeddedWallets: {
      ethereum: {
        createOnLogin: 'users-without-wallets' as const,
      },
    },
    loginMethods: ['email', 'wallet', 'google', 'twitter'] as ('email' | 'wallet' | 'google' | 'twitter')[],
    mfa: {
      noPromptOnMfaRequired: false,
    },
    legal: {
      termsAndConditionsUrl: 'https://your-terms-url.com',
      privacyPolicyUrl: 'https://your-privacy-url.com',
    },
  },
}
