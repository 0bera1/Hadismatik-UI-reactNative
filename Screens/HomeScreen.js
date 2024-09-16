import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import HadisItem from '../components/HadisItem';
import { DATA } from '../data/dummy-data';


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <HadisItem title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#dcc6c4',
    flex:1,
    padding:16,
  }
})