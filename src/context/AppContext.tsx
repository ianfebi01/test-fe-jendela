'use client'
import { IActions } from '@/types/context'
import {
  ActionMapDefaultReducer,
  IInitialLanding,
  IOrder,
} from '@/types/context/app-context'
import React, { ReactNode, Reducer, createContext, useReducer } from 'react'

// Initial landing state
const initialState: IInitialLanding = {
  orders: [],
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
      return {
        ...state,
        order: [...state.orders, action.payload],
      }
    }
    default: {
      throw Error('Unknown action')
    }
  }
}
