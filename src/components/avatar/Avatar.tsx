import * as React from 'react';
import { StreamerObject } from '../../types/types';

export interface AvatarProps {
  streamer: StreamerObject;
}

export default function Avatar(props: AvatarProps) {
  const [hover, setHover] = React.useState<boolean>();

  const gifPlay = () => {
    setHover(true);
  };

  const gifStop = () => {
    setHover(false);
  };

  //     <img src={!hover ? props.streamer.avatar : 'https://i.imgur.com/hhlkqDf.gif'} onMouseEnter={gifPlay} onMouseLeave={gifStop} alt={'Eevolicious'}

  return (
    <img
      src={props.streamer.avatar}
      alt={`${props.streamer.username}'s avatar`}
      style={{
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    />
  );
}
