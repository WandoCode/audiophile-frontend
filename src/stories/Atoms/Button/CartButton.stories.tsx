import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CartButton } from './CartButton'

export default {
  title: 'Atoms/Button',
  component: CartButton,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#121212' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
} as ComponentMeta<typeof CartButton>

const Template: ComponentStory<typeof CartButton> = (args) => (
  <CartButton {...args} />
)

export const Cart: ComponentStory<typeof CartButton> = Template.bind({})
Cart.args = {}
