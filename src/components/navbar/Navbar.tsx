import { AppBar, createStyles, Theme, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import './Navbar.scss';
import grey from '@mui/material/colors/grey';
import pink from '@mui/material/colors/pink';
import { Link } from "react-scroll";
import logo from '../../media/logo_draft.png';
import { makeStyles } from 'tss-react/mui';

const navbarColor = grey[900];
const hoverColor = pink[200];

export interface NavbarProps {
  section?: string;
  setCurrentSection: (section: string) => void;
}


export default function Navbar(props: NavbarProps) {
  const [showNav, setShowNav] = React.useState<boolean>(false);
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
          textDecoration: 'none'
        },
    },
    typo: {
      fontWeight: 500
    },
    toolbar: {
      height: '100%'
    }
  }));
  const { classes } = useStyles();

  
    React.useEffect(() => {
      document.addEventListener("scroll", handleScroll);
      return () => {
        document.removeEventListener("scroll", handleScroll);
      }
    }, [showNav]);

    const handleScroll = () => {
      const scrolled = document.scrollingElement?.scrollTop
      if(scrolled) {
        if(scrolled >= 70) {
          setShowNav(true)
        }
        else setShowNav(false)
      }
    }

    const handleClick = () => {
      // setCurrentSection(event.target);
    }

    return (
    <AppBar position={'sticky'} style={{height: '8vh', backgroundColor: showNav ? navbarColor : 'transparent'}}
    elevation={0}>
        <Toolbar className={classes.toolbar}>
            <img src={logo} style={{height: '7vh'}} alt={'logo'}/>
            <div style={{ marginLeft: 'auto', float: 'right', height: '100%', display: 'table', borderSpacing: 26, borderCollapse: 'separate'}}>
            <Link className={classes.section} to={'streamers-grid'} offset={-100} smooth={true} onClick={handleClick}>
              <Typography className={classes.typo} style={{color: showNav ? 'white' : 'black'}}>Section 1</Typography>
              </Link>
            <Link className={classes.section} to={'test-section'} smooth={true} offset={-100}><Typography className={classes.typo} style={{color: showNav ? 'white' : 'black'}}>Section 2</Typography></Link>
            <Link className={classes.section} to={'streamers-details'}><Typography className={classes.typo} style={{color: showNav ? 'white' : 'black'}}>Section 3</Typography></Link>
            </div>
        </Toolbar>
    </AppBar>
    );
}