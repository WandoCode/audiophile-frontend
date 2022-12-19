import { ComponentMeta, ComponentStory } from '@storybook/react'
import { InnerLink } from './InnerLink'

export default {
  title: 'Atoms/Link',
  component: InnerLink,
} as ComponentMeta<typeof InnerLink>

const Template: ComponentStory<typeof InnerLink> = (args) => (
  <InnerLink {...args} />
)

export const Link = Template.bind({})
Link.args = {
  path: '/home',
  text: 'Go Back',
}
