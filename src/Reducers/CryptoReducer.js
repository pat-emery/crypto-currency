import { FETCHING_COIN_DATA, 
    FETCH_COIN_SUCCESS, 
    FETCH_COIN_FAIL } from '../Utils/ActionTypes'

const InitialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null
}

export default function(state = InitialState, action) {
    switch(action.type) {
        case FETCHING_COIN_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                data: null,
                hasError: false,
                errorMessage: null
            })
        case FETCH_COIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            })
        case FETCH_COIN_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: true,
                errorMessage: action.err
            })
        default:
            return state
    }        
}