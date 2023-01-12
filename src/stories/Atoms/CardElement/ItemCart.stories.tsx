import { ItemCart } from './ItemCart'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/CardElement',
  component: ItemCart,
} as ComponentMeta<typeof ItemCart>

const Template: ComponentStory<typeof ItemCart> = (args) => (
  <div className="container" style={{ maxWidth: '300px' }}>
    <ItemCart {...args} />
  </div>
)

export const CartItem: ComponentStory<typeof ItemCart> = Template.bind({})
CartItem.args = {
  name: 'XX mark I',
  slug: 'xx',
  quantity: 2,
  price: 299,
  url: 'http://content.audioreview.com/channels/audioreview/images/products/product_123804.jpg',
}
