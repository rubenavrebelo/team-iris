import * as React from "react";
import { List, Datagrid, TextField, EditButton, UrlField, ImageField, DeleteButton, ChipField, SingleFieldList, ArrayField } from 'react-admin';

export const StringToLabelObject = ({ record, children, ...rest }: any) =>
  React.cloneElement(children, {
    record: { label: record },
    ...rest,
  })

export const StreamerList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <UrlField source="url" />
            <ImageField source="avatar" />
            <ArrayField source={'pronouns'}>
                <SingleFieldList>
                <StringToLabelObject>
                    <ChipField source="label" />
                    </StringToLabelObject>
                </SingleFieldList>
            </ArrayField>
            <UrlField source="videourl" />
            <TextField source="description" />
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);