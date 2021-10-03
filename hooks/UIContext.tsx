import { FC, useMemo, useReducer, createContext, useContext } from 'react'

export interface State {
  displaySidebar: boolean
  displayToast: boolean
  toastText: string
}

const initialState = {
  displaySidebar: false,
  displayToast: false,
  toastText: ``,
}

type Action =
  | {
      type: 'OPEN_SIDEBAR'
    }
  | {
      type: 'CLOSE_SIDEBAR'
    }
  | {
      type: 'OPEN_TOAST'
    }
  | {
      type: 'CLOSE_TOAST'
    }
  | {
      type: 'SET_TOAST_TEXT'
      text: string
    }

export const UIContext = createContext<State | any>(initialState)

UIContext.displayName = `UIContext`

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case `OPEN_SIDEBAR`: {
      return {
        ...state,
        displaySidebar: true,
      }
    }
    case `CLOSE_SIDEBAR`: {
      return {
        ...state,
        displaySidebar: false,
      }
    }
    case `OPEN_TOAST`: {
      return {
        ...state,
        displayToast: true,
      }
    }
    case `CLOSE_TOAST`: {
      return {
        ...state,
        displayToast: false,
      }
    }
    case `SET_TOAST_TEXT`: {
      return {
        ...state,
        toastText: action.text,
      }
    }
    default:
      return {
        ...state,
      }
  }
}

export const UIProvider: FC = (props) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)

  const openSidebar = () => dispatch({ type: `OPEN_SIDEBAR` })
  const closeSidebar = () => dispatch({ type: `CLOSE_SIDEBAR` })
  const toggleSidebar = () =>
    state.displaySidebar ? dispatch({ type: `CLOSE_SIDEBAR` }) : dispatch({ type: `OPEN_SIDEBAR` })
  const closeSidebarIfPresent = () => state.displaySidebar && dispatch({ type: `CLOSE_SIDEBAR` })

  const openToast = () => dispatch({ type: `OPEN_TOAST` })
  const closeToast = () => dispatch({ type: `CLOSE_TOAST` })

  const value = useMemo(
    () => ({
      ...state,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      closeSidebarIfPresent,
      openToast,
      closeToast,
    }),
    [state]
  )

  return <UIContext.Provider value={value} {...props} />
}

export const useUI = () => {
  const context = useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

export const ManagedUIContext: FC = ({ children }) => <UIProvider>{children}</UIProvider>
