import { Typography } from '@mui/material';
import parse from "html-react-parser";
import * as React from 'react';
import './TextSection.scss';

export interface TextSectionProps {
    title: string;
    position?: 'right' | 'left' | 'center';
    text: string;
}

export default function TextSection(props: TextSectionProps) {
    const {position, text} = props;

    console.log(position);
    return (
        <div id={`${props.title.replace(/\s/g, '-').toLowerCase()}-section`} style={{marginTop: 70, textAlign: position ? position: 'left'}}>
            <div className={'innerSection'}>
                <Typography variant={'h2'}>{props.title}</Typography>
                <Typography style={{paddingLeft: 10}}>{parse(text)}</Typography>
            </div>
        </div>
    );
}