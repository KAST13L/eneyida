import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ConfirmModal} from "../components/ConfirmModal";

export default {
    title: 'Components/Confirm Modal',
    component: ConfirmModal
} as ComponentMeta<typeof ConfirmModal>;

const Template: ComponentStory<typeof ConfirmModal> = (args) => <ConfirmModal {...args}/>;

export const View = Template.bind({});
View.args = {
    open: true,
    onClose: (isOpen) => {},
    url: 'http://localhost:3000/recomend/blablablasiskaipiska',
    title: 'My favorite films'
}


