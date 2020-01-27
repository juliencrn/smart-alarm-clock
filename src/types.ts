import { NavigationStackProp } from 'react-navigation-stack'

import { HomeState } from './store/home/reducer'
import { AlarmState } from './store/alarm/reducer'


export interface IAlarm {
    id: string
    name: string
    clock: Date
    days?: string[],
    activated: boolean
}

export interface Page {
    navigation: NavigationStackProp
}

export interface State {
    alarm: AlarmState
    home: HomeState
}
