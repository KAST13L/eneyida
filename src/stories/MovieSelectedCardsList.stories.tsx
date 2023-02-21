import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {HashRouter} from "react-router-dom";
import {SelectedCardMoviesList} from "../components/selectedMoviesList";
import {movies} from "./stub";
import {GraphQlServer} from "../graphQlServer";

export default {
    title: 'List/ SelectedCardMoviesList',
    component: SelectedCardMoviesList
} as ComponentMeta<typeof SelectedCardMoviesList>;

const Template: ComponentStory<typeof SelectedCardMoviesList> = (args) => <HashRouter>
    <GraphQlServer component={<SelectedCardMoviesList {...args}/>}/>
</HashRouter>;

export const View = Template.bind({});
View.args = {
    deleteMovie: action('delete movie'),
    selectedMovies: movies
}




