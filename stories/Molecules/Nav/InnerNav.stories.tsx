import { InnerNav } from './InnerNav'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Molecule/Nav',
  component: InnerNav,
} as ComponentMeta<typeof InnerNav>

const Template: ComponentStory<typeof InnerNav> = (args) => <InnerNav />

export const Inner: ComponentStory<typeof InnerNav> = Template.bind({})
