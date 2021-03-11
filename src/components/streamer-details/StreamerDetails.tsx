import { Card, CardContent, createMuiTheme, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core';
import * as React from 'react';
import './StreamerDetails.scss';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function StreamerDetails() {

    return (
        <div style={{width: '95%', margin: '0 auto', marginBottom: 20}}>
        <Grid container spacing={2}>
            <Grid item xs={1}>
                Next
            </Grid>
            <Grid item xs={7}>
                <div className={'player-wrapper'}> 
                    <iframe style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} title="video" 
                        src="https://www.youtube.com/embed/rsxNclwPTvw?controls=0" frameBorder="0" allowFullScreen/>
                </div>
            </Grid>
            <Grid item xs={3}>
                <Card style={{width: '23vw', height: '60vh',  display: 'inline-block', textAlign: 'unset'}}>
                <CardContent>
                <ThemeProvider theme={theme}>
                    <Typography gutterBottom variant="h5" component="h2">Eevolicious</Typography>
                    <Typography variant={'body2'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat finibus sapien eget auctor. Sed vitae quam nisi. Phasellus ipsum augue, rutrum ut ornare nec, scelerisque a ipsum. Etiam vel placerat massa. Donec aliquet ligula ut maximus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat justo, elementum quis posuere eget, malesuada et mi.</Typography>
                </ThemeProvider>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs>
                Previous
            </Grid>
        </Grid>
        </div>
    );
}