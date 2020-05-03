import React, { useState } from 'react';

import { View, TextInput, Button } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setOutputGoal] = useState('')

    const handleChangeText = (enteredText) => {
        setOutputGoal(enteredText)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Enter the goal"
                style={styles.inputField}
                onChangeText={handleChangeText}
                value={enteredGoal}
            />
            <Button title="Click Me!!" onPress={() => props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    );
};

const styles = ({
    inputContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    inputField: { width: '80%', borderColor: 'black', borderWidth: 2, padding: 5 }
})

export default GoalInput;