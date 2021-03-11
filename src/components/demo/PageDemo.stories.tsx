import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import PageDemo from './PageDemo';

export default {
  title: 'Page Demo',
  component: PageDemo,
} as Meta;

const Template: Story = (args) => <PageDemo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};