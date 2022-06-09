import { Link, Typography } from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import { keyframes } from "tss-react";
import { makeStyles } from 'tss-react/mui';
import StreamerDetails from '../../components/streamer-details/StreamerDetails';
import StreamerGrid from '../../components/streamer-grid/StreamerGrid';
import iris from '../../media/iris.mp4';
import logo from '../../media/logo_draft.png';
import { StreamerObject } from '../../types/types';
import logoMain from '../../media/logo_main.png';

const useStyles = makeStyles()((theme) => ({
    videoOverlay: {
        backgroundColor: 'rgba(0,0,0, 0.7)',
        zIndex: 30,
        width: '100%',
        height: '110.5vh',
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
        marginTop: 30,
        fontWeight: 500,
    },
    hidden: {
            "opacity": 0,
            "animation": `${keyframes`
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
            `} 1.5s ease-in-out`
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
        }, 1800);
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
    
    const removeStreamerInfo = () => {
        setStreamerInfo(null);
    }

    const setStreamerById = (id: number) => {
        if(streamers !== null) setStreamerInfo(streamers.filter((e) => e.id === id)[0]);
    }

    return (
        <div id='streamers' style={{minHeight: '100vh', position: 'relative', zIndex: 10}}>
            {streamerInfo != null ? 
            <div style={{marginTop: 90}}>
                <StreamerDetails position={streamers.indexOf(streamerInfo)} setStreamer={setStreamerById} streamer={streamerInfo}
                handleNext={handleNext} handlePrevious={handlePrevious} maxStreamers={streamers.length} resetStreamer={removeStreamerInfo}/>
                </div> : 
                <div style={{minHeight: '100vh', textAlign: 'center'}}>
                    {!showVideo ? <div style={{height: '110vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}} className={classes.hidden}>
                        <img src={logo} alt={'phenomena'}/>
                        </div> : 
                    <div>
                        <video src={iris} controls={false} autoPlay muted loop style={{width: '100%'}}/>
                        <div className={classes.videoOverlay}>
                            <img src={logoMain} style={{width: '50%'}}/>

                            <Typography className={classes.subText}>Equipa LGBTQIA2+ Portuguesa a dar cor ao Arco-Íris no <Link href={'http://www.twitch.tv/team/iris'}>@Twitch</Link>. 
                            <br/>Orgulhoses das nossas individualidades.</Typography>
                        </div>
                    </div>}
                </div>}
            {streamers != null && 
            <div style={{marginTop: 50, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography variant={'h3'} style={{marginBottom: 20}}>Meet our team</Typography>
                <StreamerGrid streamers={streamers} setStreamerInfo={setStreamer}/></div>}
        </div>
    );
}