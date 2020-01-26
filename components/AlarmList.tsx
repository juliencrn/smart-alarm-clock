import React from 'react'
import { ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import { IAlarm } from '../types'
import AlarmItem from './AlarmItem'
import { State } from '../store/reducer'

interface Props {
    handleClick: (id: string) => void
}

export default function AlarmList({ handleClick }: Props) {
  const { alarms } = useSelector((state: State) => state)
  return (
    <ScrollView>
      {alarms.map((alarm: IAlarm) => (
        <AlarmItem
          {...alarm}
          key={alarm.id}
          handleEdit={(id) => handleClick(id)}
        />
      ))}
    </ScrollView>
  )
}
