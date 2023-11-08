import type { Meta, StoryObj } from '@storybook/react'

import SvgButton from '@/components/ui/button/svg/SvgButton.tsx'

import { Button } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}
export const PrimaryWithIcon: Story = {
  args: {
    children: (
      <>
        <SvgButton />
        Primary Button
      </>
    ),
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}
export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    disabled: false,
    variant: 'tertiary',
  },
}
export const Link: Story = {
  args: {
    children: 'Tertiary Button',
    disabled: false,
    variant: 'link',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children:
      'Link that looks like a button dfbfdb fdb df bdfb dfb fd bdfb df b df b dfb dfb d fbfdbfdbfd bf db fdb',
    href: 'http://google.com',
    variant: 'primary',
  },
}
