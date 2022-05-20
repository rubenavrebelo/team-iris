import { Typography } from '@mui/material';
import * as React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import './TextSection.scss';

export interface TextSectionProps {
    sectionTitle: string;
    alignment?: 'right' | 'left' | 'center';
}

export default function TextSection(props: TextSectionProps) {
    const {alignment} = props;
    return (
        <div id={`${props.sectionTitle.replace(/\s/g, '-').toLowerCase()}-section`} style={{marginTop: 70, textAlign: alignment ? alignment: 'left'}}>
            <div className={'innerSection'}>
                <Typography variant={'caption'}>This line is just for demo purposes.</Typography>
                <div style={{width: '100%', height: 2, backgroundColor: 'black'}}/>
                <Typography variant={'h2'}>{props.sectionTitle}</Typography>
                <Typography><LoremIpsum p={2}/></Typography>
            </div>
        </div>
    );
}