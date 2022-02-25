import { ComponentMeta, ComponentStory } from '@storybook/react'

// local atomic component import
import { Input } from '../../app/components/UI/atoms'

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {}
