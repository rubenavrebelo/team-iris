import { Avatar, ButtonBase, Card, CardContent, createMuiTheme, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core';
import * as React from 'react';
import { StreamerObject } from '../../types/types';
import GenderBits from '../gender-bits/GenderBits';
import './StreamerDetails.scss';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ReactHtmlParser from 'react-html-parser';

export interface StreamerDetailsProps {
    streamer: StreamerObject
    setStreamer: (id: number) => void;
    handlePrevious: () => void;
    handleNext: () => void;
    maxStreamers: number;
    position: number;
}

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function StreamerDetails(props: StreamerDetailsProps) {

    const genGenderBits = () => {
        return props.streamer.pronouns.map((pronoun: string) => <GenderBits key={pronoun} pronoun={pronoun}/>)
    }

    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.handleNext();
    }

    const handlePrevious = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.handlePrevious();
    }

    const {streamer, maxStreamers} = props;

    return (
        <div style={{width: '95%', margin: '0 auto', marginBottom: 20}} id={'streamers-details'}>
        <Grid container spacing={2}>
            <Grid item xs={1} style={{display: 'flex', alignItems: 'center'}}>
                {props.position !== 0 && <ButtonBase style={{margin: '0 auto'}} onClick={(e) => handlePrevious(e)}>
                    <Avatar>
                        <ChevronLeftIcon fontSize={'large'}/>
                    </Avatar>
                </ButtonBase>}
            </Grid>
            <Grid item xs={7}>
                <div className={'player-wrapper'}> 
                    <iframe style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} title="video" 
                        src={streamer.videourl} frameBorder="0" allowFullScreen/>
                </div>
            </Grid>
            <Grid item xs={3}>
                <Card style={{width: '23vw', height: '60vh',  display: 'inline-block', textAlign: 'unset'}}>
                <CardContent>
                <ThemeProvider theme={theme}>
                    <Typography gutterBottom variant="h4" style={{fontSize: '2.55vw'}}>{streamer.username}</Typography>
                    <div>
                        {genGenderBits()}
                    </div>
                    <Typography variant={'body2'} style={{fontSize: '1.2vw'}} >{ReactHtmlParser(streamer.description)}</Typography>
                </ThemeProvider>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs style={{display: 'flex', alignItems: 'center'}}>
                {props.position !== maxStreamers-1 && <ButtonBase style={{margin: '0 auto'}} onClick={(e) => handleNext(e)}>
                <Avatar>
                    <ChevronRightIcon fontSize={'large'}/>
                </Avatar>
                </ButtonBase>}
            </Grid>
        </Grid>
        </div>
    );
}