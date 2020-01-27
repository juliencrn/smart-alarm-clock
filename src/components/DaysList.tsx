import React from 'react'
import { Text, StyleSheet } from 'react-native'

import moment from 'moment'
import { weekday, weekend } from '../utils'

const style = StyleSheet.create({
  days: {
    textTransform: 'capitalize',
  },
})

  interface Props {
      days: string[]
  }

// Todo : sort Monday => Sunday
export default function DaysList({ days }: Props) {
  const weekdaysCount = days.filter((day: any) => weekday.includes(day)).length
  const weekendCount = days.filter((day: any) => weekend.includes(day)).length

  const isWeekend = weekendCount === 2 && weekdaysCount === 0
  const isWeekday = weekdaysCount === 5 && weekendCount === 0

  let output: string = ''
  if (isWeekend) {
    output = 'every weekend'
  } else if (isWeekday) {
    output = 'every weekday'
  } else {
    output = days.reduce(
      (prev, curr, i) => `${prev}${i !== 0 ? ', ' : ''}${moment(curr, 'e').format('ddd')}`,
      '',
    )
  }

  return (
    <Text style={style.days}>
      {output}
    </Text>
  )
}
