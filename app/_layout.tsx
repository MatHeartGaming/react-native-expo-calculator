import { Platform, Text, View } from 'react-native';

import { globalStyles } from '@/styles/global-styles';
import { useFonts } from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

const isAndroid = Platform.OS === 'android';

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync('black');
}

const RootLayout = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <View style={ globalStyles.background }>
      <Text>Root Layout</Text>

      <Slot />

      <StatusBar
        style="light" />
    </View>
  )
}

export default RootLayout