import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { IAlarm } from '../types'

const style = StyleSheet.create({
  card: {
    padding: 16,
  },
  clock: {
    fontSize: 48,
  },
  meta: {
    fontSize: 30,
    flexDirection: 'row',
  },
})

export default function AlarmItem({ name, clock, days }: IAlarm) {
  const hasDays = days && days.length > 0
  return (
    <View style={style.card}>
      <Text style={style.clock}>
        {clock}
      </Text>
      <Text style={style.meta}>
        <Text>
          {`${name}${hasDays ? ',' : ''}`}
        </Text>
        <Text>
          {`${hasDays ? days.map((day) => ` ${day}`) : ''}`}
        </Text>
      </Text>
    </View>
  )
}

/*
${i !== 0 ? ',': null}
*/
