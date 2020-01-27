import React, { useReducer } from 'react'
import uuid from 'react-native-uuid'
import DateTimePicker from '@react-native-community/datetimepicker'
import {
  TextInput, Button, View, StyleSheet, Text,
} from 'react-native'
import moment from 'moment'

import { IAlarm } from '../types'
import CheckDays from './CheckDays'

const style = StyleSheet.create({
  item: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
  },
  input: {
    marginTop: 4,
    fontSize: 20,
  },
})

interface Props {
  initialValues?: Partial<IAlarm>
  onSubmit: (values: IAlarm) => void
}

// Todo style the form
// Todo : Add error message
export default function AlarmForm({ initialValues, onSubmit }: Props) {
  const initialState: IAlarm = {
    id: uuid.v1(),
    name: '',
    clock: moment().toDate(),
    days: [],
    activated: true,
    ...initialValues,
  }

  const [values, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'UPDATE_CLOCK':
        return action.value
          ? { ...state, clock: action.value }
          : state
      case 'UPDATE_NAME':
        return { ...state, name: action.value }
      case 'UPDATE_DAYS':
        return { ...state, days: action.days }
      default:
        return state
    }
  }, initialState)

  const handleSubmit = () => {
    let valid = true
    if (!values.name || values.name === '') {
      valid = false
      console.log('Name missing')
    }

    if (!values.days || values.days.length <= 0) {
      valid = false
      console.log('days missing')
    }

    if (valid) {
      onSubmit(values)
    }
  }

  return (
    <View>

      <View style={{ ...style.item, marginTop: 16 }}>
        <Text>Alarm description:</Text>
        <TextInput
          style={style.input}
          onChangeText={(value) => dispatch({ type: 'UPDATE_NAME', value })}
          value={values.name}
          placeholder="Alarm name"
        />
      </View>

      <DateTimePicker
        value={values.clock}
        mode="time"
        is24Hour
        display="clock"
        onChange={(e, value) => dispatch({
          type: 'UPDATE_CLOCK',
          value: moment(value).toDate(),
        })}
      />

      <View style={style.item}>
        <CheckDays
          selected={values.days}
          onChange={(value) => dispatch({ type: 'UPDATE_DAYS', days: value })}
        />
      </View>


      <View style={style.item}>
        <Button
          title="Save"
          onPress={handleSubmit}
        />
      </View>

    </View>
  )
}
