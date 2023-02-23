import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {GraphQlServer} from "../graphQlServer";
import {App} from '../App';

export default {
    title: 'App/ App',
    component: App
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <GraphQlServer component={<App/>}/>

export const View = Template.bind({});




