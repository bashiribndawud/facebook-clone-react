import React, {createContext, useContext, useReducer} from 'react'

export const StateContext = createContext();

const initialState = {
    user: null
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

// HOC
export const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
      <StateContext.Provider value={{ state, dispatch }}>
        {children}
      </StateContext.Provider>
    );
}


export const useStateValue = () => useContext(StateContext);