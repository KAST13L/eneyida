import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    createHttpLink,
    from,
    InMemoryCache
} from "@apollo/client";
import React, {ReactComponentElement, useContext} from "react";
import {BrowserRouter} from "react-router-dom";
import {AppContext} from "./context";

interface GraphQlServerPropsType {
    component: ReactComponentElement<any>
}

export const GraphQlServer = ({component}: GraphQlServerPropsType,) => {

    const {state} = useContext(AppContext)

    const httpLink = createHttpLink({
        uri: 'http://localhost:4000'
    });

    const localeMiddleware = new ApolloLink((operation, forward) => {
        const customHeaders = operation.getContext().hasOwnProperty("headers") ? operation.getContext().headers : {};
        operation.setContext({
            headers: {...customHeaders, locale: state.locale}
        });

        return forward(operation);
    });

    const client = new ApolloClient({
        link: from([localeMiddleware, httpLink]),
        cache: new InMemoryCache(),
        connectToDevTools: true
    });

    return (
        <BrowserRouter>
            <ApolloProvider client={client}>
                {component}
            </ApolloProvider>
        </BrowserRouter>

    )
};

