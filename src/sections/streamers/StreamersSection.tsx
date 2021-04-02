import * as React from 'react';
import StreamerDetails from '../../components/streamer-details/StreamerDetails';
import StreamerGrid from '../../components/streamer-grid/StreamerGrid';
import { StreamerObject } from '../../types/types';
import logo from '../../media/logo_draft.png';
import axios from 'axios';

export default function StreamerSection() {

    const [streamerInfo, setStreamerInfo] = React.useState<StreamerObject | null>(null);
    const [streamers, setStreamers] = React.useState<StreamerObject[] | null>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
              'http://localhost:8080/streamers',
            );
            setStreamers(result.data);
          };
       
          if(streamers === null) fetchData();
    });
  
    const setStreamer = (streamer: StreamerObject) => {
        setStreamerInfo(streamer);
    }

    return (
        <div id='streamers' style={{minHeight: '100vh', paddingTop: 50, position: 'relative', zIndex: 10}}>
            {streamerInfo != null ? <StreamerDetails streamer={streamerInfo}/> : <div style={{minHeight: '60vh', textAlign: 'center'}}><img src={logo} alt={'phenomena'}/></div>}
            {streamers != null && <StreamerGrid streamers={streamers} setStreamerInfo={setStreamer}/>}
        </div>
    );
}