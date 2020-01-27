import React from 'react'
import { TouchableOpacity } from 'react-native'

interface ITouchable {
    isTouchable: boolean
    children: any
    onPress?: () => void
  }

export default function Touchable({ isTouchable, children, onPress }: ITouchable) {
  if (isTouchable) {
    return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
  }
  return <>{children}</>
}
