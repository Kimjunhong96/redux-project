import {FETCH_MAIN_DATA} from "./types";
import axios from "axios";

const youtubeState={
    main_data:{}
}
// dispatch(action) => 자동 호출
// dispatch({type:찾기, payload:데이터}
// ... : 복제
export default function(state=youtubeState, action){
    console.log("reducer call"+action.type);
    switch(action.type){
        case FETCH_YOUTUBE_FIND:
            return {
                ...state,
                main_data: action.payload
            }
        default:
            return state;
    }
}