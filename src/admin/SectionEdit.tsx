import * as React from 'react';
import { Edit, SimpleForm, TextInput, Create} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';


const SectionEdit = ({ permissions, ...props }: any) => (

    <Edit {...props}>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="title" validation={{ required: true }} />
        <RichTextInput source="body" validation={{ required: true }} />
    </Edit>
);

export default SectionEdit;
