import React from 'react'
import { useDispatch } from 'react-redux'
import { markcompleted } from '../actions/actions';

const ProfileCard = (props) => {
    const dispatch = useDispatch();

    const mark_complete = (id) => {
        if (!props.complete) {
            dispatch(markcompleted({ "id": id }))
        }
    }
    return (
        <div className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <h6>{props.course}</h6>
                <p className="mb-0">{props.Instructor}</p>
            </div>
            <div className="progress" style={{ "width": "30%" }}>
                <div className="progress-bar" role="progressbar" style={{ "width": "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    100%
                </div>
            </div>
            <button type="button" className="btn btn-success btn-sm ml-2" onClick={() => mark_complete(props.id)}>{props.complete ? "Completed" : "Mark as Completed"}</button>
        </div>
    )
}

export default ProfileCard