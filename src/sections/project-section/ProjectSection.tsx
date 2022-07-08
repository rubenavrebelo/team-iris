import { Box, Typography } from '@mui/material';
import { useState } from 'react';

export interface TextSectionProps {
  title?: string;
  position?: 'right' | 'left' | 'center';
  text?: string;
}

export default function ProjectSection(props: TextSectionProps) {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  const test = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <Typography
        variant={'h2'}
        style={{ fontFamily: 'Sugo', letterSpacing: 0, marginBottom: 30 }}
      >
        Projetos
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        {test.map((test) => (
          <div
            style={{
              textAlign: 'center',
              width: '20vw',
              height: '20vw',
              marginRight: 16,
              marginBottom: 42,
            }}
          >
            <Box
              onMouseEnter={() => setShowOverlay(true)}
              onMouseLeave={() => setShowOverlay(false)}
              style={{
                backgroundImage:
                  'url(https://pbs.twimg.com/media/FWbU9APXEAUxnzi?format=jpg&name=small)',
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
            >
              {showOverlay && (
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
                    As tetas da MissCookieDoe e da Eevoh são colocadas à prova
                  </Typography>
                </div>
              )}
            </Box>
            <Typography style={{ fontFamily: 'Sugo' }}>Tetudas</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
