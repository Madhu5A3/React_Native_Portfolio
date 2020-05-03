import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  // const [enteredGoal, setOutputGoal] = useState('')

  const [currentGoal, setCurrentGoal] = useState([])

  /*const handleChangeText = (enteredText) => {
    setOutputGoal(enteredText)
  }*/

  const addText = goalCode => {
    console.log(goalCode)
    setCurrentGoal(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalCode }])
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={currentGoal}
        renderItem={itemData => <GoalItem code={itemData.item.value} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 30 },
});

