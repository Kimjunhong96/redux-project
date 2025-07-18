import {FETCH_INFO_LIST} from "./types";
import axios from "axios";

const infoState={
    info_data:{}
}
// dispatch(action) => 자동 호출
// dispatch({type:찾기, payload:데이터}
// ... : 복제
export default function(state=infoState, action){
    console.log("reducer call"+action.type);
    switch(action.type){
        case FETCH_INFO_LIST:
            return {
                ...state,
                info_data: action.payload
            }
        default:
            return state;
    }
}