import React, { useReducer } from 'react'
import uuid from 'react-native-uuid'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Button, TextInput, ScrollView } from 'react-native'
import { IAlarm } from '../types'

interface Props {
  initialValues?: Partial<IAlarm>
    onSubmit: (values: IAlarm) => void
}

// ! There are bug onChange/onSubmit
// Todo : add missing fields
// Todo add weekdays select input
// Todo style the form
// Todo form validation
export default function AlarmForm({ initialValues, onSubmit }: Props) {
  const initialState: IAlarm = {
    id: uuid(),
    name: '',
    clock: new Date(),
    days: [],
    activated: true,
    ...initialValues,
  }

  const [values, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'UPDATE_CLOCK':
        if (action.value) {
          return { ...state, clock: action.value }
        }
        return state
      case 'UPDATE_NAME':
        return { ...state, name: action.value }
      default:
        return state
    }
  }, initialState)

  const handleSubmit = () => {
    const newAlarm: IAlarm = {
      id: uuid(),
      ...values,
    }
    onSubmit(newAlarm)
  }

  console.log({ values })

  return (
    <ScrollView>

      <DateTimePicker
        value={values.clock}
        mode="time"
        is24Hour
        display="clock"
        onChange={(e, value) => dispatch({
          type: 'UPDATE_CLOCK',
          value,
        })}
      />

      <TextInput
        onChangeText={(value) => dispatch({ type: 'UPDATE_NAME', value })}
        value={values.name}
        placeholder="Alarm name"
      />

      <Button title="Submit" onPress={handleSubmit} />

    </ScrollView>
  )
}
