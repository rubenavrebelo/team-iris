import { Link, Typography } from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import { keyframes } from 'tss-react';
import { makeStyles } from 'tss-react/mui';
import StreamerDetails from '../../components/streamer-details/StreamerDetails';
import StreamerGrid from '../../components/streamer-grid/StreamerGrid';
import iris from '../../media/iris.mp4';
import logo from '../../media/logo_draft.png';
import { StreamerObject } from '../../types/types';
import logoMain from '../../media/logo_main.png';
import { MainVideo } from '../main-video/MainVideo';

const useStyles = makeStyles()((theme) => ({
  videoOverlay: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    zIndex: 30,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontSize: 32,
    fontWeight: 700,
    lineHeight: '26px',
  },
  subText: {
    color: 'white',
    fontSize: 26,
    marginTop: 30,
    fontWeight: 500,
  },
  hidden: {
    opacity: 0,
    animation: `${keyframes`
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
            `} 1.5s ease-in-out`,
  },
}));

export interface StreamersSectionProps {
  handleFontColor: (val: boolean) => void;
}

export const StreamerSection: React.FC<StreamersSectionProps> = ({
  handleFontColor,
}) => {
  const [streamerInfo, setStreamerInfo] = React.useState<StreamerObject | null>(
    null
  );
  const [streamers, setStreamers] = React.useState<StreamerObject[]>([]);

  const { classes } = useStyles();

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://www.rubenrebelo.xyz/streamers');
      setStreamers(result.data);
    };

    if (streamers.length === 0) fetchData();
  }, [streamers]);

  const setStreamer = (streamer: StreamerObject) => {
    setStreamerInfo(streamer);
    handleFontColor(true);
  };

  const handlePrevious = () => {
    if (streamerInfo) {
      const index = streamers?.indexOf(streamerInfo);
      if (index > 0) {
        setStreamerInfo(streamers[index - 1]);
      }
    }
  };

  const handleNext = () => {
    if (streamerInfo) {
      const index = streamers?.indexOf(streamerInfo);
      if (index < streamers.length - 1) {
        setStreamerInfo(streamers[index + 1]);
      }
    }
  };

  const removeStreamerInfo = () => {
    setStreamerInfo(null);
    handleFontColor(false);
  };

  const setStreamerById = (id: number) => {
    if (streamers !== null)
      setStreamerInfo(streamers.filter((e) => e.id === id)[0]);
  };

  return (
    <>
      <div id="streamers" style={{ position: 'relative', zIndex: 10 }}>
        {streamerInfo != null ? (
          <div style={{ marginTop: 90 }}>
            <StreamerDetails
              position={streamers.indexOf(streamerInfo)}
              setStreamer={setStreamerById}
              streamer={streamerInfo}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              maxStreamers={streamers.length}
              resetStreamer={removeStreamerInfo}
            />
          </div>
        ) : (
          <MainVideo />
        )}
      </div>
      {streamers != null && (
        <div
          style={{
            marginTop: 50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant={'h3'}
            style={{ marginBottom: 20, fontFamily: 'Sugo' }}
          >
            Conheçam a Equipa
          </Typography>
          <StreamerGrid streamers={streamers} setStreamerInfo={setStreamer} />
        </div>
      )}
    </>
  );
};
