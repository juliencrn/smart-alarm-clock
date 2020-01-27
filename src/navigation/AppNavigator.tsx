import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator, NavigationStackProp } from 'react-navigation-stack'

import Home from '../pages/Home'
import Edit from '../pages/Edit'
import { ToggleEditButton, AddNewButton } from './Buttons'

interface Props {
  navigation: NavigationStackProp
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }: Props) => ({
        title: 'Alarms',
        headerLeft: () => <ToggleEditButton />,
        headerRight: () => <AddNewButton navigation={navigation} />,
      }),
    },
    Edit: {
      screen: Edit,
    },
  }, {
    initialRouteName: 'Home',
    mode: 'card',
  // headerMode: 'screen',
  },
)

export default createAppContainer(AppNavigator)
