import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const GoalItem = (props) => {
    return (
        <View style={styles.textItem}>
            <Text>{props.code}</Text>
        </View>
    )
}

const styles = ({
    textItem: { padding: 10, borderColor: 'black', backgroundColor: 'grey', marginVertical: 10 }
})

export default GoalItem;