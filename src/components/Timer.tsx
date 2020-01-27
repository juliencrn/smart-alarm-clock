import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import moment from 'moment'
import useInterval from '../hooks/useInterval'

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
  const [m, setM] = useState(moment())

  useInterval(() => {
    setM(moment())
  }, 1000)

  return (
    <View style={style.root}>
      <Text style={style.text}>
        {`Current Time: ${m.format('HH:mm:ss')}`}
      </Text>
      <Text style={style.text}>
        {`Current Day: ${m.format('dddd')} (${m.format('e')})`}
      </Text>
    </View>
  )
}
