import * as React from 'react';
import {
  SimpleForm,
  TextInput,
  Create,
  ImageInput,
  CheckboxGroupInput,
  ImageField,
  RadioButtonGroupInput,
} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

const validateUserCreation = (values: any) => {
  var expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
  var t = 'www.twitch.tv';
  const errors: any = {};
  if (!values.url) {
    errors.url = 'The Twitch URL is required';
  }
  if (!values.avatar) {
    errors.avatar = 'An avatar is required';
  }
  if (!values.videourl) {
    errors.videourl = 'A video URL is required';
  }
  if (!values.pronouns) {
    errors.pronouns = 'Pronouns are required for streamer creation';
  }
  if (!values.username) {
    errors.username = 'A username is required';
  }
  if (!values.url.match(regex)) {
    errors.url = 'Must be an URL';
  }
  if (!values.role) {
    errors.role = 'Must have a role';
  }
  if (
    !values.url.includes('http://www.twitch.tv/') &&
    !values.url.includes('www.twitch.tv/')
  ) {
    errors.url = 'URL has to be a Twitch URL (must have at least www)';
  }
  return errors;
};

export const StreamerCreate = (props: any) => (
  <Create {...props} redirect={'list'}>
    <SimpleForm validate={validateUserCreation}>
      <TextInput source="username" />
      <TextInput source="url" />
      <ImageInput source="avatar" accept={'image/*'}>
        <ImageField source="avatar" title="title" />
      </ImageInput>
      <CheckboxGroupInput
        label="Pronouns"
        source="pronouns"
        choices={[
          { id: 'he', name: 'Ele/Dele' },
          { id: 'she', name: 'Ela/Dela' },
          { id: 'they', name: 'Elu/Delu' },
          { id: 'it', name: 'Desse/Desses' },
        ]}
      />
      <RichTextInput source={'description'} />
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
          { id: 'Founder', name: 'Founder' },
          { id: 'Leader', name: 'Leader' },
          { id: 'Streamer', name: 'Streamer' },
        ]}
      />
    </SimpleForm>
  </Create>
);
