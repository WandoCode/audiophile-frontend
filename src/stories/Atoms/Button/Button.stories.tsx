import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary: ComponentStory<typeof Button> = Template.bind({})
Primary.args = {
  text: 'See product',
  level: 'primary',
  path: '',
}

export const Secondary: ComponentStory<typeof Button> = Template.bind({})
Secondary.args = {
  text: 'See product',
  level: 'secondary',
  path: '',
}

export const Tertiary: ComponentStory<typeof Button> = Template.bind({})
Tertiary.args = {
  text: 'Shop',
  level: 'tertiary',
  path: '',
}
