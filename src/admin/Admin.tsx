// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PostList, StreamerList, UserList } from "./Streamer-List";
import {authProvider} from "./authProvider";
import { PostEdit } from "./SectionEdit";
import Dashboard from './Dashboard';
import { StreamerEdit } from "./StreamerEdit";
import { StreamerCreate } from "./StreamerCreate";
import myDataProvider from "./ImageHandler";

//@ts-ignore
const AdminPanel = () => <Admin dataProvider={myDataProvider} authProvider={authProvider} 
dashboard={Dashboard}>
    <Resource name="streamers" list={StreamerList} edit={StreamerEdit} create={StreamerCreate} />
    <Resource name="posts" list={PostList} edit={PostEdit}  />
    <Resource name="users" list={UserList} />
</Admin>
export default AdminPanel;