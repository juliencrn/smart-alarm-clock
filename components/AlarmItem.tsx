import React from 'react'
import {
  Text, StyleSheet, View, Switch, Button,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { IAlarm, State } from '../types'
import DaysList from './DaysList'
import { toggleAlarm, deleteAlarm } from '../store/alarm/actions'
import { getHumanTime } from '../utils'

const style = StyleSheet.create({
  card: {
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clock: {
    fontSize: 48,
  },
  meta: {
    fontSize: 16,
    flexDirection: 'row',
  },
  name: {
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
  },
  side: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

interface Props extends IAlarm {
  handleEdit: (id: string) => void
}

// Todo : OnEdit, add all area clickable
export default function AlarmItem({
  id, name, clock, days, activated, handleEdit,
}: Props) {
  const dispatch = useDispatch()
  const { isEditing } = useSelector((state: State) => state.home)
  const hasDays = days && days.length > 0

  const handleSwitch = (value: boolean) => {
    dispatch(toggleAlarm(id, value))
  }

  const handleDelete = () => {
    dispatch(deleteAlarm(id))
  }

  return (
    <View style={style.card}>

      {isEditing && (
        <View style={style.side}>
          <Button
            title="Del"
            onPress={handleDelete}
          />
        </View>
      )}

      <View style={style.main}>
        <Text style={style.clock}>
          {getHumanTime(clock)}
        </Text>
        <Text style={style.meta}>
          <Text style={style.name}>
            {`${name}${hasDays ? ' - ' : ''}`}
          </Text>
          {hasDays && <DaysList days={days} />}
        </Text>
      </View>

      <View style={style.side}>
        {isEditing ? (
          <Button
            title=">"
            onPress={() => handleEdit(id)}
          />
        ) : (
          <Switch
            onValueChange={handleSwitch}
            value={activated}
          />
        )}
      </View>

    </View>
  )
}
