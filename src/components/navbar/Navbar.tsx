import { AppBar, Toolbar, Typography } from '@mui/material';
import grey from '@mui/material/colors/grey';
import pink from '@mui/material/colors/pink';
import * as React from 'react';
import { Link } from 'react-scroll';
import { makeStyles } from 'tss-react/mui';
import logo from '../../media/logo_draft.png';
import { SectionObject } from '../../types/types';
import './Navbar.scss';

const navbarColor = grey[900];
const hoverColor = pink[200];

export interface NavbarProps {
  section?: string;
  setCurrentSection: (section: string) => void;
  sections: SectionObject[];
  detailsOpen: boolean;
  handleFontColor: (val: boolean) => void;
  navbarFontColor: boolean;
}

export default function Navbar(props: NavbarProps) {
  const [showNav, setShowNav] = React.useState<boolean>(false);
  const [showSeparators, setShowSeparator] = React.useState<boolean>(false);
  const useStyles = makeStyles()((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    section: {
      color: showNav ? 'white' : navbarColor,
      cursor: 'pointer',
      marginRight: 10,
      marginLeft: 10,
      display: 'table-cell',
      verticalAlign: 'middle',
      '&:hover': {
        color: hoverColor,
        textDecoration: 'none',
      },
    },
    typo: {
      letterSpacing: '1.1px',
      fontFamily: 'SugoLight',
    },
    toolbar: {
      height: '100%',
    },
  }));
  const { classes } = useStyles();

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [showNav]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSeparator(true);
    }, 1800);
    return () => clearTimeout(timeout);
  }, []);

  const handleScroll = () => {
    const scrolled = document.scrollingElement?.scrollTop;
    if (scrolled) {
      if (scrolled >= 100) {
        setShowNav(true);
        if (props.detailsOpen) {
          props.handleFontColor(false);
        }
      } else {
        if (props.detailsOpen) {
          props.handleFontColor(true);
        }
        setShowNav(false);
      }
    }
  };

  const handleClick = () => {
    // setCurrentSection(event.target);
  };

  return (
    <AppBar
      position={'fixed'}
      style={{
        height: '8vh',
        backgroundColor: showNav ? navbarColor : 'transparent',
      }}
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
        <img src={logo} style={{ height: '7vh' }} alt={'Navbar logo'} />
        <div
          style={{
            marginLeft: 'auto',
            float: 'right',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {props.sections.map((sec, i) => (
            <Link
              className={classes.section}
              to={`${sec.title.replace(/\s/g, '-').toLowerCase()}-section`}
              offset={-100}
              smooth={true}
              onClick={handleClick}
            >
              <div style={{ height: '100%', display: 'flex' }}>
                <Typography
                  className={classes.typo}
                  style={{
                    color: props.navbarFontColor ? navbarColor : 'white',
                    marginRight: 16,
                  }}
                >
                  {sec.title}
                </Typography>
                {showSeparators && (
                  <div>
                    {i !== props.sections.length - 1 && (
                      <div
                        style={{
                          height: '100%',
                          width: 2,
                          background:
                            'linear-gradient(45deg, #082399, #4292cc, #ec6acc, #e808b6)',
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}
