import { AppBar, Toolbar, Typography } from '@mui/material';
import grey from '@mui/material/colors/grey';
import pink from '@mui/material/colors/pink';
import * as React from 'react';
import { Link } from "react-scroll";
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
      fontWeight: 500,
      fontSpacing: 0.6
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
        if(scrolled >= 100) {
          setShowNav(true)
        }
        else setShowNav(false)
      }
    }

    const handleClick = () => {
      // setCurrentSection(event.target);
    }

    return (
    <AppBar position={'fixed'} style={{height: '8vh', backgroundColor: showNav ? navbarColor : 'transparent'}}
    elevation={0}>
        <Toolbar className={classes.toolbar}>
            <img src={logo} style={{height: '7vh'}} alt={'logo'}/>
            <div style={{ marginLeft: 'auto', float: 'right', height: '100%', display: 'table', borderSpacing: 26, borderCollapse: 'separate'}}>
            {props.sections.map((sec) => <Link className={classes.section} to={`${sec.title.replace(/\s/g, '-').toLowerCase()}-section`} offset={-100} smooth={true} onClick={handleClick}>
              <Typography className={classes.typo} style={{color: 'white'}}>{sec.title}</Typography>
              </Link> )}
            </div>
        </Toolbar>
    </AppBar>
    );
}