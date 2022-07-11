import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import _ from 'lodash';
import React from 'react';
import axios from 'axios';
import { ProjectObject } from '../../types/types';
import parse from 'html-react-parser';

export interface TextSectionProps {
  title?: string;
  position?: 'right' | 'left' | 'center';
  text?: string;
}

export default function ProjectSection(props: TextSectionProps) {
  const [showOverlay, setShowOverlay] = useState<string>('');
  const [projects, setProjects] = useState<ProjectObject[]>([]);


  React.useEffect(() => {
    const fetchData = async () => {
      console.log('fetching');
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}projects`
      );
      console.log(result);
      setProjects(result.data);
    };

    console.log(`${process.env.REACT_APP_API_URL}projects`)
    if (projects.length === 0) fetchData();
  }, [projects]);

  const renderCarouselItems = () => {
    return _.chunk(projects, 4).map((innerArr, arrI) => <Grid container>
      {innerArr.map((proj, projI) => <Grid item xs={3}>
      <div
            style={{
              textAlign: 'center',
              width: '20vw',
              height: '20vw',
              marginBottom: 16
            }}
          >
            <Box
              onMouseEnter={() => setShowOverlay(`project-${arrI}-${projI}`)}
              onMouseLeave={() => setShowOverlay('')}
              style={{
                backgroundImage:
                  `url(${proj.image})`,
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
            >
              {showOverlay === `project-${arrI}-${projI}` && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: 15,
                    boxSizing: 'border-box',
                  }}
                >
                  <Typography style={{ color: 'white' }}>
                    {parse(proj.description)}
                  </Typography>
                </div>
              )}
            </Box>
            <Typography style={{ fontFamily: 'Sugo' }}>{proj.title}</Typography>
          </div>
      </Grid>)}
    </Grid>)
  }

  console.log(projects);
  return (
    <div>
      <Typography
        variant={'h2'}
        style={{ fontFamily: 'Sugo', letterSpacing: 0, marginBottom: 30 }}
      >
        Projetos
      </Typography>
      <div
        
      >
        <Carousel navButtonsAlwaysInvisible>
        {renderCarouselItems()}
        </Carousel>
      </div>
    </div>
  );
}
