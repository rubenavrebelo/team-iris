import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import StreamerSection from './StreamersSection';

export default {
  title: 'Streamers Sections',
  component: StreamerSection,
} as Meta;

const Template: Story = (args) => <StreamerSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};