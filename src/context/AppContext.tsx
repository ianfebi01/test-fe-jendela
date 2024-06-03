'use client'
import { IActions } from '@/types/context'
import {
  ActionMapDefaultReducer,
  IInitialLanding,
} from '@/types/context/app-context'
import React, { ReactNode, Reducer, createContext, useReducer } from 'react'

// Initial landing state
const initialState: IInitialLanding = {
  orders: JSON.parse(localStorage.getItem('orders') as string) || [],
  auth: false,
}

// Create Reducer
const mainReducer = (
  state: IInitialLanding,
  action: IActions<ActionMapDefaultReducer>
): IInitialLanding => AppReducer(state, action)

// create Context provider
export const AppContext = createContext<{
  state: IInitialLanding
  dispatch: React.Dispatch<IActions<ActionMapDefaultReducer>>
}>({
  state: initialState,
  dispatch: () => null,
})

//   Create provider Component
interface Props {
  children: ReactNode
}
export function AppProvider({ children }: Props) {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

// Create Reducer function
const AppReducer: Reducer<
  IInitialLanding,
  IActions<ActionMapDefaultReducer>
> = (state, action) => {
  switch (action.type) {
    case 'set_order': {
      const tmp = [...state.orders, action.payload]

      localStorage.setItem('orders', JSON.stringify(tmp))
      return {
        ...state,
        order: [...state.orders, action.payload],
      }
    }
    case 'set_login': {
      return {
        ...state,
        auth: true,
      }
    }
    case 'set_logout': {
      return {
        ...state,
        auth: false,
      }
    }
    default: {
      throw Error('Unknown action')
    }
  }
}
