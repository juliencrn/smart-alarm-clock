import React, { Fragment } from 'react'
import {
  StyleSheet, TouchableOpacity, View, Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Day } from '../types'
import { allDays } from '../utils'

const style = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textTransform: 'capitalize',
    marginTop: 4,
  },
})

interface Props {
    selected: Day[]
    onChange: (days: Day[]) => void
}

export default function CheckDays({ selected, onChange }: Props) {
  function handleChange(day) {
    onChange(selected.indexOf(day) === -1
      ? [...selected, day]
      : selected.filter((d) => d !== day))
  }

  return (
    <View style={style.root}>
      {allDays.map((day: Day) => (
        <Fragment key={day}>
          <TouchableOpacity onPress={() => handleChange(day)}>
            <View style={style.item}>
              <Icon name={selected.includes(day) ? 'check-circle' : 'radio-button-unchecked'} size={24} />
              <Text style={style.text}>
                {day.slice(0, 3)}
              </Text>
            </View>
          </TouchableOpacity>
        </Fragment>
      ))}
    </View>
  )
}
