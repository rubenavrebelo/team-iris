import * as React from 'react';
import StreamerDetails from '../../components/streamer-details/StreamerDetails';
import StreamerGrid from '../../components/streamer-grid/StreamerGrid';
import { StreamerObject } from '../../types/types';
import logo from '../../media/logo_draft.png';
import iris from '../../media/iris.mp4';
import axios from 'axios';
import { makeStyles } from 'tss-react/mui';
import { Typography } from '@mui/material';

const useStyles = makeStyles()((theme) => ({
    videoOverlay: {
        backgroundColor: 'rgba(0,0,0, 0.7)',
        zIndex: 30,
        width: '100%',
        height: '80.5%',
        position:'absolute',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    text: {
        color: 'white',
        fontSize: 32,
        fontWeight: 700,
        lineHeight: "26px",
    },
    subText: {
        color: 'white',
        fontSize: 26,
        fontWeight: 500,
    }
}));

export const StreamerSection: React.FC = () =>  {
    const [streamerInfo, setStreamerInfo] = React.useState<StreamerObject | null>(null);
    const [streamers, setStreamers] = React.useState<StreamerObject[]>([]);
    const [showVideo, setShowVideo] = React.useState<boolean>(false);

    const {classes} = useStyles();

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
              'http://localhost:8080/streamers',
            )
            setStreamers(result.data);
          };
       
          if(streamers.length === 0) fetchData();
    }, [streamers]);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setShowVideo(true)
        }, 500);
        return () => clearTimeout(timeout);
    }, [])
  
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
        <div id='streamers' style={{minHeight: '100vh', position: 'relative', zIndex: 10}}>
            {streamerInfo != null ? 
            <StreamerDetails position={streamers.indexOf(streamerInfo)} setStreamer={setStreamerById} streamer={streamerInfo}
                handleNext={handleNext} handlePrevious={handlePrevious} maxStreamers={streamers.length}/> : 
                <div style={{minHeight: '60vh', textAlign: 'center'}}>
                    {!showVideo ? <img src={logo} alt={'phenomena'}/> : 
                    <div>
                        <video src={iris} controls={false} autoPlay muted loop style={{width: '100%'}}/>
                        <div className={classes.videoOverlay}>
                            <Typography className={classes.text}>Eevo's bussy.</Typography>
                            <Typography className={classes.subText}>A maior, a mais grossa, a mais gostosa bussy</Typography>
                        </div>
                    </div>}
                </div>}
            {streamers != null && <StreamerGrid streamers={streamers} setStreamerInfo={setStreamer}/>}
        </div>
    );
}