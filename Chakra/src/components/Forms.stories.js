import React from 'react';
import {OnboardingForm} from '../OnboardinForm';
import ReactHookForm from './reactHookFormGen';

export default {
  title: 'Forms',
  component: OnboardingForm,
};

export const ValidationLogging  = () => <ReactHookForm />;
export const VisualOnly = () => <OnboardingForm/>


