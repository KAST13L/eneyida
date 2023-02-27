import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {GraphQlServer} from "../graphQlServer";
import {App} from '../App';
import {AppContextProvider} from "../providers/context";

export default {
    title: 'App/ App',
    component: App
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <AppContextProvider>
    <GraphQlServer component={<App/>}/>
</AppContextProvider>


export const View = Template.bind({});




