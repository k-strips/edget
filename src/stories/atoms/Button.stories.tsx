import { ComponentMeta, ComponentStory } from '@storybook/react'

// local atomic component import
import { Button } from '../../app/components/UI/atoms'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'button',
}
