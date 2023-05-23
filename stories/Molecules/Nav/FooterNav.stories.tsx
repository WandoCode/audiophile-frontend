import { FooterNav } from './FooterNav'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Molecule/Nav',
  component: FooterNav,
} as ComponentMeta<typeof FooterNav>

const Template: ComponentStory<typeof FooterNav> = (args) => (
  <div style={{ background: 'black', maxWidth: '500px' }}>
    <FooterNav />
  </div>
)

export const Footer: ComponentStory<typeof FooterNav> = Template.bind({})
