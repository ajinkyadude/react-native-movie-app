import * as React from 'react';
import { StackActions } from '@react-navigation/native';

// NavigationConatiner is refered here - Check NavigationStack
export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

export const goBack = () => {
  navigationRef.current?.goBack();
};

export const popToStack = () => {
  navigationRef.current?.dispatch(StackActions.popToTop());
};