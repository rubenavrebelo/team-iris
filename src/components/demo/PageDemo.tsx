import * as React from 'react';
import StreamerSection from '../../sections/streamers/StreamersSection';
import TextSection from '../../sections/text-section/TextSection';
import Navbar from '../navbar/Navbar';
import grey from '@material-ui/core/colors/grey';
import { Typography } from '@material-ui/core';

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
            <footer style={{height: 100, width: '100%', backgroundColor: footbarColor}}>
                <Typography style={{color: 'white', marginTop: 50}}>Made with love</Typography>
            </footer>
        </div>
    );
}