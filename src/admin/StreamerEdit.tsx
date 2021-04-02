import * as React from 'react';
import { Edit, SimpleForm, TextInput, ImageField, ImageInput, CheckboxGroupInput} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';


export const PreviewImage = ({ record, source }: any) => {
    if (typeof (record) == "string") {
        record = {
            [source]: record
        }
    }
    return <ImageField record={record} source={source} />
}


export const StreamerEdit = (props: any) => (

    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="username" validation={{ required: true }} />
            <ImageInput source="avatar">
                <PreviewImage source="avatar" />
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
    </Edit>
);
