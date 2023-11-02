import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App'
import TitleRickAndMorty from './pages/TitleLocations';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

console.log(client)

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ApolloProvider client={client}>
    <TitleRickAndMorty />
    <App />
  </ApolloProvider>,
)