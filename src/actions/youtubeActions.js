import {FETCH_YOUTUBE_FIND} from "./types"

export const fetchYouTubeFind = (fd) => dispatch => {
    const search = async(fd)=>{
        try {
            const response = await fetch(
                "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=" + fd + "&type=video&key=AIzaSyDu13VB1Y6cnu4y9DKqA3bLgAXuqaw4BFU"
            )
            const result = await response.json()
            const action = {
                type: FETCH_YOUTUBE_FIND,
                payload: result.items
            }
            console.log(result.items)
            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }
}