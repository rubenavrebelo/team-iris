import { RichTextInput } from 'ra-input-rich-text';
import * as React from 'react';
import { Edit, RadioButtonGroupInput, SimpleForm, TextInput } from 'react-admin';


export const SectionEdit = ({ permissions, ...props }: any) => (

    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="title"  />
            <RichTextInput source={'text'} />
            <RadioButtonGroupInput label="Position" source="position" choices={[
                    { id: 'right', name: 'Right' },
                    { id: 'center', name: 'Center' },
                    { id: 'left', name: 'Left' },
                ]} />
        </SimpleForm>
    </Edit>
);