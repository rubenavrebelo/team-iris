import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import StreamerDetails  from './StreamerDetails';

export default {
  title: 'Streamer Details',
  component: StreamerDetails,
} as Meta;

const Template: Story = (args) => <StreamerDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};