import { CategoriesSection } from './CategoriesSection'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import './CategoriesSection.stories.style.css'

export default {
  title: 'Molecule/Section',
  component: CategoriesSection,
} as ComponentMeta<typeof CategoriesSection>

const Template: ComponentStory<typeof CategoriesSection> = (args) => (
  <CategoriesSection />
)

export const Categories: ComponentStory<typeof CategoriesSection> =
  Template.bind({})
