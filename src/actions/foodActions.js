import {FETCH_FOOD_LIST,FETCH_FOOD_FIND,FETCH_FOOD_DETAIL} from './types'
import axios from "axios";
/*
    1. 구분자 생성 = types.js
        export const FETCH_MAIN_DATA='FETCH_MAIN_DATA'
    2. 데이터 처리 함수 = foodActions.js
        export const fetchFoodList = (page) => dispatch => {
           axios / fetch
        }
        => reducer 로 전송

     3. reducer 에서 처리
 */
export const fetchFoodList = (page) => dispatch => {
    axios.get('http://localhost/food/list_react',{
        params: {
            page: page
        }
    }).then((res ) => {
        const action={
            type: FETCH_FOOD_LIST,
            payload: res.data
        }
        dispatch({action})
    })
}
export const fetchFoodDetail = (fno) => dispatch => {

}
