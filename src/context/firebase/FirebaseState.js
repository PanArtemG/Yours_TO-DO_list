import React, {useReducer} from "react";
import axios from 'axios';
import {FirebaseContext} from "./fireaseContext";
import {firebaseReducer} from "./firebaseReducer";
import {REMOVE_NOTE, SHOW_LOADER} from "../types";


const url = process.env.REACT_APP_DB_URL;
// const url = https://yors-to-do-list.firebaseio.com;

export const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false
    };

    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const fetchNotes = async () => {
        showLoader()
        const res = await axios.get(`${url}/notes/json`);
        console.log(res.data);
    }

    const addNote = async (title) => {
        const note = {
            title, date: new Date().toJSON()
        }
        try {
            const res = await axios.post(`https://to-do-916e3.firebaseio.com/notes/json`, note)

            console.log(res.data);
        } catch (e) {
            throw   new Error(e.message)
        }
    };

    const removeNote = async id => {
        await axios.delete(`https://to-do-916e3.firebaseio.com/notes/${id}.json`)

        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader,
            addNote,
            removeNote,
            fetchNotes,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}