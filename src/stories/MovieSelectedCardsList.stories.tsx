import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {
    ApolloClient,
    ApolloProvider,
    createHttpLink,
    InMemoryCache
} from "@apollo/client";
import {HashRouter} from "react-router-dom";
import {SelectedCardMoviesList} from "../components/selectedMoviesList";
import {movies} from "./stub";

export default {
    title: 'List/ SelectedCardMoviesList',
    component: SelectedCardMoviesList
} as ComponentMeta<typeof SelectedCardMoviesList>;

const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
});
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
});

const Template: ComponentStory<typeof SelectedCardMoviesList> = (args) => <HashRouter>
    <ApolloProvider client={client}>
        <SelectedCardMoviesList {...args}/>
    </ApolloProvider>,
</HashRouter>;

export const View = Template.bind({});
View.args = {
    deleteMovie: action('delete movie'),
    selectedMovies: movies
}




