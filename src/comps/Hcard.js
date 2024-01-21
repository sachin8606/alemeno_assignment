import React from 'react'
import '../styles/compsStyle/hcard.css'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { like } from '../actions/actions'
const Hcard = (props) => {
    const dispatch = useDispatch();
    const likeCourse = (id) => {
        if(!props.liked){
            dispatch(like({"id":id}))
        }
    }
    return (
        <div className="card hcard">
            <div className="card-body">
                <div className="card-img-actions">
                    <img src="./course_pic.jpg" className="card-img img-fluid" width="96" height="350" alt="" />
                </div>
            </div>
            <div className="card-body bg-light text-center">
                <div className="mb-2">
                    <h6 className="font-weight-semibold mb-2">
                        <NavLink to={`/course_detail?id=` + props.id} className="text-default mb-2" data-abc="true">{props.Course_name}</NavLink>
                    </h6>
                    <a href="#" className="text-muted" data-abc="true">{props.Duration}</a>
                </div>
                <h3 className="mb-0 font-weight-semibold">$250.99</h3>
                <div>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                </div>
                <div className="text-muted mb-3">34 reviews</div>
                <div className='row'>
                    <div className='col-8'>
                        <button type="button" className="btn bg-cart">{props.Instructor}</button>
                    </div>
                    <div className='col-4'>
                        <i onClick={() => likeCourse(props.id)} className={props.liked ? 'thumbs bi bi-hand-thumbs-up-fill' : 'thumbs bi bi-hand-thumbs-up'} role='button'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hcard