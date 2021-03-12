import * as React from 'react';
import StreamerDetails from '../../components/streamer-details/StreamerDetails';
import StreamerGrid from '../../components/streamer-grid/StreamerGrid';
import { StreamerObject } from '../../types/types';
import logo from '../../media/logo_draft.png';

export default function StreamerSection() {

    const [streamerInfo, setStreamerInfo] = React.useState<StreamerObject | null>(null);
    const ref = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if(ref.current !== null) {
            // ref.current.clientHeight;
        }
      });
  
    const setStreamer = (streamer: StreamerObject) => {
        setStreamerInfo(streamer);
    }

    return (
        <div id='streamers' style={{minHeight: '100vh', marginTop: 20}}>
            {streamerInfo != null ? <StreamerDetails streamer={streamerInfo}/> : <div style={{minHeight: '60vh', textAlign: 'center'}}><img src={logo} alt={'phenomena'}/></div>}
            <StreamerGrid setStreamerInfo={setStreamer}/>
        </div>
    );
}