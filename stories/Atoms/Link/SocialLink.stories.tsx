import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SocialLink } from './SocialLink'

export default {
  title: 'Atoms/Link',
  component: SocialLink,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#121212' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
} as ComponentMeta<typeof SocialLink>

const Template: ComponentStory<typeof SocialLink> = (args) => (
  <SocialLink {...args} />
)

export const LinkTwitter = Template.bind({})
LinkTwitter.args = {
  media: 'twitter',
}

export const LinkFacebook = Template.bind({})
LinkFacebook.args = {
  media: 'facebook',
}

export const LinkInstagram = Template.bind({})
LinkInstagram.args = {
  media: 'instagram',
}
