import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Navbar, { NavbarProps }  from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
} as Meta;

const Template: Story<NavbarProps> = (args: any) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};