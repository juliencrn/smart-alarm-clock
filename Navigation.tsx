import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './pages/Home'
import Edit from './pages/Edit'
import New from './pages/New'

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
  New: {
    screen: New,
  },
})

export default createAppContainer(AppNavigator)
