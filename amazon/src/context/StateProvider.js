import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //creates empty data layer 
// this sets up the data layer, which wraps around the entire application through index. like an outer data layer.
//below is the provider that gives access to that data layer we just created
//its like creating global variables around the entire react app instead of prop drilling
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children} 
    </StateContext.Provider>
)

// this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);