/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function App(){
  return(
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Learning ReactNative With @HiteshChoudhary</Text>
      </SafeAreaView>
      <Text>Having a great experince learning react-native from guru ji</Text>
    </View>
  )
}

// creating styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
  })

export default App;
