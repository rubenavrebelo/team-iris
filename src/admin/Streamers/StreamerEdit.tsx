import * as React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageField,
  ImageInput,
  CheckboxGroupInput,
  RadioButtonGroupInput,
} from 'react-admin';
import { RichTextInput, RichTextInputToolbar } from 'ra-input-rich-text';

export const PreviewImage = ({ record, source }: any) => {
  if (typeof record == 'string') {
    record = {
      [source]: record,
    };
  }
  return <ImageField record={record} source={source} />;
};

export const StreamerEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="url" />
      <ImageInput source="avatar" accept={'image/*'}>
        <ImageField source="src" title="title" />
      </ImageInput>
      <CheckboxGroupInput
        label="Pronouns"
        source="pronouns"
        choices={[
          { id: 'he', name: 'He/Him' },
          { id: 'she', name: 'She/Her' },
          { id: 'they', name: 'They/Them' },
          { id: 'it', name: 'It/Its' },
        ]}
      />
      <TextInput source="videourl" />
      <RichTextInput
        source={'description'}
        toolbar={<RichTextInputToolbar size="large" />}
      />
      <TextInput source="videourl" />
      <TextInput source="twitter" />
      <TextInput source="youtube" />
      <TextInput source="tiktok" />
      <TextInput source="facebook" />
      <TextInput source="instagram" />
      <RadioButtonGroupInput
        label="Role"
        source="role"
        choices={[
          { id: 'founder', name: 'Founder' },
          { id: 'Leader', name: 'Leader' },
          { id: 'Streamer', name: 'Streamer' },
        ]}
      />
    </SimpleForm>
  </Edit>
);
