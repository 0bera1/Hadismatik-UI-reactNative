import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AddNewScreen() {
    return (
        <View style={styles.container}>
            <Text>AddNewScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dcc6c4',
        flex: 1
    },
})