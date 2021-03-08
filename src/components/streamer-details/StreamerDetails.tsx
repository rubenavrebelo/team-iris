import { Card, CardContent, Typography } from '@material-ui/core';
import * as React from 'react';

export default function StreamerDetails() {

    return (
        <>
        <iframe width="560" height="315" style={{marginRight: 50, display: 'inline-block'}} title="video" src="https://www.youtube.com/embed/rsxNclwPTvw?controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <Card style={{width: 250, height: 315,  display: 'inline-block'}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">Eevolicious</Typography>
                <Typography variant={'body2'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat finibus sapien eget auctor. Sed vitae quam nisi. Phasellus ipsum augue, rutrum ut ornare nec, scelerisque a ipsum. Etiam vel placerat massa. Donec aliquet ligula ut maximus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat justo, elementum quis posuere eget, malesuada et mi.</Typography>
            </CardContent>
        </Card>
        </>
    );
}