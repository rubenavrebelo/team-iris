import { Typography } from '@mui/material';
import * as React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Pronouns } from '../../types/types';
import './GenderBits.scss';


export interface GenderBitsProps {
    pronoun: string
}

const useStyles = makeStyles()((theme) => ({
    genderText: {
        color: 'white',
        fontSize: '0.7vw',
        userSelect: 'none'
    }
  }));

export default function GenderBits(props: GenderBitsProps) {
    const { classes } = useStyles();

    return (<div className={'gender-bit gender-background'}>
        <Typography className={classes.genderText}>
            {Pronouns[props.pronoun]}
        </Typography>
    </div>);
}