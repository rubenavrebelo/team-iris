import * as React from "react";
import { Datagrid, DeleteButton, EditButton, ImageField, List, RichTextField, TextField } from 'react-admin';

export const StringToLabelObject = ({ record, children, ...rest }: any) =>
  React.cloneElement(children, {
    record: { label: record },
    ...rest,
  })


export const ProjectList = (props: any) => {

    return (<List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <RichTextField source="description" />
            <ImageField source="image"/>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
)}