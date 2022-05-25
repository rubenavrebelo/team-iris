// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { authProvider } from "./authProvider";
import Dashboard from './Dashboard';
import myDataProvider from "./ImageHandler";
import { StreamerList } from "./Streamers/Streamer-List";
import { StreamerCreate } from "./Streamers/StreamerCreate";
import { StreamerEdit } from "./Streamers/StreamerEdit";

const AdminPanel = () => <Admin dataProvider={myDataProvider} authProvider={authProvider} dashboard={Dashboard} requireAuth basename="/Admin">
    <Resource name="streamers" list={StreamerList} edit={StreamerEdit} create={StreamerCreate} />
</Admin>
export default AdminPanel;