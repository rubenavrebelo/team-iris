import * as React from 'react';
import { StreamerObject } from '../../types/types';
import Avatar from '../avatar/Avatar';
import './Streamer.scss';
import { animateScroll as scroll } from 'react-scroll';
import { Typography } from '@mui/material';

export interface StreamerProps {
  setStreamerInfo: (streamer: StreamerObject) => void;
  streamer: StreamerObject;
}

export default function Streamer(props: StreamerProps) {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    props.setStreamerInfo(props.streamer);
    scroll.scrollTo(0);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className="GradientBorder" onClick={handleClick}>
        <Avatar streamer={props.streamer} />
        <Typography
          style={{
            fontFamily: 'Sugo',
            fontSize: 24,
            marginTop: -4,
            color: 'white',
            height: 30,
          }}
        >
          {props.streamer.username}
        </Typography>
        <Typography
          style={{
            fontFamily: 'Sugo',
            fontSize: 16,
            marginTop: -4,
            color: 'white',
            fontWeight: 400,
          }}
        >
          {props.streamer.role}
        </Typography>
      </div>
    </div>
  );
}
