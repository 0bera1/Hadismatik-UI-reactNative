import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

export default function HadisItem() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.Container}>
        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
      </View>
      <View style={styles.infoItems}>
        <View style={styles.userItem}>
          <Text style={styles.username}>Username</Text>
          <Text style={styles.date}>03.08.2024</Text>
        </View>
        <View style={styles.userItem2}>
          <TouchableOpacity>
            <Feather style={styles.icon} name="copy" size={18} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather style={styles.icon} name="heart" size={18} color="black" />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#eee8cd',
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#DCD5B6',
    borderWidth: 1.5
  },
  Container: {

  },
  text: {
    fontSize: 15,
    color: '#6d476d'
  },
  infoItems: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#DCD5B6',
    marginTop: 20,
    height: 50
  },
  userItem: {
    flexDirection: 'row',
    marginTop: 10

  },
  username: {
    marginRight: 12,
    fontSize: 13,
    color: 'gray',
  },
  date: {
    fontSize: 10,
    marginVertical: 3,
    color: 'darkgray'
  },
  userItem2: {
    flexDirection: 'row',
    left: 125,
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 4
  },

})