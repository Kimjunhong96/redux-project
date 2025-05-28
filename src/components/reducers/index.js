import {combineReducers} from "redux";

// combineReducers : reduce여러개를 모아서 한번에 저장
import mainReducer from "./mainReducer";
import foodReducer from "@/components/reducers/foodReducer";
import youtubeReducer from "@/components/reducers/youtubeReducer";
import infoReducer from "@/components/reducers/infoReducer";
// mains.main_data mains.main_detail => 변수 선택
export default combineReducers({
    mains: mainReducer,
    foods: foodReducer,
    youtube: youtubeReducer,
    info: infoReducer
})