import * as React from 'react';
import {StreamerSection} from '../../sections/streamers/StreamersSection';
import TextSection from '../../sections/text-section/TextSection';
import Navbar from '../navbar/Navbar';
import grey from '@mui/material/colors/grey';
import { Typography } from '@mui/material';
import './Demo.scss';
import { SectionObject } from '../../types/types';
import axios from 'axios';

const footbarColor = grey[900];


export default function PageDemo() {

    const [currentSection, setSection] = React.useState<string>('');
    const [sections, setSections] = React.useState<SectionObject[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
              'http://localhost:8080/sections',
            )
            setSections(result.data);
          };
       
          if(sections.length === 0) fetchData();
    }, [sections]);

    const setCurrentSection = (section: string) => {
        setSection(section);
    }

    return (
        <div id={'main'}>
            <Navbar section={currentSection} setCurrentSection={setCurrentSection} sections={sections}/>
            <StreamerSection />
            {sections.map((sec) => <TextSection title={sec.title} text={sec.text} position={sec.position} />)}
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