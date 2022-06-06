import * as React from "react";
import { List, Datagrid, TextField, EditButton, UrlField, ImageField, DeleteButton, ChipField, SingleFieldList, ArrayField } from 'react-admin';
import { makeStyles } from "tss-react/mui";

export const StringToLabelObject = ({ record, children, ...rest }: any) =>
  React.cloneElement(children, {
    record: { label: record },
    ...rest,
  })

  const useStyles = makeStyles()((theme) => ({
    imgContainer: {
        '& img': {
            width: 250
        }
    }
  }));


export const StreamerList = (props: any) => {
    const { classes } = useStyles();

    return (<List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <UrlField source="url" />
            <ImageField source="avatar" className={classes.imgContainer}/>
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
)}