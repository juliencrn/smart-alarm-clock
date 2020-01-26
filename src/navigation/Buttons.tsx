import React from 'react'
import { NavigationStackProp } from 'react-navigation-stack'
import { Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { toggleEdit } from '../store/home/actions'
import { State } from '../types'

interface HasNavigation {
    navigation: NavigationStackProp
}

export function ToggleEditButton() {
  const { isEditing } = useSelector((state: State) => state.home)
  const dispatch = useDispatch()
  return (
    <Button
      title={isEditing ? 'OK' : 'Edit'}
      onPress={() => dispatch(toggleEdit(!isEditing))}
    />
  )
}

export function AddNewButton({ navigation }: HasNavigation) {
  const dispatch = useDispatch()

  const goToNew = () => {
    dispatch(toggleEdit(false))
    navigation.navigate('New')
  }

  return <Button title="+" onPress={goToNew} />
}
