import React from 'react'
import { ScrollView, View } from 'react-native'

import { IAlarm } from '../types'
import AlarmItem from '../components/AlarmItem'
import { alarms } from '../utils'

// Sort list by hour (in ms)
export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {alarms.map((alarm: IAlarm) => <AlarmItem key={alarm.id} {...alarm} />)}
      </ScrollView>
    </View>
  )
}
