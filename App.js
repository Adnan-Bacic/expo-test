import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {

  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')

  const btnOnClick = () => {
    setOutputText('Changed text')
  }

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button onPress={btnOnClick} title="Change text"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App