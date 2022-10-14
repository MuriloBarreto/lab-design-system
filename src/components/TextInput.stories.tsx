import {Meta, StoryObj} from '@storybook/react'
import {Envelope} from 'phosphor-react'
import {TextInput, TextInputInputProps, TextInputRootProps} from "./TextInput"

export default {
    title: 'components/TextInput',
    component: TextInput.Root,
    args: {
        children: (
            <>
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>
            <TextInput.Input placeholder='Texto placeholder' />
            </>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder='Text' />
    }
}
