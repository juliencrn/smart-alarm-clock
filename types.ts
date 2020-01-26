export type WeekDay = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday'
export type WeekEndDay = 'saturday' | 'sunday'
export type Day = WeekDay | WeekEndDay

export interface IAlarm {
    id: string
    name: string
    clock: string
    days?: Day[],
    activated: boolean
}
