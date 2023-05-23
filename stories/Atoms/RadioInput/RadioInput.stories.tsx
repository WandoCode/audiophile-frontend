import { RadioInput } from './RadioInput'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Atoms/Input',
  component: RadioInput,
} as ComponentMeta<typeof RadioInput>

const Template: ComponentStory<typeof RadioInput> = (args) => {
  const [currValue, setCurrValue] = useState('mobile')

  return (
    <RadioInput
      {...args}
      currValue={currValue}
      onChangeHandler={(e) => setCurrValue(e.target.value)}
    />
  )
}

export const RadioSelected: ComponentStory<typeof RadioInput> = Template.bind(
  {}
)
RadioSelected.args = {
  label: 'Mobile',
  name: 'facturation',
  value: 'mobile',
}

export const RadioNotSelected: ComponentStory<typeof RadioInput> =
  Template.bind({})
RadioNotSelected.args = {
  label: 'Cash',
  name: 'facturation',
  value: 'cash',
}
