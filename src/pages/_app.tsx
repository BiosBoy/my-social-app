import { AppProps } from 'next/app'
import RootLayout from '../app/layout'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <RootLayout>
    <Component {...pageProps} />
  </RootLayout>
)

export default MyApp
