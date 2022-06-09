import * as React from 'react';
import {SimpleForm, TextInput, Create, ImageInput, CheckboxGroupInput, ImageField} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

const validateUserCreation = (values: any) => {
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    var t = 'www.twitch.tv';
    const errors: any = {};
    if (!values.url) {
        errors.url = 'The Twitch URL is required';
    }
    if (!values.avatar) {
        errors.avatar = "An avatar is required";
    } 
    if(!values.videourl) {
        errors.videourl = "A video URL is required";
    }
    if(!values.pronouns) {
        errors.pronouns = "Pronouns are required for streamer creation";
    }
    if(!values.username) {
        errors.username = "A username is required";
    }
    if(!values.url.match(regex)) {
        errors.url = "Must be an URL"
    }
    console.log(!values.url.includes("http://www.twitch.tv/"), !values.url.includes("www.twitch.tv/"))
    if(!values.url.includes("http://www.twitch.tv/") && !values.url.includes("www.twitch.tv/")) {
        errors.url = "URL has to be a Twitch URL (must have at least www)";
    }
    return errors
};

export const StreamerCreate = (props: any) => (
        <Create {...props}>
            <SimpleForm validate={validateUserCreation}>
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
                <RichTextInput source={'description'} />
                <TextInput source="videourl" />
            </SimpleForm>
        </Create>
    );
