import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import StreamerGrid  from './StreamerGrid';
import { StreamerObject } from '../../types/types';

export default {
  title: 'Streamer Grid',
  component: StreamerGrid,
} as Meta;

const setStreamerInfo = (streamer: StreamerObject) => {
  console.log(streamer);
}

const Template: Story = (args) => <StreamerGrid setStreamerInfo={setStreamerInfo} />;

export const Primary = Template.bind({});
Primary.args = {
};