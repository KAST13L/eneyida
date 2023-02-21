import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {HashRouter} from "react-router-dom";
import {GraphQlServer} from "../graphQlServer";
import {App} from '../App';

export default {
    title: 'App/ App',
    component: App
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <HashRouter>
    <GraphQlServer component={<App/>}/>
</HashRouter>;

export const View = Template.bind({});




