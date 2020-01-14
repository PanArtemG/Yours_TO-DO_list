import {HIDE_ALERT, SHOW_ALERT} from "../types";

const handlers = {
    [SHOW_ALERT]: (state, {payload}) => ({...payload, visible: true}),
    [HIDE_ALERT]: state => ({...state, visible: false}),
    DEFAULT: state => state
}

export const alertReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}

const initialState = [];

// export const alertReducer = (state = initialState, {type, payload})=> {
//     switch (type) {
//         case (SHOW_ALERT):
//             return {...payload, visible: true};
//         case (HIDE_ALERT):
//             return {...state, visible: false};
//         default:
//             return state => state
//     }
// };
