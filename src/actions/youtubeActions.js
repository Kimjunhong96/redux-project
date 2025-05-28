import {FETCH_YOUTUBE_FIND} from "./types"

export const fetchYouTubeFind = (fd) => dispatch => {
    const search = async(fd)=>{
        try {
            const response = await fetch(FETCH_YOUTUBE_FIND, {
                method: "POST",
            })
        }catch(error){
            console.log(error)
        }
    }
}