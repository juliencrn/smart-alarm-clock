import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { Page } from '../types'
import AlarmList from '../components/AlarmList'
import { State } from '../store/reducer'
import { toggleHomeEdit } from '../store/actions'

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
  const { isEditing } = useSelector((state: State) => state.home)
  const dispatch = useDispatch()

  const goToEdit = (id) => {
    navigation.navigate('Edit', { id })
    dispatch(toggleHomeEdit(false))
  }

  const goToNew = () => {
    navigation.navigate('New')
    dispatch(toggleHomeEdit(false))
  }

  const toggleEditMode = () => {
    dispatch(toggleHomeEdit(!isEditing))
  }

  return (
    <View style={style.root}>
      <View style={style.header}>
        <Button
          title={isEditing ? 'OK' : 'Edit'}
          onPress={toggleEditMode}
        />
        <Button title="+" onPress={goToNew} />
      </View>
      <AlarmList handleClick={goToEdit} />
    </View>
  )
}
