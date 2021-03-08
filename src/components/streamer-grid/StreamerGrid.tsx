import { Grid } from '@material-ui/core';
import * as React from 'react';
import Streamer from '../streamer/Streamer';

export default function StreamerGrid() {

    return (
        <Grid container spacing={3}>
            <Grid item><Streamer demo/></Grid>
            <Grid item><Streamer demo/></Grid>
            <Grid item><Streamer demo/></Grid>
            <Grid item><Streamer demo/></Grid>
            <Grid item><Streamer demo/></Grid>
            <Grid item><Streamer demo/></Grid>
        </Grid>
    );
}