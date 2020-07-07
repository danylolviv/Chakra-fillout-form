import React from 'react';
import './App.css';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from './CustomTheme';
import {OnboardingForm} from './OnboardinForm';
import FormWithValidation from './components/reactHookFormGen';
import ICalendar from './components/Calendar/iCalendar';
import HookFormiCalendar from './components/Calendar/hookForn&iCalendar';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <HookFormiCalendar/>
      <FormWithValidation/>
      <OnboardingForm />
      <ICalendar/>
    </ThemeProvider>
  );
}

export default App;
