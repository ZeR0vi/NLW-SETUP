import { StatusBar, View } from 'react-native';

import { useFonts, 
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold } from '@expo-google-fonts/inter'
import { Loading } from './src/components/loading';
import { Home } from './src/screens/home';

export default function App() {

 const [fontsLoaed] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })

  if(!fontsLoaed) {
   return (
    <Loading/>
   )
  }

  return (
    <>
      <Home/>
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
    </>
  );
}

