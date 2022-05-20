import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Avatar  from './Avatar';
import { Eevo } from '../../types/types';

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta;

const Template: Story = (args: any) => <Avatar streamer={Eevo} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};