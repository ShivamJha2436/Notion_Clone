"use client"
import { ReactNode } from 'react'
import { ConvexReactClient } from 'convex/react'
import { ConvexProvider } from 'convex/react'
import { ClerkProvider, useAuth } from '@clerk/clerk-react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);


export const ConvexProvider = ({
  children
}: {
  children: ReactNode
}) => (
  <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
  >
    <ConvexProviderWithClerk 
      useAuth={useAuth}
    >

    </ConvexProviderWithClerk>
  </ClerkProvider>
)
