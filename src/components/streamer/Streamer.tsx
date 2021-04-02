import * as React from 'react';
import { StreamerObject } from '../../types/types';
import Avatar from '../avatar/Avatar';
import './Streamer.scss';
import { animateScroll as scroll } from 'react-scroll'


export interface StreamerProps {
    setStreamerInfo: (streamer: StreamerObject) => void;
    streamer: StreamerObject;
}

export default function Streamer(props: StreamerProps) {

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        props.setStreamerInfo(props.streamer)
        scroll.scrollTo(0);
    }

    return (
        <div>
            <div className="GradientBorder" onClick={handleClick}>
                <Avatar streamer={props.streamer}/>
            </div>
        </div>  
    );
}