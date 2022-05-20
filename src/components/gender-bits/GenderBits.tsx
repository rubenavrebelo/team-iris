import { Typography, Theme } from '@mui/material';
import * as React from 'react';
import { Pronouns } from '../../types/types';
import './GenderBits.scss';
import { makeStyles } from 'tss-react/mui';


export interface GenderBitsProps {
    pronoun: string
}

const useStyles = makeStyles()((theme) => ({
    genderText: {
        color: 'white',
        fontSize: '0.7vw'
    }
  }));

export default function GenderBits(props: GenderBitsProps) {
    const { classes } = useStyles();

    return (<div className={'gender-bit'}>
        <Typography className={classes.genderText}>
            {Pronouns[props.pronoun]}
        </Typography>
    </div>);
}