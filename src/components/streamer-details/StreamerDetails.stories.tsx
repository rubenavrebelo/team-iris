import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import StreamerDetails, { StreamerDetailsProps }  from './StreamerDetails';
import { Eevo } from '../../types/types';

export default {
  title: 'Streamer Details',
  component: StreamerDetails,
} as Meta;

const Template: Story<StreamerDetailsProps> = (args) => <StreamerDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  streamer: Eevo
};