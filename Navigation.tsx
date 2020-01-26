import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './pages/Home'
import Edit from './pages/Edit'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Alarms',
    },
  },
  Edit: {
    screen: Edit,
  },
})

export default createAppContainer(AppNavigator)
