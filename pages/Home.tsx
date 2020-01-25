import React from 'react'
import { ScrollView, View } from 'react-native'

import { IAlarm } from '../types'
import AlarmItem from '../components/AlarmItem'

const alarms: IAlarm[] = [
  {
    id: 'abc123', name: 'Alarm 1', clock: '07:30', days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
  },
  {
    id: 'abc124', name: 'Alarm 2', clock: '09:00', days: ['saturday', 'sunday'],
  },
  {
    id: 'abc125', name: 'Alarm test', clock: '16:20', days: [],
  },
]

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {alarms.map((alarm) => <AlarmItem key={alarm.id} {...alarm} />)}
      </ScrollView>
    </View>
  )
}
