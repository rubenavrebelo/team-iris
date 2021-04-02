import * as React from "react";
import { List, Datagrid, TextField, EmailField, EditButton, ReferenceField, UrlField, ImageField, DeleteButton } from 'react-admin';

export const UserList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
            <EditButton/>
        </Datagrid>
    </List>
);

export const StreamerList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <UrlField source="url" />
            <ImageField source="avatar" />
            <TextField source="pronouns" />
            <UrlField source="videourl" />
            <TextField source="description" />
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);

export const PostList = (props: any) => (
    <List {...props}>
           <Datagrid>
               <TextField source="id" />
                <ReferenceField source="userId" reference="users">
                    <TextField source="name" />
                </ReferenceField>
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="body" />
                <EditButton />
            </Datagrid>
        </List>
    );