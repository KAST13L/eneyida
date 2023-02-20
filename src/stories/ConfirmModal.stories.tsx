import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ConfirmModal} from "../components/ConfirmModal";

export default {
    title: 'Components/Confirm Modal',
    component: ConfirmModal
} as ComponentMeta<typeof ConfirmModal>;

const Template: ComponentStory<typeof ConfirmModal> = () => <ConfirmModal/>;

export const View = Template.bind({});
View.args = {}


