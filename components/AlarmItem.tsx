import React, { useState } from 'react'
import {
  Text, StyleSheet, View, Switch, Button,
} from 'react-native'

import { IAlarm } from '../types'
import DaysList from './DaysList'

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
  isEditing: boolean
  handleEdit: (id: string) => void
}

// Todo add remove btn
export default function AlarmItem({
  id, name, clock, days, activated, isEditing, handleEdit,

}: Props) {
  const hasDays = days && days.length > 0
  const [isActivated, setIsActivated] = useState(activated)

  const handleSwitch = (value: boolean) => {
    setIsActivated(value)
  }

  return (
    <View style={style.card}>

      {isEditing && (
        <View style={style.side}>
          <Button
            title="Del"
            onPress={() => console.log(`click on delete ${name}`)}
          />
        </View>
      )}

      <View style={style.main}>
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

      <View style={style.side}>
        {isEditing ? (
          <Button
            title=">"
            onPress={() => handleEdit(id)}
          />
        ) : (
          <Switch
            onValueChange={(value: boolean) => handleSwitch(value)}
            value={isActivated}
          />
        )}
      </View>

    </View>
  )
}
