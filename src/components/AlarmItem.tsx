import React from 'react'
import {
  Text, StyleSheet, View, Switch,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Icons from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment'

import { IAlarm, State } from '../types'
import DaysList from './DaysList'
import { toggleAlarm } from '../store/alarm/actions'
import Touchable from './Touchable'

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

export default function AlarmItem({
  id, name, clock, days, activated, handleEdit,
}: Props) {
  const dispatch = useDispatch()
  const { isEditing } = useSelector((state: State) => state.home)
  const hasDays = days && days.length > 0

  const handleSwitch = (value: boolean) => {
    dispatch(toggleAlarm(id, value))
  }

  // Draft diff for alarm
  const current = moment()
  const m = moment(clock)
  const diffMinutes = m.diff(current, 'minutes')
  const diff = m.diff(current, 'second')

  const dayMatch = days.includes(current.format('e'))
  const passed = diff < 0

  return (
    <Touchable
      isTouchable={isEditing || false}
      onPress={isEditing ? () => handleEdit(id) : null}
    >
      <View style={style.card}>
        <View style={style.main}>
          <Text style={style.clock}>
            {m.format('HH:mm')}
          </Text>
          <Text>
            {`Diff: ${diffMinutes} minutes`}
          </Text>
          <Text>
            {`When ?: ${passed ? 'End, passed...' : `Soon, in ${diffMinutes}minutes!`} minutes`}
          </Text>
          <Text>
            {`Day match ?: ${dayMatch ? 'Yes' : 'No'}`}
          </Text>
          <Text>
            {`activated ?: ${activated ? 'Yes' : 'No'}`}
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
            <Icons
              name="keyboard-arrow-right"
              size={24}
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
    </Touchable>

  )
}
