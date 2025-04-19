

import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './navBar';

const meta: Meta<typeof NavBar> = {
  title: 'Components/NavBar',
  component: NavBar,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    size: {
      control: { type: 'radio' },
      options: ['medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'centered', 'withSearch'],
    },
    color:{
        control: { type: 'radio' },
        options: ['blue', 'red', 'teal', 'green'], 
    },
    isloggedIn: { control: 'boolean' },
  
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof NavBar>;


export const Default: Story = {
  args: {
    label: 'Default NavBar',
    size: 'medium',
    variant: 'default'
  },
};

export const Centered: Story = {
  args: {
    label: 'Centered NavBar',
    variant: 'centered'
  },
};

export const Large: Story = {
  args: {
    label: 'Large NavBar',
    size: 'large'
  },
};

export const blueNav: Story = {
  args: {
    label: 'NavBar with different color',
   color: 'blue',
  }}

export const WithSearch: Story = {
  args: {
    label: 'NavBar with Search',
    variant: 'withSearch'
  }}

export const LoggedIn: Story = {
  args: {  
    label: 'NavBar with Login',
    variant: 'withSearch',
    isloggedIn: true,
   }}

