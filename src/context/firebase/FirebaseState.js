import React, {useReducer} from "react";
import {FirebaseContext} from "./fireaseContext";
import {firebaseReducer} from "./firebaseReducer";


export const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    return (
        <FirebaseContext.Provider>
            {children}
        </FirebaseContext.Provider>
    )
}