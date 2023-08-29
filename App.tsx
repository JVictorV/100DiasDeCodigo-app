import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';
import { View } from 'react-native';

export default function App() {

  const [fontsLoaded, error] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <View style={{flex: 1, paddingTop: 30, backgroundColor: '#000'}}>
      <Routes />
      <StatusBar style="light" translucent />
    </View>
  );
}


