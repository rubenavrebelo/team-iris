import * as React from 'react';
import {SimpleForm, TextInput, Create, ImageInput, CheckboxGroupInput, ImageField} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const StreamerCreate = (props: any) => (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="username" />
                <TextInput source="url" />
                <ImageInput source="avatar" accept={'image/*'}>
                    <ImageField source="avatar" title="title" />
                </ImageInput>
                <CheckboxGroupInput label="Pronouns" source="pronouns" choices={[
                    { id: 'he', name: 'He/Him' },
                    { id: 'she', name: 'She/Her' },
                    { id: 'they', name: 'They/Them' },
                    { id: 'it', name: 'It/Its' },
                ]} />
                <TextInput source="videourl" />
            </SimpleForm>
        </Create>
    );
