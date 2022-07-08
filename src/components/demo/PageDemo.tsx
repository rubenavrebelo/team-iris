import { Link, Typography } from '@mui/material';
import grey from '@mui/material/colors/grey';
import axios from 'axios';
import * as React from 'react';
import { StreamerSection } from '../../sections/streamers/StreamersSection';
import TextSection from '../../sections/text-section/TextSection';
import { SectionObject } from '../../types/types';
import Navbar from '../navbar/Navbar';
import './Demo.scss';
import footbarBackground from '../../media/fundo_zolhos_brancos_sem_sombras2.png';
import { makeStyles } from 'tss-react/mui';
import TwitterIcon from '@mui/icons-material/Twitter';
import './main.scss';
import ProjectSection from '../../sections/project-section/ProjectSection';
const footbarColor = grey[900];

const useStyles = makeStyles()((theme) => ({
  footbar: {
    height: '15vh',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 25,
    background:
      'linear-gradient(65deg, rgba(8,35,153,1) 0%, rgba(232,8,182,1) 33%, rgba(66,146,204,1) 64%, rgba(236,106,204,1) 94%)',
    backgroundSize: '120%',
    backgroundPositionX: '68%',
    position: 'relative',
  },
  copyRights: {
    color: 'white',
    position: 'absolute',
    right: 0,
    bottom: 0,
    fontSize: 12,
    ['@media (max-width:882px)']: {
      fontSize: 8,
    },
  },
}));

export default function PageDemo() {
  const [currentSection, setSection] = React.useState<string>('');
  const [sections, setSections] = React.useState<SectionObject[]>([]);
  const [inStreamerDetails, setInStreamerDetails] =
    React.useState<boolean>(false);
  const [navbarFontColor, setNavbarFontColor] = React.useState<boolean>(false);

  const { classes } = useStyles();

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}sections`
      );
      setSections(result.data);
    };

    if (sections.length === 0) fetchData();
  }, [sections]);

  const setCurrentSection = (section: string) => {
    setSection(section);
  };

  const handleFontColor = (val: boolean) => {
    setNavbarFontColor(val);
  };

  const handleDetails = (val: boolean) => {
    setInStreamerDetails(val);
  };

  return (
    <div id={'main'} className={'main'}>
      <Navbar
        section={currentSection}
        setCurrentSection={setCurrentSection}
        sections={sections}
        detailsOpen={inStreamerDetails}
        handleFontColor={handleFontColor}
        navbarFontColor={navbarFontColor}
      />
      <StreamerSection handleFontColor={handleDetails} />
      <div>
        {sections.map((sec, i) => (
          <div
            style={{
              backgroundColor: 'white',
              padding: 15,
              marginTop: i === 0 ? 40 : 0,
            }}
          >
            {i !== 0 && (
              <div
                style={{
                  background:
                    'linear-gradient(321deg, #082399, #4292cc, #ec6acc, #e808b6)',
                  width: '100%',
                  height: 3,
                  marginBottom: 20,
                }}
              />
            )}
            <TextSection
              title={sec.title}
              text={sec.text}
              position={sec.position}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          width: '90%',
          margin: '0 auto',
        }}
      >
        <ProjectSection />
      </div>
      <footer className={classes.footbar}>
        <Typography className={classes.copyRights}>
          Team Iris {'& '}
          <Link
            href={'https://github.com/rubenavrebelo'}
            underline={'none'}
            style={{ color: 'white' }}
          >
            dentsune
          </Link>{' '}
          © Copyright 2022. All Rights Reserved.
        </Typography>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${footbarBackground})`,
            backgroundSize: '50%',
            backgroundPositionY: '75%',
          }}
        >
          <div
            style={{
              paddingTop: 25,
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'center',
              backgroundColor: 'rgba(8, 35, 153, 0.5)',
              width: '100%',
              height: '100%',
              boxSizing: 'border-box',
            }}
          >
            <div className={'contacts'}>
              <Typography
                style={{
                  color: 'white',
                  fontFamily: 'Sugo',
                  letterSpacing: 0.6,
                }}
                variant={'h6'}
              >
                Contacts
              </Typography>
              <Typography style={{ color: 'white' }}>
                team@phenomena.com
              </Typography>
            </div>
            <div className={'socials'}>
              <Typography
                style={{
                  color: 'white',
                  fontFamily: 'Sugo',
                  letterSpacing: 0.6,
                }}
                variant={'h6'}
              >
                Socials
              </Typography>
              <div>
                <Link
                  href={'https://www.twitch.tv/team/iris'}
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
