import { NumberInput } from './NumberInput'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Atoms/input',
  component: NumberInput,
} as ComponentMeta<typeof NumberInput>

const Template: ComponentStory<typeof NumberInput> = (args) => {
  const [currValue, setCurrValue] = useState(0)

  const onAdd = () => {
    setCurrValue(currValue + 1)
  }

  const onRemove = () => {
    const newValue = currValue - 1 <= 0 ? 0 : currValue - 1
    setCurrValue(newValue)
  }

  return (
    <NumberInput
      {...args}
      onRemove={onRemove}
      onAdd={onAdd}
      currValue={currValue}
    />
  )
}

export const CustomNumber: ComponentStory<typeof NumberInput> = Template.bind(
  {}
)
CustomNumber.args = {
  name: 'item1',
  id: 'item1',
}
