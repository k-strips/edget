import { ComponentMeta, ComponentStory } from '@storybook/react'

// local atomic component import
import { Table } from '../../app/components/UI/atoms'

export default {
  title: 'Atoms/Table',
  component: Table,
  argTypes: {},
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Primary = Template.bind({})
Primary.args = {
  tableHead: ['id', 'equipment', 'department', 'facility'],
  tableData: [
    {
      id: '1',
      equipment: 'shringe',
      department: 'labour ward',
      facility: 'amasaman',
    },
  ],
}
