import * as React from 'react';
import static_eevo from '../../media/eevolicious.jpg';

export default function Avatar() {
    const [hover, setHover] = React.useState<boolean>();

    const gifPlay = () => {
        setHover(true);
    }

    const gifStop = () => {
        setHover(false);
    }

    return (
    <img src={!hover ? static_eevo : 'https://i.imgur.com/hhlkqDf.gif'} onMouseEnter={gifPlay} onMouseLeave={gifStop} alt={'Eevolicious'} 
    style={{width: '100%'}}/>);
}