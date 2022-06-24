// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { authProvider } from "./authProvider";
import Dashboard from './Dashboard';
import myDataProvider from "./ImageHandler";
import { SectionCreate } from "./Sections/SectionCreate";
import { SectionEdit } from "./Sections/SectionEdit";
import { SectionList } from "./Sections/SectionList";
import { StreamerList } from "./Streamers/Streamer-List";
import { StreamerCreate } from "./Streamers/StreamerCreate";
import { StreamerEdit } from "./Streamers/StreamerEdit";
import { defaultTheme } from 'react-admin';
const theme = {
    ...defaultTheme,
    palette: {
        mode: 'dark',
    },
};

// @ts-ignore
const AdminPanel = () => <Admin theme={theme} dataProvider={myDataProvider} authProvider={authProvider} dashboard={Dashboard} requireAuth basename="/admin">
    <Resource name="streamers" list={StreamerList} edit={StreamerEdit} create={StreamerCreate} />
    <Resource name="Sections" list={SectionList} edit={SectionEdit} create={SectionCreate} />
</Admin>
export default AdminPanel;