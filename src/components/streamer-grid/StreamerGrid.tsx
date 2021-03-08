import { Grid } from '@material-ui/core';
import * as React from 'react';
import Streamer from '../streamer/Streamer';

export default function StreamerGrid() {

    return (
        <Grid container spacing={3}>
            <Grid item><Streamer/></Grid>
            <Grid item><Streamer/></Grid>
            <Grid item><Streamer/></Grid>
            <Grid item><Streamer/></Grid>
            <Grid item><Streamer/></Grid>
            <Grid item><Streamer/></Grid>
        </Grid>
    );
}