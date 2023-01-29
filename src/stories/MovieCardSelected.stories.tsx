import React from 'react';
import {MovieCardSelected} from "../components";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {movies} from "./stub";

export default {
    title: 'Example/MovieCardSelected',
    component: MovieCardSelected,
    argTypes: {
        onSelectClick: action('film selected')
    }
} as ComponentMeta<typeof MovieCardSelected>;

const Template: ComponentStory<typeof MovieCardSelected> = (args) => <MovieCardSelected {...args}/>;

export const View = Template.bind({});
View.args = {
    movie: movies[2],
}


