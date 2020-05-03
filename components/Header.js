import React from 'react';

import { View, Text, StyleSheet } from 'react-native';


const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: { paddingTop: 30, backgroundColor: '#2ECC40', width: '100%', height: 90, justifyContent: 'center', alignItems: 'center' },
    headerTitle: { color: 'black', fontSize: 20 }
})
export default Header;