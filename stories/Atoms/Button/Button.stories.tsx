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
}

export const Secondary: ComponentStory<typeof Button> = Template.bind({})
Secondary.args = {
  text: 'See product',
  level: 'secondary',
}

export const Tertiary: ComponentStory<typeof Button> = Template.bind({})
Tertiary.args = {
  text: 'Shop',
  level: 'tertiary',
}

export const Quaternary: ComponentStory<typeof Button> = Template.bind({})
Quaternary.args = {
  text: 'Remove all',
  level: 'quaternary',
}
