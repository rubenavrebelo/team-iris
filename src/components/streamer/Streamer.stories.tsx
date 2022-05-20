import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Streamer, {StreamerProps} from './Streamer';
import { Eevo, StreamerObject } from '../../types/types';

export default {
  title: 'Streamer',
  component: Streamer,
} as Meta;

const setStreamerInfo = (streamer: StreamerObject) => {
  console.log(streamer);
}

const Template: Story<StreamerProps> = (args: any) => <Streamer streamer={Eevo} setStreamerInfo={setStreamerInfo} />;

export const Primary = Template.bind({});
Primary.args = {
};