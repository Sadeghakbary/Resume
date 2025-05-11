import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const percentages = [50, 75, 30];

export default function Skils() {
  return (
    <Stack spacing={2} sx={{ width: '300px', m: 2 }}>
      {percentages.map((p, idx) => (
        <Box key={idx} display="flex" alignItems="center">
          <Box flexGrow={1} mr={1}>

            <LinearProgress variant="determinate" value={p} />
          </Box>
          <Box minWidth={35}>
            <Typography variant="body2" color="textSecondary">
              {`React ${p}%`}
            </Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  );
}
