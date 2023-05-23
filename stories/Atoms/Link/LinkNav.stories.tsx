import { LinkNav } from './LinkNav'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/Link',
  component: LinkNav,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#121212' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
} as ComponentMeta<typeof LinkNav>

const Template: ComponentStory<typeof LinkNav> = (args) => <LinkNav {...args} />

export const NavInactive = Template.bind({})
NavInactive.args = {
  path: '/headphones',
  text: 'Headphones',
}

NavInactive.story = {
  parameters: {
    reactRouter: {
      routePath: '/home',
      routeState: { fromPage: 'homePage' },
    },
  },
}

export const NavActive = Template.bind({})
NavActive.args = {
  path: '/headphones',
  text: 'Headphones',
}

NavActive.story = {
  parameters: {
    reactRouter: {
      routePath: '/headphones',
      routeState: { fromPage: 'homePage' },
    },
  },
}
