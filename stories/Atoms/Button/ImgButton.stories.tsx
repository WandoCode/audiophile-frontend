import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ImgButton } from './ImgButton'

export default {
  title: 'Atoms/Button',
  component: ImgButton,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#121212' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
} as ComponentMeta<typeof ImgButton>

const Template: ComponentStory<typeof ImgButton> = (args) => (
  <ImgButton {...args} />
)

export const Cart: ComponentStory<typeof ImgButton> = Template.bind({})
Cart.args = {
  type: 'cart',
}

export const Burger: ComponentStory<typeof ImgButton> = Template.bind({})
Burger.args = {
  type: 'burger',
}

export const Close: ComponentStory<typeof ImgButton> = Template.bind({})
Close.args = {
  type: 'burger',
}
