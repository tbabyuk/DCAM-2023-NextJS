import './globals.css'
import { Ovo, Roboto } from 'next/font/google'
import { Footer } from './components/Footer'
import { GoogleAnalytics } from './components/GoogleAnalytics'
import { ShopContextProvider } from './context/ShopContext'
import { ToastContainer } from 'react-toastify'
import { TopHeader } from './components/TopHeader'
import Navigation from './components/Navigation'
import { Analytics } from '@vercel/analytics/react'
import 'react-toastify/dist/ReactToastify.css'
import Script from 'next/script'


const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ovo",
  display: "swap"
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap"
})

export const metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  }
}



export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{scrollBehavior: "smooth"}} className={`${roboto.variable} ${ovo.variable} text-gray-600`}>
      {/* <head>
          <Script src="//www.ezojs.com/basicads.js?d=dacapomusic.ca" />
      </head> */}
      <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID} />
      <ShopContextProvider>
        <body>
          <TopHeader />
          <Navigation />
          {children}
          <Footer />
          <ToastContainer
            position="top-center"
            autoClose={2500}
            hideProgressBar={true}
            closeOnClick={false}
          />
          <Analytics />
        </body>
      </ShopContextProvider>
    </html>
  )
}
