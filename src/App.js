import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './AppNavigator';

function Main() {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}

export default Main;
