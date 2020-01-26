import React from 'react'
import { ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import { State } from '../types'
import AlarmItem from './AlarmItem'

interface Props {
    handleClick: (id: string) => void
}

export default function AlarmList({ handleClick }: Props) {
  const { alarms } = useSelector((state: State) => state.alarm)
  return (
    <ScrollView>
      {alarms.map((alarm) => (
        <AlarmItem
          {...alarm}
          key={alarm.id}
          handleEdit={(id) => handleClick(id)}
        />
      ))}
    </ScrollView>
  )
}
