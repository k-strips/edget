import { ComponentMeta, ComponentStory } from '@storybook/react'

// local atomic component import
import { Radio } from '../../app/components/UI/atoms'

export default {
  title: 'Atoms/Radio',
  component: Radio,
  argTypes: {},
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const Primary = Template.bind({})
Primary.args = {}
