// in src/App.js
import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, UserList } from "./Streamer-List";
import authProvider from "./authProvider";
import { PostEdit } from "./SectionEdit";
import Dashboard from './Dashboard';

const AdminPanel = () => <Admin dataProvider={jsonServerProvider("https://jsonplaceholder.typicode.com")} authProvider={authProvider} 
dashboard={Dashboard}>
    <Resource name="posts" list={PostList} edit={PostEdit}  />
    <Resource name="users" list={UserList} />
</Admin>
export default AdminPanel;