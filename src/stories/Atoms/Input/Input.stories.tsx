import { Input } from './Input'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Atoms/input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setvalue] = useState('')

  return (
    <Input
      {...args}
      currValue={value}
      onChangeHandler={(e) => setvalue(e.target.value)}
    />
  )
}

export const Text: ComponentStory<typeof Input> = Template.bind({})
Text.args = {
  label: 'Name',
  type: 'text',
  name: 'name',
  id: 'name',
  error: false,
  placeholder: 'Alexei Ward',
  errorText: 'Required',
}

export const Email: ComponentStory<typeof Input> = Template.bind({})
Email.args = {
  label: 'Email Address',
  type: 'email',
  name: 'email',
  id: 'email',
  error: false,
  placeholder: 'alexei@mail.com',
  errorText: 'Wrong format',
}

export const Tel: ComponentStory<typeof Input> = Template.bind({})
Tel.args = {
  label: 'Phone Number',
  type: 'tel',
  name: 'tel',
  id: 'tel',
  error: false,
  placeholder: '+1 (202) 555-0136',
  errorText: 'Wrong format',
}

export const Number: ComponentStory<typeof Input> = Template.bind({})
Number.args = {
  label: 'ZIP Code',
  type: 'number',
  name: 'zip',
  id: 'zip',
  error: false,
  placeholder: '10001',
  errorText: 'Wrong format',
}

export const Error: ComponentStory<typeof Input> = Template.bind({})
Error.args = {
  label: 'Name',
  type: 'text',
  name: 'name',
  id: 'name',
  placeholder: 'Alexei Ward',
  error: true,
  errorText: 'Required',
}
