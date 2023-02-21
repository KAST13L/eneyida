import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {MoviesList} from '../components/moviesList';
import {action} from "@storybook/addon-actions";
import {
    ApolloClient,
    ApolloProvider,
    createHttpLink,
    InMemoryCache
} from "@apollo/client";
import {HashRouter} from "react-router-dom";

export default {
    title: 'List/ MoviesList',
    component: MoviesList
} as ComponentMeta<typeof MoviesList>;

const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
});
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
});

const Template: ComponentStory<typeof MoviesList> = (args) => <HashRouter>
    <ApolloProvider client={client}>
        <MoviesList {...args}/>
    </ApolloProvider>,
</HashRouter>;

export const View = Template.bind({});
View.args = {
    selectMovie: action('select movie')
}




