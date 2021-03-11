import * as React from 'react';
import { Eevo, StreamerObject } from '../../types/types';
import Avatar from '../avatar/Avatar';
import './Streamer.scss';
import { animateScroll as scroll } from 'react-scroll'


export interface StreamerProps {
    setStreamerInfo: (streamer: StreamerObject) => void;
}

export default function Streamer(props: StreamerProps) {

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        props.setStreamerInfo(Eevo)
        scroll.scrollTo(0);
    }

    return (
        <div>
            <div className="GradientBorder" onClick={handleClick}>
                <Avatar/>
            </div>
        </div>  
    );
}