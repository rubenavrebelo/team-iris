import { Grid } from '@mui/material';
import * as React from 'react';
import { StreamerObject } from '../../types/types';
import Streamer from '../streamer/Streamer';
import _ from 'lodash';

export interface StreamerGridProps {
  setStreamerInfo: (streamer: StreamerObject) => void;
  streamers: StreamerObject[];
}

export default function StreamerGrid(props: StreamerGridProps) {
  const { setStreamerInfo } = props;

  const generateGrid = () => {
    const founders = _.shuffle(
      props.streamers.filter((streamer) => streamer.role === 'Founder')
    );
    const leaders = _.shuffle(
      props.streamers.filter((streamer) => streamer.role === 'Leader')
    );
    const streamers = _.shuffle(
      props.streamers.filter((streamer) => streamer.role === 'Streamer')
    );

    const toRender = [];
    toRender.push(
      ...founders.map((streamer: StreamerObject) => (
        <Grid item key={streamer.username + '-grid'} style={{ marginTop: 60 }}>
          <Streamer streamer={streamer} setStreamerInfo={setStreamerInfo} />
        </Grid>
      ))
    );
    toRender.push(
      ...leaders.map((streamer: StreamerObject) => (
        <Grid item key={streamer.username + '-grid'} style={{ marginTop: 60 }}>
          <Streamer streamer={streamer} setStreamerInfo={setStreamerInfo} />
        </Grid>
      ))
    );
    toRender.push(
      ...streamers.map((streamer: StreamerObject) => (
        <Grid item key={streamer.username + '-grid'} style={{ marginTop: 60 }}>
          <Streamer streamer={streamer} setStreamerInfo={setStreamerInfo} />
        </Grid>
      ))
    );

    return toRender;
  };

  return (
    <Grid
      container
      spacing={3}
      style={{
        width: '90%',
        margin: '0 auto',
        justifyContent: 'space-between',
      }}
    >
      {generateGrid()}
    </Grid>
  );
}
