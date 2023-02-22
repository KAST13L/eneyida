import {
    ApolloClient,
    ApolloProvider,
    createHttpLink,
    InMemoryCache
} from "@apollo/client";
import React, {ReactComponentElement} from "react";
import {AppContextProvider} from "./context";

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
        <ApolloProvider client={client}>
            <AppContextProvider>
                    {component}
            </AppContextProvider>
        </ApolloProvider>
    )
};

