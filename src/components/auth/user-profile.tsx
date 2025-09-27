"use client"

import { usePrivy } from '@privy-io/react-auth'
import { Button } from '@/components/ui/button'
import { LogOut, Copy, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export function UserProfile() {
  const { user, logout } = usePrivy()
  const [copied, setCopied] = useState(false)

  if (!user) return null

  const walletAddress = user.wallet?.address
  const email = user.email?.address

  const copyAddress = async () => {
    if (walletAddress) {
      await navigator.clipboard.writeText(walletAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const openExplorer = () => {
    if (walletAddress) {
      window.open(`https://etherscan.io/address/${walletAddress}`, '_blank')
    }
  }

  return (
    <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-card-foreground">Wallet Connected</h3>
          <p className="text-sm text-muted-foreground">Your wallet is connected and ready</p>
        </div>

        {email && (
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
            <p className="text-sm text-card-foreground">{email}</p>
          </div>
        )}

        {walletAddress && (
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Wallet Address</p>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-card-foreground font-mono">
                {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyAddress}
                className="h-6 w-6 p-0"
              >
                <Copy className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={openExplorer}
                className="h-6 w-6 p-0"
              >
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
            {copied && (
              <p className="text-xs text-green-600">Address copied!</p>
            )}
          </div>
        )}

        <div className="pt-2 border-t border-border">
          <Button
            variant="outline"
            onClick={logout}
            className="w-full"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Disconnect Wallet
          </Button>
        </div>
      </div>
    </div>
  )
}
