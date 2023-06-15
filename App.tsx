import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation';

// state
import {Provider} from 'react-redux';
import store from './src/state/store';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: {} | undefined;
  QrScreen: {} | undefined;
};

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
