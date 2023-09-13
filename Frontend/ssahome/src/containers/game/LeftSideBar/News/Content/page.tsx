'use client'

import React from 'react';
import styles from './page.module.css'

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions,
              For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions,
              For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, `,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.`,
  },
  {
    label: 'Create an ad',
    description: `An ad group contains one or more ads which target a shared set of keywords.`,
  },
];

const Content = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={styles.Content}>
      <div className={styles.wrap}>
        <Box>
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 25,
              pl: 2,
              bgcolor: '#6B99C3',
            }}
          >
            <Typography>{steps[activeStep].label}</Typography>
          </Paper>
          <Box sx={{ height: 180, maxWidth: 180, width: '100%', p: 2, overflowY: 'auto'}}>
            {steps[activeStep].description}
          </Box>
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{
              bgcolor: '#6B99C3',
            }}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </div>
    </div>
    
  );
};

export default Content;