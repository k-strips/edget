import { ComponentMeta, ComponentStory } from '@storybook/react'

// local atomic component import
import { Select } from '../../app/components/UI/atoms'

export default {
  title: 'Atoms/Select',
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'button',
}
