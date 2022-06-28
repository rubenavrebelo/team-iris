import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  Avatar,
  ButtonBase,
  Card,
  CardContent,
  Grid,
  IconButton,
  Link,
  responsiveFontSizes,
  Typography,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import parse from 'html-react-parser';
import * as React from 'react';
import { ReactComponent as TwitchLogo } from '../../media/twitch.svg';
import { StreamerObject } from '../../types/types';
import GenderBits from '../gender-bits/GenderBits';
import './StreamerDetails.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import { makeStyles } from 'tss-react/mui';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const useStyles = makeStyles()((theme) => ({
  insta: {
    background:
      'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
    filter:
      "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 )",
  },
}));

export interface StreamerDetailsProps {
  streamer: StreamerObject;
  setStreamer: (id: number) => void;
  handlePrevious: () => void;
  handleNext: () => void;
  maxStreamers: number;
  position: number;
  resetStreamer: () => void;
}

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function StreamerDetails(props: StreamerDetailsProps) {
  const { classes } = useStyles();
  const twitchEmbed =
    'https://player.twitch.tv/?channel=%streamername%&parent=www.example.com';

  const [currentVideo, setCurrentVideo] = React.useState<'youtube' | 'twitch'>(
    'youtube'
  );

  const genGenderBits = () => {
    return props.streamer.pronouns.map((pronoun: string) => (
      <GenderBits key={pronoun} pronoun={pronoun} />
    ));
  };

  const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.handleNext();
  };

  const handlePrevious = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.handlePrevious();
  };

  const { streamer, maxStreamers } = props;

  return (
    <div
      style={{ width: '100%', margin: '0 auto', padding: '35px 0px' }}
      id={'streamers-details'}
      className={'details-background'}
    >
      <Grid container spacing={2}>
        <Grid item xs={1} style={{ display: 'flex', alignItems: 'center' }}>
          {props.position !== 0 && (
            <ButtonBase
              style={{ margin: '0 auto' }}
              onClick={(e) => handlePrevious(e)}
            >
              <Avatar>
                <ChevronLeftIcon fontSize={'large'} />
              </Avatar>
            </ButtonBase>
          )}
        </Grid>
        <Grid item xs={7}>
          <div className={'player-wrapper'} style={{ position: 'relative' }}>
            {!streamer.videourl.includes('player.twitch.tv') && (
              <ButtonBase
                onClick={() =>
                  setCurrentVideo(
                    currentVideo === 'youtube' ? 'twitch' : 'youtube'
                  )
                }
                style={{
                  zIndex: 1000,
                  position: 'absolute',
                  display: 'flex',
                  bottom: 12,
                  right: currentVideo === 'twitch' ? 177 : 150,
                }}
              >
                {currentVideo === 'youtube' ? (
                  <YouTubeIcon style={{ marginRight: 8, color: '#FF0000' }} />
                ) : (
                  <TwitchLogo
                    style={{
                      fill: 'pink',
                      width: 24,
                      height: 24,
                      marginRight: 8,
                    }}
                  />
                )}
                <Typography style={{ color: 'white', fontWeight: 500 }}>
                  Swap to {currentVideo === 'youtube' ? 'Channel' : 'Trailer'}
                </Typography>
              </ButtonBase>
            )}
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              title="video"
              src={
                streamer.videourl.includes('player.twitch.tv')
                  ? streamer.videourl.replace(
                      'www.example.com',
                      'phenomenateam.netlify.app'
                    )
                  : currentVideo === 'youtube'
                  ? streamer.videourl
                  : twitchEmbed
                      .replace('www.example.com', 'phenomenateam.netlify.app')
                      .replace('%streamername%', streamer.username)
              }
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <Card
            style={{
              width: '23vw',
              height: '64.5vh',
              display: 'inline-block',
              textAlign: 'unset',
              position: 'relative',
            }}
          >
            <IconButton
              style={{ position: 'absolute', right: 10, top: 10 }}
              onClick={() => props.resetStreamer()}
            >
              <CloseIcon />
            </IconButton>
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '95%',
              }}
            >
              <div>
                <Typography
                  gutterBottom
                  variant="h4"
                  style={{
                    fontSize: '2.55vw',
                    fontFamily: 'Sugo',
                    letterSpacing: '1.6px',
                  }}
                >
                  {streamer.username}
                </Typography>
                <div>{genGenderBits()}</div>
                <Typography variant={'body2'} style={{ fontSize: '1.2rem' }}>
                  {parse(streamer.description)}
                </Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography style={{ marginBottom: 12 }}>
                  Find me on my socials:
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <Link
                    href={`http://twitch.tv/${streamer.username}`}
                    underline={'none'}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginRight: 16,
                    }}
                  >
                    <TwitchLogo
                      style={{
                        color: 'white',
                        width: 32,
                        height: 32,
                        marginRight: 8,
                      }}
                    />
                  </Link>
                  {streamer.twitter && (
                    <Link
                      href={streamer.twitter}
                      underline={'none'}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: 16,
                      }}
                    >
                      <TwitterIcon
                        style={{
                          color: '#1DA1F2',
                          width: 36,
                          height: 36,
                          marginRight: 8,
                        }}
                      />
                    </Link>
                  )}
                  {streamer.instagram && (
                    <Link
                      href={streamer.instagram}
                      underline={'none'}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: 16,
                      }}
                    >
                      <InstagramIcon
                        style={{
                          color: 'white',
                          width: 36,
                          height: 36,
                          borderRadius: 10,
                          marginRight: 8,
                        }}
                        className={classes.insta}
                      />
                    </Link>
                  )}
                  {streamer.tiktok && (
                    <Link
                      href={streamer.tiktok}
                      underline={'none'}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: 15,
                      }}
                    >
                      <InstagramIcon
                        style={{
                          color: 'white',
                          width: 36,
                          height: 36,
                          borderRadius: 10,
                          marginRight: 8,
                        }}
                        className={classes.insta}
                      />
                    </Link>
                  )}
                  {streamer.youtube && (
                    <Link
                      href={streamer.youtube}
                      underline={'none'}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: 15,
                      }}
                    >
                      <YouTubeIcon
                        style={{
                          color: '#FF0000',
                          width: 36,
                          height: 36,
                          borderRadius: 10,
                          marginRight: 8,
                        }}
                      />
                    </Link>
                  )}
                  {streamer.facebook && (
                    <Link
                      href={streamer.facebook}
                      underline={'none'}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: 15,
                      }}
                    >
                      <FacebookIcon
                        style={{
                          color: 'white',
                          width: 36,
                          height: 36,
                          borderRadius: 10,
                          marginRight: 8,
                        }}
                        className={classes.insta}
                      />
                    </Link>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs style={{ display: 'flex', alignItems: 'center' }}>
          {props.position !== maxStreamers - 1 && (
            <ButtonBase
              style={{ margin: '0 auto' }}
              onClick={(e) => handleNext(e)}
            >
              <Avatar>
                <ChevronRightIcon fontSize={'large'} />
              </Avatar>
            </ButtonBase>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
