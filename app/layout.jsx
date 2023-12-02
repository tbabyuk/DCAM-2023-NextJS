import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { GoogleAnalytics } from './components/GoogleAnalytics'
import { Ovo, Roboto } from 'next/font/google'
import { ShopContextProvider } from './context/ShopContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ovo",
  display: "swap"
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
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
    <html lang="en" style={{scrollBehavior: "smooth"}} className={`${ovo.variable} ${roboto.variable} text-gray-600`}>
      <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID} />
      <ShopContextProvider>
        <body>
          <Header />
          {children}
          <Footer />
          <ToastContainer
            position="top-center"
            autoClose={2500}
            hideProgressBar={true}
            closeOnClick={false}
          />
        </body>
      </ShopContextProvider>
    </html>
  )
}
