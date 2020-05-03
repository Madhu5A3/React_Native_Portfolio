import React from 'react';

import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const GameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Game Screen!!!</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => { }}></Button>
                    <Button title="Confirm" onPress={() => { }}></Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: { padding: 10, flex: 1, alignItems: 'center' },
    title: { fontSize: 15, marginVertical: 10},
    buttonContainer: { flexDirection: 'row', width: '80%', justifyContent: 'space-between' },
    inputContainer: { width: 300, maxWidth: '80%', alignItems: 'center', shadowColor:'black', shadowOffset: {width: 0, height: 2}, shadowRadius: 7, backgroundColor: 'white', elevation: 5 }
})

export default GameScreen;