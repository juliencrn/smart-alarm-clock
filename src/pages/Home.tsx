import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'

import { Page } from '../types'
import AlarmList from '../components/AlarmList'
import { toggleEdit } from '../store/home/actions'

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 4,
    paddingTop: 4,
  },
})

// todo : Sort list by hour (in ms)
export default function Home({ navigation }: Page) {
  const dispatch = useDispatch()

  const goToEdit = (id) => {
    navigation.navigate('Edit', { id })
    dispatch(toggleEdit(false))
  }

  return (
    <View style={style.root}>
      <AlarmList handleClick={goToEdit} />
    </View>
  )
}
