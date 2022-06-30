import { Link, Typography } from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import { keyframes } from 'tss-react';
import { makeStyles } from 'tss-react/mui';
import StreamerDetails from '../../components/streamer-details/StreamerDetails';
import StreamerGrid from '../../components/streamer-grid/StreamerGrid';
import iris from '../../media/iris.mp4';
import logo from '../../media/logo_draft.webp';
import { StreamerObject } from '../../types/types';
import logoMain from '../../media/logo_main.webp';

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

export interface MainVideoProps {
  handleSeparators: (val: boolean) => void;
}

export const MainVideo: React.FC<MainVideoProps> = ({ handleSeparators }) => {
  const { classes } = useStyles();

  const [showVideo, setShowVideo] = React.useState<boolean>(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShowVideo(true);
      handleSeparators(true);
    }, 1800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div style={{ minHeight: '100vh', textAlign: 'center' }}>
        {!showVideo ? (
          <div
            style={{
              height: '110vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className={classes.hidden}
          >
            <picture>
              <img src={logo} alt={'iris'} />
            </picture>
          </div>
        ) : (
          <div>
            <video
              src={iris}
              controls={false}
              autoPlay
              muted
              loop
              style={{ width: '100%' }}
            />
            <div className={classes.videoOverlay}>
              <picture>
                <img
                  src={logoMain}
                  style={{ width: '50%' }}
                  alt={'Video Logo'}
                />
              </picture>
              <Typography className={classes.subText}>
                Equipa LGBTQIA2+ Portuguesa a dar cor ao Arco-Íris no{' '}
                <Link
                  href={'http://www.twitch.tv/team/iris'}
                  underline={'none'}
                  style={{ color: '#6441a5' }}
                >
                  @Twitch
                </Link>
                .
                <br />
                Orgulhoses das nossas individualidades.
              </Typography>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
