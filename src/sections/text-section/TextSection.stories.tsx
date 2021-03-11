import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TextSection, { TextSectionProps } from './TextSection';

export default {
  title: 'Text Section',
  component: TextSection,
} as Meta;

const Template: Story<TextSectionProps> = (args) => <TextSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  sectionTitle: 'Components'
};