import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Providers from './navigation';
import { sharedLocalState } from './states/LocalState';
import { connectStorageEmulator } from 'firebase/storage';
import { useIsFocused } from '@react-navigation/native';





const App = () => {


 


  return <Providers />;
  
}

export default App;