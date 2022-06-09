import { RichTextInput } from 'ra-input-rich-text';
import * as React from 'react';
import { CheckboxGroupInput, Create, RadioButtonGroupInput, SimpleForm, TextInput } from 'react-admin';

export const SectionCreate = (props: any) => (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="title" />
                <RichTextInput source="text" />
                <RadioButtonGroupInput label="Position" source="position" choices={[
                    { id: 'right', name: 'Right' },
                    { id: 'center', name: 'Center' },
                    { id: 'left', name: 'Left' },
                ]} />
            </SimpleForm>
        </Create>
    );
