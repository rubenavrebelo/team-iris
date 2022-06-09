import * as React from 'react';
import { Edit, SimpleForm, TextInput, Create, CheckboxGroupInput} from 'react-admin';
import {RichTextInput} from 'ra-input-rich-text';


export const SectionEdit = ({ permissions, ...props }: any) => (

    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="title"  />
            <RichTextInput source={'text'} />
            <CheckboxGroupInput label="Position" source="position" choices={[
                    { id: 'right', name: 'Right' },
                    { id: 'middle', name: 'Middle' },
                    { id: 'left', name: 'Left' },
                ]} />
        </SimpleForm>
    </Edit>
);