import { DELETE_USER_ERROR, DELETE_USER_PENDING, DELETE_USER_SUCCESS, GET_USER_ERROR, GET_USER_PENDING, GET_USER_SUCCESS, POST_USER_ERROR, POST_USER_PENDING, POST_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_PENDING, UPDATE_USER_SUCCESS } from "../action/action";

let initialState = {
    user: [],

    // status
    isLoading: false,
    isError: null
}

let userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PENDING: {
            return {
                isLoading: true,
                ...state
            }
        }
        case GET_USER_SUCCESS: {
            return {
                isLoading: false,
                user: action.data
            }
        }
        case GET_USER_ERROR: {
            return {
                ...state,
                isError: action.data
            }
        }
        case POST_USER_ERROR: {
            return {
                ...state,
                isError: action.data
            }

        }
        case POST_USER_PENDING: {
            console.log("POST_USER_PENDING reducer.js")
            return {
                ...state, isLoading: true
            }
        }
        case POST_USER_SUCCESS: {
            return {
                isLoading: false,
                user: state.user.concat(action.data)

            }
        }
        case DELETE_USER_PENDING: {
            return {
                ...state,
                isLoading: true,

            }
        }
        case DELETE_USER_SUCCESS: {
            console.log(action.data, "reducer", action);
            return {
                isLoading: false,
                user: state.user.filter((val) => val._id !== action.data._id)
            }
        }
        case DELETE_USER_ERROR: {
            return {
                ...state,
                isError: true
            }
        }
        case UPDATE_USER_PENDING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case UPDATE_USER_SUCCESS: {
            console.log(action.data, "redux update");
            return {
                isLoading: false,
                user: state.user.map((val) => {
                    if (val._id == action.data._id) {
                        return {
                            ...val,
                            ...action.data
                        }
                    }
                    else {
                        return {
                            ...val
                        }
                    }
                })
            }
        }
        case UPDATE_USER_ERROR: {
            return {
                isLoading: false,
                isError: action.data
            }
        }
        default:
            return {
                ...state
            }
    }
}
export default userReducer