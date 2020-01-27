import React, { Fragment } from 'react'
import {
  StyleSheet, TouchableOpacity, View, Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment'
import { days as allDays } from '../utils'

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
    selected: string[]
    onChange: (days: string[]) => void
}

export default function CheckDays({ selected, onChange }: Props) {
  function handleChange(key) {
    onChange(selected.indexOf(key) === -1
      ? [...selected, key]
      : selected.filter((d) => d !== key))
  }

  return (
    <View style={style.root}>
      {allDays.map((key) => {
        const m = moment(key.toString(), 'e')
        const day = {
          key: m.format('e'),
          label: m.format('ddd'),
        }
        return (
          <Fragment key={key}>
            <TouchableOpacity onPress={() => handleChange(key)}>
              <View style={style.item}>
                <Icon name={selected.includes(day.key) ? 'check-circle' : 'radio-button-unchecked'} size={24} />
                <Text style={style.text}>
                  {moment(key.toString(), 'e').format('ddd')}
                </Text>
              </View>
            </TouchableOpacity>
          </Fragment>
        )
      })}
    </View>
  )
}
