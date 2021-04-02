import { Grid } from '@material-ui/core';
import * as React from 'react';
import { StreamerObject } from '../../types/types';
import Streamer from '../streamer/Streamer';

export interface StreamerGridProps {
    setStreamerInfo: (streamer: StreamerObject) => void;
    streamers: StreamerObject[];
}

export default function StreamerGrid(props: StreamerGridProps) {
    const {setStreamerInfo} = props;

    const generateGrid = () => {
        return props.streamers.map((streamer: StreamerObject) => <Grid item key={streamer.username+"-grid"}>
            <Streamer streamer={streamer} setStreamerInfo={setStreamerInfo}/>
            </Grid>)
    }

    return (
        <Grid id={'streamers-grid'} container spacing={3} justify={'space-evenly'} style={{width: '90%', margin: '0 auto'}}>
            {generateGrid()}
        </Grid>
    );
}