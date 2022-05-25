import * as React from 'react';
import {StreamerSection} from '../../sections/streamers/StreamersSection';
import TextSection from '../../sections/text-section/TextSection';
import Navbar from '../navbar/Navbar';
import grey from '@mui/material/colors/grey';
import { Typography } from '@mui/material';
import './Demo.scss';

const footbarColor = grey[900];


export default function PageDemo() {

    const [currentSection, setSection] = React.useState<string>('');

    const setCurrentSection = (section: string) => {
        setSection(section);
    }

    return (
        <div id={'main'}>
            <Navbar section={currentSection} setCurrentSection={setCurrentSection}/>
            <StreamerSection />
            <TextSection sectionTitle={'Test'} />
            <TextSection sectionTitle={'On the Right'} alignment={'right'}/>
            <TextSection sectionTitle={'On the Center'} alignment={'center'}/>
            <footer className={'footer'} style={{backgroundColor: footbarColor}}>
                <div className={'contacts'}>
                    <Typography style={{color: 'white'}} variant={'h6'}>Contacts</Typography>
                    <Typography>team@phenomena.com</Typography>
                </div>
                <div className={'socials'}>
                    <Typography style={{color: 'white'}} variant={'h6'}>Socials</Typography>
                </div>
            </footer>
        </div>
    );
}