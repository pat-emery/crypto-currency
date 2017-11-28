import apiBaseUrl from '../Utils/Constants'
import { FETCHING_COIN_DATA, 
         FETCH_COIN_SUCCESS, 
         FETCH_COIN_FAIL } from '../Utils/ActionTypes'
import axios from 'axios'

export default function fetchCoinData() {
    return dispatch => {
        dispatch({type: FETCHING_COIN_DATA})

        return axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
            .then(res => {
                dispatch({type: FETCH_COIN_SUCCESS, payload: res.data})
            }).catch(err => {
                dispatch({type: FETCH_COIN_FAIL, payload: err})
            })
    }
}