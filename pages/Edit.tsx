import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Page, State } from '../types'
import AlarmForm from '../components/AlarmForm'
import { editAlarm } from '../store/actions/alarmActions'

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
})

export default function Edit({ navigation }: Page) {
  const { id } = navigation.state.params
  const dispatch = useDispatch()
  const { alarms } = useSelector((state: State) => state.alarm)
  const data = alarms.filter((alarm) => alarm.id === id)[0]

  const handleSubmit = (values) => {
    console.log('Submitted on "Edit Alarm', { data, values })
    dispatch(editAlarm(values))
    console.log('saved')
    // todo : redirect
  }

  return (
    <View style={style.root}>
      <AlarmForm
        initialValues={data}
        onSubmit={handleSubmit}
      />
    </View>
  )
}
