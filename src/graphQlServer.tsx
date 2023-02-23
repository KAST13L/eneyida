import {
    ApolloClient, ApolloLink,
    ApolloProvider,
    createHttpLink, from,
    InMemoryCache
} from "@apollo/client";
import React, {ReactComponentElement} from "react";
import {AppContextProvider} from "./context";
import {BrowserRouter} from "react-router-dom";

const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
});

const localeMiddleware = new ApolloLink((operation, forward) => {
    const customHeaders = operation.getContext().hasOwnProperty("headers") ? operation.getContext().headers : {};
    operation.setContext({
        headers: {...customHeaders}
    });
    return forward(operation);
});

const client = new ApolloClient({
    link: from([localeMiddleware, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true
});

interface GraphQlServerPropsType {
    component: ReactComponentElement<any>
}

export const GraphQlServer = ({component}: GraphQlServerPropsType) => {
    return (
        <BrowserRouter>
            <ApolloProvider client={client}>
                <AppContextProvider>
                    {component}
                </AppContextProvider>
            </ApolloProvider>
        </BrowserRouter>

    )
};

