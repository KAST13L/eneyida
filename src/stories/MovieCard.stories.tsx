import React from 'react';
import {MovieCard} from "../components";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {movies} from "./stub";

export default {
    title: 'Card/MovieCard',
    component: MovieCard,
    argTypes: {
        onSelectClick: action('film selected')
    }
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => <MovieCard {...args}/>;

export const View = Template.bind({});
View.args = {
    movie: movies[0],
}


