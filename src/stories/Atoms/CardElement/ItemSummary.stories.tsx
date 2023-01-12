import { ItemSummary } from './ItemSummary'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/CardElement',
  component: ItemSummary,
} as ComponentMeta<typeof ItemSummary>

const Template: ComponentStory<typeof ItemSummary> = (args) => (
  <div className="container" style={{ maxWidth: '300px' }}>
    <ItemSummary {...args} />
  </div>
)

export const SummaryItem: ComponentStory<typeof ItemSummary> = Template.bind({})
SummaryItem.args = {
  name: 'XX mark I',
  quantity: 2,
  price: 299,
  url: 'http://content.audioreview.com/channels/audioreview/images/products/product_123804.jpg',
}
