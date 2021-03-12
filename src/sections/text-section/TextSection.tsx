import { Typography } from '@material-ui/core';
import * as React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

export interface TextSectionProps {
    sectionTitle: string;
    alignment?: 'right' | 'left' | 'center';
}

export default function TextSection(props: TextSectionProps) {
    const {alignment} = props;
    return (
        <div id={`${props.sectionTitle.replace(/\s/g, '-').toLowerCase()}-section`} style={{marginTop: 70, textAlign: alignment ? alignment: 'left'}}>
            <div style={{width: '90%', margin: '0 auto'}}>
                <Typography variant={'caption'}>This line is just for demo purposes.</Typography>
                <div style={{width: '100%', height: 2, backgroundColor: 'black'}}/>
                <Typography variant={'h2'}>{props.sectionTitle}</Typography>
                <Typography><LoremIpsum p={2}/></Typography>
            </div>
        </div>
    );
}