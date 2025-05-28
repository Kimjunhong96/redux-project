import {useState, useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Navigate,useParams} from "react-router-dom";
import {fetchFoodDetail} from "@/actions/foodActions";
import {useNavigate} from "react-router";

// => history.back() Navigate

function FoodDetail() {
    const{fno} = useParams();
    const dispatch = useDispatch();
    const nav=useNavigate();
    useEffect(()=>{
        dispatch(fetchFoodDetail(fno))
    },[])
    const foodDetail=useSelector(state=>state.foods.food_detail)
    const listClick=() =>{
        nav("/food/list")
    }
    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(/img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>맛집 상세보기</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="row">
                        <table className={"table"}>
                            <tbody>
                            <tr>
                                <td className={"text-center" width={"30%"} rowSpan={"8"}>}>
                                    <img src={foodDetail && "https://www.menupan.com"+FoodDetail.poster} style={{"width":"320px", "height":"300px"}}/ />
                                </td>
                                <td colSpan={"2"}><h3>{foodDetail && foodDetail.name}&nbsp;</h3></td>
                            </tr>
                            <tr>
                                <th width={"15%"} className={"text-center"}>주소</th>
                                <td width={"55%"}>{foodDetail && foodDetail.address}</td>
                            </tr>
                            <tr>
                                <th width={"15%"} className={"text-center"}>음식종류</th>
                                <td width={"55%"}>{foodDetail && foodDetail.type}</td>
                            </tr>
                            <tr>
                                <th width={"15%"} className={"text-center"}>가격대</th>
                                <td width={"55%"}>{foodDetail && foodDetail.price}</td>
                            </tr>
                            <tr>
                                <th width={"15%"} className={"text-center"}>주차</th>
                                <td width={"55%"}></td>
                            </tr>
                            <tr>
                                <th width={"15%"} className={"text-center"}>영업시간</th>
                                <td width={"55%"}></td>
                            </tr>
                            <tr>
                                <th width={"15%"} className={"text-center"}>테마</th>
                                <td width={"55%"}>{foodDetail && foodDetail.theme}</td>
                            </tr>
                            <tr>
                                <th width={"15%"} className={"text-center"}>전화</th>
                                <td width={"55%"}>{foodDetail && foodDetail.phone}</td>
                            </tr>
                            </tbody>
                        </table>
                        <table className={"table"}>
                            <tbody>
                            <tr>
                                <td className={"text-center"}>{foodDetail && foodDetail.content}</td>

                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default FoodDetail;
