import * as React from "react";
import { Datagrid, DeleteButton, EditButton, List, TextField } from 'react-admin';

export const StringToLabelObject = ({ record, children, ...rest }: any) =>
  React.cloneElement(children, {
    record: { label: record },
    ...rest,
  })


export const SectionList = (props: any) => {

    return (<List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="text" />
            <TextField source="position" />
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
)}