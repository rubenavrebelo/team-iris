import { RichTextInput } from 'ra-input-rich-text';
import {
    Create,
    ImageField,
    ImageInput, SimpleForm,
    TextInput
} from 'react-admin';

export const ProjectCreate = (props: any) => (
  <Create {...props} redirect={'list'}>
    <SimpleForm>
      <TextInput source="title" />
      <RichTextInput source="description" />
      <ImageInput source="image" accept={'image/*'}>
        <ImageField source="image" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
