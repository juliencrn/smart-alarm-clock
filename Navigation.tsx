import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './pages/Home'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
})

export default createAppContainer(AppNavigator)
