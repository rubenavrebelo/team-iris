import { Grid } from '@material-ui/core';
import * as React from 'react';
import { StreamerObject } from '../../types/types';
import Streamer from '../streamer/Streamer';

export interface StreamerGridProps {
    setStreamerInfo: (streamer: StreamerObject) => void;
}

export default function StreamerGrid(props: StreamerGridProps) {
    const {setStreamerInfo} = props;

    return (
        <Grid container spacing={3} justify={'space-evenly'} style={{width: '90%', margin: '0 auto'}}>
            <Grid item><Streamer setStreamerInfo={setStreamerInfo}/></Grid>
            <Grid item><Streamer setStreamerInfo={setStreamerInfo}/></Grid>
            <Grid item><Streamer setStreamerInfo={setStreamerInfo}/></Grid>
            <Grid item><Streamer setStreamerInfo={setStreamerInfo}/></Grid>
            <Grid item><Streamer setStreamerInfo={setStreamerInfo}/></Grid>
            <Grid item><Streamer setStreamerInfo={setStreamerInfo}/></Grid>
            <Grid item><Streamer setStreamerInfo={setStreamerInfo}/></Grid>
            <Grid item><Streamer setStreamerInfo={setStreamerInfo}/></Grid>
            <Grid item><Streamer setStreamerInfo={setStreamerInfo}/></Grid>
            <Grid item><Streamer setStreamerInfo={setStreamerInfo}/></Grid>
            <Grid item><Streamer setStreamerInfo={setStreamerInfo}/></Grid>

        </Grid>
    );
}