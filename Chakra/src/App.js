import React from 'react';
import './App.css';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from './CustomTheme';
import {OnboardingForm} from './OnboardinForm';
import FormWithValidation from './components/reactHookFormGen';
import ICalendar from './components/Calendar/iCalendar';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <FormWithValidation/>
      <OnboardingForm />
      <ICalendar/>
    </ThemeProvider>
  );
}

export default App;
