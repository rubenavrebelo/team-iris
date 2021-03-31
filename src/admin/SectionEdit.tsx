import * as React from 'react';
import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import SelectInput from '@material-ui/core/Select/SelectInput';
import { Create } from '@material-ui/icons';


/*const SectionEdit = ({ permissions, ...props }: any) => (

    <Edit {...props}>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="title" validation={{ required: true }} />
        <RichTextInput source="body" validation={{ required: true }} />
    </Edit>
);

export default SectionEdit;*/

export const PostEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <RichTextInput source="body" validation={{ required: true }} />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props: any) => (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="id" />
                <TextInput source="title" />
                <TextInput multiline source="body" />
            </SimpleForm>
        </Create>
    );
