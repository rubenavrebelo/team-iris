// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { StreamerList } from "./Streamers/Streamer-List";
import {authProvider} from "./authProvider";
import Dashboard from './Dashboard';
import { StreamerEdit } from "./Streamers/StreamerEdit";
import { StreamerCreate } from "./Streamers/StreamerCreate";
import myDataProvider from "./ImageHandler";

//@ts-ignore
const AdminPanel = () => <Admin dataProvider={myDataProvider} authProvider={authProvider} 
dashboard={Dashboard}>
    <Resource name="streamers" list={StreamerList} edit={StreamerEdit} create={StreamerCreate} />
</Admin>
export default AdminPanel;