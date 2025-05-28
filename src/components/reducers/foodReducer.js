import {FETCH_FOOD_LIST,FETCH_FOOD_DETAIL} from './actions/types'
// Map => {} , VO|Entity => {},List =>[]
const foodState = {
    food_list: {},
    find_list:{},
    food_detail:{}
}
/*
    1. type.js  => 구분 (내부 프로토콜)
       export const FETCH_BOARD_LIST=''
 */
export default function (state = foodState, action) {
    switch (action.type) {
        case FETCH_FOOD_LIST:
            return {
                ...state,
                food_list: action.payload
            }
        default:
            return state;
    }
}
export default function (state = foodState, action) {
    switch (action.type) {
        case FETCH_FOOD_LIST:
            return {
                ...state,
                food_list: action.payload
            }
        case FETCH_FOOD_DETAIL:
            return {
                ...state,
                food_list: action.payload
            }
        default:
            return state;
    }
}
