import { Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { StreamerObject } from '../../types/types';
import Streamer from '../streamer/Streamer';

const useStyles = makeStyles()((theme) => ({
  grid: {
    width: '90%',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
  },
}));

export interface StreamerGridProps {
  setStreamerInfo: (streamer: StreamerObject) => void;
  streamers: StreamerObject[];
}

export default function StreamerGrid(props: StreamerGridProps) {
  const { setStreamerInfo } = props;

  const { classes } = useStyles();

  const generateGrid = () => {
    return props.streamers.map((streamer: StreamerObject) => (
      <Grid
        item
        key={streamer.username + '-grid'}
        style={{ marginTop: 60, zIndex: 50 }}
      >
        <Streamer streamer={streamer} setStreamerInfo={setStreamerInfo} />
      </Grid>
    ));
  };

  return (
    <Grid container spacing={3} className={classes.grid}>
      {generateGrid()}
    </Grid>
  );
}
