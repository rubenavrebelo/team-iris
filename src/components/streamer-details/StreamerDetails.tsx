import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Avatar, ButtonBase, Card, CardContent, Grid, IconButton, responsiveFontSizes, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import parse from "html-react-parser";
import * as React from 'react';
import { ReactComponent as TwitchLogo } from '../../media/twitch.svg';
import { StreamerObject } from '../../types/types';
import GenderBits from '../gender-bits/GenderBits';
import './StreamerDetails.scss';


export interface StreamerDetailsProps {
    streamer: StreamerObject
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
        <div style={{width: '100%', margin: '0 auto', padding: "35px 0px"}} id={'streamers-details'} className={"details-background"}>
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
                <Card style={{width: '23vw', height: '64vh',  display: 'inline-block', textAlign: 'unset', position: 'relative'}}>
                <IconButton style={{position: 'absolute', right: 10, top: 10}} onClick={() => props.resetStreamer() }>
                    <CloseIcon />
                </IconButton>
                <CardContent>
                    <div>
                    <Typography gutterBottom variant="h4" style={{fontSize: '2.55vw'}}>{streamer.username}</Typography>
                    <div>
                        {genGenderBits()}
                    </div>
                    <Typography variant={'body2'} style={{fontSize: '1.2rem'}} >{parse(streamer.description)}</Typography>
                    </div>
                    
                <TwitterIcon style={{color: '#1DA1F2'}}/>
                <TwitchLogo style={{color: 'white'}}/>
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