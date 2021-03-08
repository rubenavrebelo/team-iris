import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Streamer  from './Streamer';

export default {
  title: 'Streamer',
  component: Streamer,
} as Meta;

const Template: Story = (args) => <Streamer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};