import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PopularScreen() {
  return (
    <View style={styles.container}>
      <Text>PopularScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dcc6c4',
        flex: 1
    },
})