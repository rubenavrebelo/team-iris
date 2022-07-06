import * as React from 'react';
import { StreamerObject } from '../../types/types';
import Avatar from '../avatar/Avatar';
import './Streamer.scss';
import { animateScroll as scroll } from 'react-scroll';
import { Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  streamerName: {
    fontFamily: 'Sugo',
    fontSize: 24,
    marginTop: -4,
    color: 'white',
    height: 30,
    ['@media (max-width:882px)']: {
      // eslint-disable-line no-useless-computed-key
      fontSize: 14,
    },
  },
  streamerRole: {
    fontFamily: 'Sugo',
    fontSize: 16,
    marginTop: -4,
    color: 'white',
    fontWeight: 400,
    ['@media (max-width:882px)']: {
      // eslint-disable-line no-useless-computed-key
      fontSize: 12,
    },
  },
}));

export interface StreamerProps {
  setStreamerInfo: (streamer: StreamerObject) => void;
  streamer: StreamerObject;
}

export default function Streamer(props: StreamerProps) {
  const { classes } = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    props.setStreamerInfo(props.streamer);
    scroll.scrollTo(0);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className="GradientBorder" onClick={handleClick}>
        <Avatar streamer={props.streamer} />
        <Typography className={classes.streamerName}>
          {props.streamer.username}
        </Typography>
        <Typography className={classes.streamerRole}>
          {props.streamer.role}
        </Typography>
      </div>
    </div>
  );
}
