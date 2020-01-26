import React from 'react'
import { ScrollView } from 'react-native'

import { IAlarm } from '../types'
import AlarmItem from './AlarmItem'

interface Props {
    alarms: IAlarm[]
    isEditing: boolean
    handleClick: (id: string) => void
}

export default function AlarmList({ alarms, isEditing, handleClick }: Props) {
  return (
    <ScrollView>
      {alarms.map((alarm: IAlarm) => (
        <AlarmItem
          {...alarm}
          key={alarm.id}
          handleEdit={(id) => handleClick(id)}
          isEditing={isEditing}
        />
      ))}
    </ScrollView>
  )
}
