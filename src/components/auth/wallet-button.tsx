"use client"

import { usePrivy } from '@privy-io/react-auth'
import { Button } from '@/components/ui/button'
import { Wallet, User, LogOut } from 'lucide-react'
import { useState } from 'react'

export function WalletButton() {
  const { ready, authenticated, user, login, logout } = usePrivy()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      await login()
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      await logout()
    } catch (error) {
      console.error('Logout failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!ready) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Wallet className="h-5 w-5" />
      </Button>
    )
  }

  if (authenticated && user) {
    const walletAddress = user.wallet?.address
    const displayAddress = walletAddress 
      ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
      : 'Connected'

    return (
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2 text-sm text-background">
          <Wallet className="h-4 w-4" />
          <span className="hidden sm:inline">
            {walletAddress ? `${displayAddress} • $0 USD` : 'Wallet • $0 USD'}
          </span>
          <span className="sm:hidden">Wallet</span>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleLogout}
          disabled={isLoading}
          className="text-background hover:text-primary"
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    )
  }

  return (
    <Button 
      onClick={handleLogin}
      disabled={isLoading}
    >
      {isLoading ? 'Connecting...' : 'Connect Wallet'}
    </Button>
  )
}
