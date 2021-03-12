import { AppBar, createStyles, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import * as React from 'react';
import './Navbar.scss';
import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';
import { Link } from "react-scroll";
import logo from '../../media/logo_draft.png';

const navbarColor = grey[900];
const hoverColor = pink[200];

export default function Navbar() {
    const [showNav, setShowNav] = React.useState<boolean>(false);
    
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
    }),
  );
  
  const classes = useStyles();
  
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

    return (
    <AppBar position={'sticky'} style={{height: '10vh', backgroundColor: showNav ? navbarColor : 'transparent'}}
    elevation={showNav? 2 : 0}>
        <Toolbar className={classes.toolbar}>
            <img src={logo} style={{height: '9vh'}}/>
             {/*<Typography variant="h6" style={{flexGrow: 1}}>
            Logo
            </Typography>*/}
            <div style={{marginLeft: 'auto', float: 'right', height: '100%', display: 'table', borderSpacing: 26, borderCollapse: 'separate'}}>
            <Link className={classes.section} to={'streamers-grid'} offset={-100} smooth={true}><Typography className={classes.typo}>Section 1</Typography></Link>
            <Link className={classes.section} to={'streamers-details'}><Typography className={classes.typo}>Section 2</Typography></Link>
            <Link className={classes.section} to={'streamers-details'}><Typography className={classes.typo}>Section 3</Typography></Link>
            </div>
        </Toolbar>
    </AppBar>
    );
}