import React from 'react';
import {OnboardingForm} from '../OnboardinForm';
import ReactHookForm from './reactHookFormGen';
import HookFormICalendar from './Calendar/hookForn&iCalendar';

export default {
  title: 'Forms',
  component: OnboardingForm,
};

export const ValidationLogging  = () => <ReactHookForm />;
export const VisualOnly = () => <OnboardingForm/>
export const HookFormiCalendar = () => <HookFormICalendar/>


