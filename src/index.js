
import App from './App'
import * as ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './index.css'

import TitleRickAndMorty from './pages/TitleLocations';
import Template from './template/Template'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

console.log(client)

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ApolloProvider client={client}>
    <Template>
    <TitleRickAndMorty />
    <App />

    </Template>
  </ApolloProvider>,
)