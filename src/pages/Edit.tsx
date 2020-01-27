import React from 'react'
import { StyleSheet, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import { Page, State } from '../types'
import AlarmForm from '../components/AlarmForm'
import { editAlarm, addAlarm, deleteAlarm } from '../store/alarm/actions'

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
})

export default function Edit({ navigation }: Page) {
  const { params } = navigation.state
  const { alarms } = useSelector((state: State) => state.alarm)
  const dispatch = useDispatch()

  const isExisting = params && params.id
  const initialData = isExisting
    ? alarms.filter((alarm) => alarm.id === params.id)[0]
    : {}

  const handleSubmit = (values) => {
    const match = alarms.filter((alarm) => alarm.id === values.id)[0]
    dispatch(match ? editAlarm(values) : addAlarm(values))
    navigation.navigate('Home')
  }

  const handleDelete = () => {
    if (isExisting) {
      dispatch(deleteAlarm(params.id))
    }
    navigation.navigate('Home')
  }

  return (
    <ScrollView style={style.root}>
      <AlarmForm
        initialValues={initialData}
        onSubmit={handleSubmit}
      />
      {isExisting && (
        <Button
          title="Delete Alarm"
          onPress={handleDelete}
        />
      )}
    </ScrollView>
  )
}
