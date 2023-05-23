import { MainNav } from './MainNav'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Molecule/Nav',
  component: MainNav,
} as ComponentMeta<typeof MainNav>

const Template: ComponentStory<typeof MainNav> = (args) => {
  const toogleMenu = () => {}
  return (
    <div className="header__container" style={{ background: 'black' }}>
      <MainNav {...args} onToogleMenu={toogleMenu} />
    </div>
  )
}

export const MainDesktop: ComponentStory<typeof MainNav> = Template.bind({})
MainDesktop.args = {
  menuIsOpen: false,
}
