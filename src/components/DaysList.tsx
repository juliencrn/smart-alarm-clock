import React from 'react'
import { Text, StyleSheet } from 'react-native'

import { Day } from '../types'
import { days as allDays } from '../utils'

const style = StyleSheet.create({
  days: {
    textTransform: 'capitalize',
  },
})

  interface Props {
      days: Day[]
  }

export default function DaysList({ days }: Props) {
  const weekdaysCount = days.filter((day: any) => allDays.weekday.includes(day)).length
  const weekendCount = days.filter((day: any) => allDays.weekend.includes(day)).length

  const isWeekend = weekendCount === 2 && weekdaysCount === 0
  const isWeekday = weekdaysCount === 5 && weekendCount === 0

  let output: string = ''
  if (isWeekend) {
    output = 'every weekend'
  } else if (isWeekday) {
    output = 'every weekday'
  } else {
    output = days.reduce((text, curr, i) => `${text}${i !== 0 ? ', ' : ''}${curr.slice(0, 3)}`, '')
  }

  return (
    <Text style={style.days}>
      {output}
    </Text>
  )
}
