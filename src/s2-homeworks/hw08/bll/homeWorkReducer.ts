import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let newState = [...state]
            if (action.payload === 'up') {
                newState.sort((a: UserType, b: UserType) => a.name.localeCompare(b.name))
            } else if (action.payload === 'down') {
                newState.sort((a: UserType, b: UserType) => a.name.localeCompare(b.name)).reverse()
                // localeCompare() https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
            }
            return newState
        }
        case 'check': {
         //   return [...state].sort((a: UserType, b: UserType) => a.age > 18 ? -1 : 1) // need to fix
            return [...state].filter((a)=> a.age > 18) // need to fix
        }
        default:
            return state
    }
}


