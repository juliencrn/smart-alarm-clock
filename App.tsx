import React from 'react'
import { Provider } from 'react-redux'

import store from './store/store'
import Navigation from './Navigation'

// Todo : Read about "how to code a alarm clock"
// Todo : Learn how to work with Hours/minutes
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}
