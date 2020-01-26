import React, { useState } from 'react'
import {
  Text, StyleSheet, View, Switch,
} from 'react-native'

import { IAlarm } from '../types'
import DaysList from './DaysList'

const style = StyleSheet.create({
  card: {
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
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
  left: {
    flex: 1,
  },
  right: {
    justifyContent: 'center',
  },
})

export default function AlarmItem({
  name, clock, days, activated,
}: IAlarm) {
  const hasDays = days && days.length > 0
  const [isActivated, setIsActivated] = useState(activated)

  const handleSwitch = (value: boolean) => {
    setIsActivated(value)
  }

  return (
    <View style={style.card}>
      <View style={style.left}>
        <Text style={style.clock}>
          {clock}
        </Text>
        <Text style={style.meta}>
          <Text style={style.name}>
            {`${name}${hasDays ? ' - ' : ''}`}
          </Text>
          {hasDays && <DaysList days={days} />}
        </Text>
      </View>
      <View style={style.right}>
        <Switch onValueChange={(value: boolean) => handleSwitch(value)} value={isActivated} />
      </View>

    </View>
  )
}
