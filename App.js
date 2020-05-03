import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './gameLogic/GameScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Number Game"/>
      <GameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
