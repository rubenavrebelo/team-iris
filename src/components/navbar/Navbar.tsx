import { AppBar, createStyles, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import * as React from 'react';
import './Navbar.scss';
import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';
import { Link } from "react-scroll";


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
          height: '100%',
          display: 'table',
          '&:hover': {
            color: hoverColor,
            textDecoration: 'none'
          }
      },
      typo: {
        display: 'table-cell',
        verticalAlign: 'middle',
        fontWeight: 500
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
    <AppBar position={'sticky'} style={{height: '10vh', backgroundColor: showNav ? navbarColor : 'transparent'}}>
        <Toolbar>
            {/*            <img src={logo} style={{flexGrow: 1}}/>*/}
            <Typography variant="h6" style={{flexGrow: 1}}>
            Logo
            </Typography>
            <Link className={classes.section} to={'streamers'} smooth={true}><Typography className={classes.typo}>Section 1</Typography></Link>
            <Link className={classes.section} to={'streamers'}><Typography className={classes.typo}>Section 2</Typography></Link>
            <Link className={classes.section} to={'streamers'}><Typography className={classes.typo}>Section 3</Typography></Link>
        </Toolbar>
    </AppBar>
    );
}