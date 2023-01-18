import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../graphql/apolloClient';
import '../styles/globals.css'
import { Space } from 'antd';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
    <NavBar />
    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
    <Component {...pageProps} />
    </Space>
      

    </ApolloProvider>
  )
}
