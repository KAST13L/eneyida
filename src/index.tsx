import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {App} from './App';
import {HashRouter} from "react-router-dom";
import {
    ApolloClient,
    ApolloProvider,
    createHttpLink,
    InMemoryCache
} from '@apollo/client';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
});
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
});

const container = document.getElementById('eneyida');
const root = createRoot(container!);
root.render(
    <HashRouter>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>,
    </HashRouter>
);
