import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Page } from '../types'

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
})

// Todo : Externalize the Form component for use it in New.tsx template
export default function Edit({ navigation }: Page) {
  // const { id } = navigation.state.params
  return (
    <View style={style.root}>
      <Text>Edit page</Text>
    </View>
  )
}
