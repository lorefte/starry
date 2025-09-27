"use client"

import { PrivyProvider as PrivyProviderBase } from '@privy-io/react-auth'
import { ReactNode } from 'react'
import { privyConfig } from '@/lib/privy'

interface PrivyProviderProps {
  children: ReactNode
}

export function PrivyProvider({ children }: PrivyProviderProps) {
  return (
    <PrivyProviderBase
      appId={privyConfig.appId}
      config={privyConfig.config}
    >
      {children}
    </PrivyProviderBase>
  )
}
