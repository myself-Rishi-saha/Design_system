
import { StoryFn, Meta } from '@storybook/react';
import { Accordion } from './Accordion';
import '../../App.css';

export default {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  component: Accordion,
  argTypes: {
    title: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    color: { control: 'color' },
  },
  count: {
    control: 'number',},

  decorators: [
    (Story) => (
      <div className="p-6 max-w-md">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Accordion>;

const Template: StoryFn<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <p className="mb-2">This is the content inside the accordion.</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  </Accordion>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default Accordion',
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary Accordion',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Secondary Accordion',
  variant: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  title: 'Success Accordion',
  variant: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  title: 'Danger Accordion',
  variant: 'danger',
};

export const Small = Template.bind({});
Small.args = {
  title: 'Small Accordion',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  title: 'Large Accordion',
  size: 'lg',
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Accordion',
  disabled: true,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  title: 'Custom Color Accordion',
  color: '#6b46c1',
};

export const multipleAccordion = Template.bind({});
multipleAccordion.args = {
  title: 'multiple Accordion',
  count: 5,
};

export const horizontalAccordion = Template.bind({});
horizontalAccordion.args = {
  title: 'horizontal accordion',
  count: 5,
  isHorizontal: true,
};