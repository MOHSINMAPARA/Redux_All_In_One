import { USERS } from "../actions/action"

const initialState={
    userState:[]
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USERS:
            return {
                ...state,
                userState: action.payload
            }
 
        default:
            return state
    }
}


