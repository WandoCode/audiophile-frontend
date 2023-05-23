import { CategoryLink } from './CategoryLink'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/Link',
  component: CategoryLink,
} as ComponentMeta<typeof CategoryLink>

const Template: ComponentStory<typeof CategoryLink> = (args) => {
  return <CategoryLink {...args} />
}

export const Category = Template.bind({})
Category.args = {
  category: 'headphones',
  image:
    'http://localhost:1337/uploads/thumbnail_image_category_thumbnail_headphones_e99d990c44.png',
}
