import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, Text } from "components"

export default {
  tittle: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <div className='flex items-center gap-2'>
        {Story()}
        <Text size='sm'>Lembrar de mim por 30 dias.</Text>
      </div>
    )
  ]
} as Meta

export const Default: StoryObj = {}