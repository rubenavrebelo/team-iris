import * as React from 'react';
import { StreamerObject } from '../../types/types';

export interface AvatarProps {
    streamer: StreamerObject;
}

export default function Avatar(props: AvatarProps) {
    const [hover, setHover] = React.useState<boolean>();

    const gifPlay = () => {
        setHover(true);
    }

    const gifStop = () => {
        setHover(false);
    }

    return (
    <img src={!hover ? props.streamer.avatar : 'https://i.imgur.com/hhlkqDf.gif'} onMouseEnter={gifPlay} onMouseLeave={gifStop} alt={'Eevolicious'} 
    style={{width: '100%'}}/>);
}