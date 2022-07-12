import { RichTextInput } from 'ra-input-rich-text';
import { Edit, ImageField, ImageInput, SimpleForm, TextInput } from 'react-admin';


export const ProjectEdit = ({ permissions, ...props }: any) => (

    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="title" />
            <RichTextInput source="description" />
            <ImageInput source="image" accept={'image/*'}>
                <ImageField source="image" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);