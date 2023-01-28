import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import {
  getGlobalConfig,
  getMainNavigationMenu,
  getPage,
} from '@/utils/apolloContentfulClient'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({
  Component,
  navbar,
  config,
  pageProps,
}: { navbar: any } & { config: any } & AppProps) {
  const { page } = pageProps

  return (
    <>
      <Navbar navbar={navbar} config={config} />
      <Component {...page} />
    </>
  )
}

App.getInitialProps = async (ctx: any) => {
  const navbarItems = await getMainNavigationMenu()
  const config = await getGlobalConfig()
  return { navbar: navbarItems, config: config }
}
