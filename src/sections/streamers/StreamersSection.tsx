import * as React from 'react';
import StreamerDetails from '../../components/streamer-details/StreamerDetails';
import StreamerGrid from '../../components/streamer-grid/StreamerGrid';
import { StreamerObject } from '../../types/types';
import logo from '../../media/logo_draft.png';
import axios from 'axios';

export default function StreamerSection() {

    const [streamerInfo, setStreamerInfo] = React.useState<StreamerObject | null>(null);
    const [streamers, setStreamers] = React.useState<StreamerObject[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
              'http://localhost:8080/streamers',
            )
            setStreamers(result.data);
          };
       
          if(streamers.length === 0) fetchData();
    }, [streamers]);
  
    const setStreamer = (streamer: StreamerObject) => {
        setStreamerInfo(streamer);
    }

    const handlePrevious = () => {
        if(streamerInfo) { 
            const index = streamers?.indexOf(streamerInfo);
            if(index > 0) {
                setStreamerInfo(streamers[index-1])
            }
        }
    }

    const handleNext = () => {
        if(streamerInfo) {
            const index = streamers?.indexOf(streamerInfo);
            if(index < streamers.length - 1) {
                setStreamerInfo(streamers[index+1]);
            }
        }
    }

    const setStreamerById = (id: number) => {
        if(streamers !== null) setStreamerInfo(streamers.filter((e) => e.id === id)[0]);
    }

    return (
        <div id='streamers' style={{minHeight: '100vh', paddingTop: 50, position: 'relative', zIndex: 10}}>
            {streamerInfo != null ? 
            <StreamerDetails position={streamers.indexOf(streamerInfo)} setStreamer={setStreamerById} streamer={streamerInfo}
                handleNext={handleNext} handlePrevious={handlePrevious} maxStreamers={streamers.length}/> : 
                <div style={{minHeight: '60vh', textAlign: 'center'}}><img src={logo} alt={'phenomena'}/></div>}
            {streamers != null && <StreamerGrid streamers={streamers} setStreamerInfo={setStreamer}/>}
        </div>
    );
}