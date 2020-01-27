import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import moment from 'moment'

const style = StyleSheet.create({
  root: {
    marginRight: 16,
    marginLeft: 16,
    marginTop: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
})

export default function Timer() {
  const m = moment()
  return (
    <View style={style.root}>
      <Text style={style.text}>
        {`Current Time: ${m.format('HH:mm')}`}
      </Text>
      <Text style={style.text}>
        {`Current Day: ${m.format('dddd')} (${m.format('e')})`}
      </Text>
    </View>
  )
}
