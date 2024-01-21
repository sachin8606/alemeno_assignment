import React, { useEffect, useState } from 'react'
import '../styles/compsStyle/detail.css'
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { enroll, fetchCourseDetail } from '../actions/actions';
import Accordian from '../comps/Accordian';


const Detail = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const myParam = urlParams.get('id')
    const dispatch = useDispatch()
    const data = useSelector((state) => state.courses)
    const [state, setState] = useState({})

    useEffect(() => {
        data.map((item, index) => {
            console.log(index)
            if (item.Course_id == myParam) {
                console.log(item)
                setState(item)
            }
        })
    }, [])


    const enrollNow = () => {
        if (!state.isEnrolled) {
            dispatch(enroll({ "id": myParam }))
        }
    }

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-5">
                        <div className="main-img">
                            <img className="img-fluid" src="./course_pic.jpg" alt="ProductS" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="main-description px-2">
                            <div className="category text-bold">
                                Course
                            </div>
                            <div className="product-title text-bold my-3">
                                {state.Course_name}
                            </div>
                            <div className="price-area my-4">
                                <p className="old-price mb-1"><del>$100</del> <span className="old-price-discount text-danger">(20% off)</span></p>
                                <p className="new-price text-bold mb-1">$80</p>
                            </div>
                            <div className="buttons d-flex my-3">
                                <div className="block">
                                    <button className={`${state.isEnrolled ? "shadow btn custom-btn disable" : "shadow btn custom-btn"}`} disabled={state.isEnrolled ? true : false} onClick={() => enrollNow()}>{state.isEnrolled ? "Already enrolled" : "Enroll now"}</button>
                                </div>
                            </div>
                        </div>
                        <div className="product-details my-4">
                            <p className="details-title text-color mb-1">Course Details</p>
                            <p className="description">{state.Description}</p>
                        </div>
                        <div className="row questions bg-light p-3">
                            <div className="col-md-12 text">
                                <ul>
                                    <li><i className="bi bi-person-badge"></i> Instructor : {state.Instructor}</li>
                                    <li><i className="bi bi-geo-alt"></i> Location : {state.Location}</li>
                                    <li><i className="bi bi-calendar-check"></i> Schedule : {state.Schedule}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="delivery my-4">
                            <p className="font-weight-bold mb-0"><span><i className="fa-solid fa-truck"></i></span> <b></b> </p>
                            <p className="text-secondary"></p>
                        </div>
                        <div className="delivery-options p-2 my-4 bg-light ">
                            <p className="font-weight-bold mb-0"><span><i className="fa-solid fa-filter"></i></span> </p>
                            <Accordian
                                syllabus={state.Syllabus}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Detail