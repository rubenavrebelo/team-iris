import * as React from 'react';
import Avatar from '../avatar/Avatar';
import StreamerDetails from '../streamer-details/StreamerDetails';
import './Streamer.scss';

interface demoProps {
    demo?: boolean;
}

export default function Streamer(props: demoProps) {

    const [modal, setModal] = React.useState<boolean>(false);
    const activeModal = () => {
        setModal(!modal)
    }

    return (
        <div>
            {!props.demo && modal && <StreamerDetails/>}
            <div className="GradientBorder" onClick={activeModal}>
                <Avatar/>
            </div>
        </div>  
    );
}