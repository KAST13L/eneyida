import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {MoviesList} from '../components/moviesList';
import {action} from "@storybook/addon-actions";
import {HashRouter} from "react-router-dom";
import {GraphQlServer} from "../graphQlServer";

export default {
    title: 'List/ MoviesList',
    component: MoviesList
} as ComponentMeta<typeof MoviesList>;

const Template: ComponentStory<typeof MoviesList> = (args) => <HashRouter>
    <GraphQlServer component={<MoviesList {...args}/>}/>
</HashRouter>;

export const View = Template.bind({});
View.args = {
    selectMovie: action('select movie')
}




