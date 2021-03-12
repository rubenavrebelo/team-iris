import { makeStyles, Typography, Theme, createStyles } from '@material-ui/core';
import * as React from 'react';
import { Pronouns } from '../../types/types';
import './GenderBits.scss';

export interface GenderBitsProps {
    pronoun: string
}

export default function GenderBits(props: GenderBitsProps) {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
        genderText: {
            color: 'white',
            fontSize: '0.7vw'
        }
        }),
    );

    const classes = useStyles();

    return (<div className={'gender-bit'}>
        <Typography className={classes.genderText}>{Pronouns[props.pronoun]}</Typography>
    </div>);
}