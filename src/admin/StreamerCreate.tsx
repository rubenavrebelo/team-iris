import * as React from 'react';
import {SimpleForm, TextInput, Create, ImageInput, CheckboxGroupInput, ImageField} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const StreamerCreate = (props: any) => (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="username" />
                <TextInput source="url" />
                <ImageInput source="avatar" accept={'image/*'}>
                    <ImageField source="src" title="title" />
                </ImageInput>
                <CheckboxGroupInput label="Pronouns" source="pronouns" choices={[
                    { id: 'He/Him', name: 'He/Him' },
                    { id: 'She/Her', name: 'She/Her' },
                    { id: 'They/Them', name: 'They/Them' },
                    { id: 'It/Its', name: 'It/Its' },
                ]} />
                <TextInput source="videourl" validation={{ required: true }} />
                <RichTextInput source="description" validation={{ required: true }} />
            </SimpleForm>
        </Create>
    );
