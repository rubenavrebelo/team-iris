import { Card, CardContent, createMuiTheme, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core';
import * as React from 'react';
import { StreamerObject } from '../../types/types';
import GenderBits from '../gender-bits/GenderBits';
import './StreamerDetails.scss';

export interface StreamerDetailsProps {
    streamer: StreamerObject
}

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function StreamerDetails(props: StreamerDetailsProps) {

    const genGenderBits = () => {
        return props.streamer.pronouns.map((pronoun: string) => <GenderBits pronoun={pronoun}/>)
    }

    return (
        <div style={{width: '95%', margin: '0 auto', marginBottom: 20}} id={'streamers-details'}>
        <Grid container spacing={2}>
            <Grid item xs={1}>
                Next
            </Grid>
            <Grid item xs={7}>
                <div className={'player-wrapper'}> 
                    <iframe style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} title="video" 
                        src={props.streamer.trailerUrl} frameBorder="0" allowFullScreen/>
                </div>
            </Grid>
            <Grid item xs={3}>
                <Card style={{width: '23vw', height: '60vh',  display: 'inline-block', textAlign: 'unset'}}>
                <CardContent>
                <ThemeProvider theme={theme}>
                    <Typography gutterBottom variant="h4" style={{fontSize: '2.55vw'}}>{props.streamer.twitchName}</Typography>
                    <div>
                        {genGenderBits()}
                    </div>
                    <Typography variant={'body2'} style={{fontSize: '1.2vw'}}>{props.streamer.description}</Typography>
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