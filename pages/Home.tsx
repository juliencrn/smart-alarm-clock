import React, { useState } from 'react'
import { View, Button, StyleSheet } from 'react-native'


import { alarms } from '../utils'
import { Page } from '../types'
import AlarmList from '../components/AlarmList'

const style = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 4,
    paddingTop: 4,
  },
})

// todo : Sort list by hour (in ms)
export default function Home({ navigation }: Page) {
  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = () => {
    setIsEditing(!isEditing)
  }

  const editAlarm = (id) => {
    navigation.navigate('Edit', { id })
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={style.header}>
        <Button title={isEditing ? 'OK' : 'Edit'} onPress={() => handleEdit()} />
        <Button title="+" onPress={() => console.log('new pressed')} />
      </View>
      <AlarmList alarms={alarms} handleClick={(id) => editAlarm(id)} isEditing={isEditing} />
    </View>
  )
}
