import {
    ApolloClient,
    ApolloProvider,
    createHttpLink,
    InMemoryCache
} from "@apollo/client";
import React, {ReactComponentElement} from "react";
import {AppContextProvider} from "./context";
import {BrowserRouter} from "react-router-dom";

const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
});
const client = new ApolloClient({
    link: httpLink,
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

