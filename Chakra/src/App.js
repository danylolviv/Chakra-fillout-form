import React from 'react';
import './App.css';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from './CustomTheme';
import {OnboardingForm} from './OnboardinForm';
import FormWithValidation from './components/reactHookFormGen';
import ICalendar from './components/Calendar/iCalendar';
import HookFormiCalendar from './components/Calendar/hookForn&iCalendar';
import IDatePickerStart from "./components/DatePicker/iDatePickerStart";
import FinalCalendar from "./components/DatePicker/FinalCalendar";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <FinalCalendar/>
      <IDatePickerStart/>
      <HookFormiCalendar/>
      <FormWithValidation/>
      <OnboardingForm />
      <ICalendar/>
    </ThemeProvider>
  );
}

export default App;
