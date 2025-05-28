import {useDispatch, useSelector} from 'react-redux-dom'
import {useState,useEffect,Fragment} from "react";
import {fetchYouTubeFind} from "@/actions/youtubeActions";

function YoutubeFind(){
    const dispatch = useDispatch();
    const [fd , setFds] = useState("부산여행");
    useEffect(()=>{
        dispatch(fetchYouTubeFind(fd));
    },[fd])
    const movie=useSelector((state)=>state.youtubes.movie_date);
    return(
        <Fragment>
            <div className="breadcumb-nav" >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#"><i className="fa fa-home"
                                                                                   aria-hidden="true"></i> Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Archive Page</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default YoutubeFind;
