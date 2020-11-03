import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import {App} from './App.js'

const client = new ApolloClient({
    uri: 'https://petgram-camilo.camilovict.vercel.app/graphql'
})

ReactDOM.render(
    <ApolloProvider client = {client}>
        <App />
    </ApolloProvider>, document.getElementById('app'))
