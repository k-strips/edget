import { ComponentMeta, ComponentStory } from '@storybook/react'

// local atomic component import
import { Checkbox } from '../../app/components/UI/atoms'

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {},
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
