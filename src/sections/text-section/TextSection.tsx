import { Typography } from '@mui/material';
import parse from 'html-react-parser';
import * as React from 'react';
import './TextSection.scss';

export interface TextSectionProps {
  title: string;
  position?: 'right' | 'left' | 'center';
  text: string;
}

export default function TextSection(props: TextSectionProps) {
  const { position, text } = props;

  return (
    <div
      id={`${props.title.replace(/\s/g, '-').toLowerCase()}-section`}
      style={{ textAlign: position ? position : 'left' }}
    >
      <div className={'innerSection'}>
        <Typography
          variant={'h2'}
          style={{ fontFamily: 'Sugo', letterSpacing: 0 }}
        >
          {props.title}
        </Typography>
        <Typography>{parse(text)}</Typography>
      </div>
    </div>
  );
}
