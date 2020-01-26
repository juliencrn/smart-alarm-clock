import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'

import AlarmForm from '../components/AlarmForm'
import { addAlarm } from '../store/actions/alarmActions'

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
})

export default function New() {
  const dispatch = useDispatch()
  const handleSubmit = (values) => {
    console.log('Submitted on "Edit Alarm', { values })
    dispatch(addAlarm(values))
    console.log('saved')
    // todo : redirect
  }

  return (
    <View style={style.root}>
      <AlarmForm onSubmit={handleSubmit} />
    </View>
  )
}
