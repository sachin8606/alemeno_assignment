import React from 'react'
import { useDispatch } from 'react-redux'
import { removelike } from '../actions/actions';

const LikedCard = (props) => {
    const dispatch = useDispatch();

    const remove_like = (id) => {
            dispatch(removelike({ "id": id }))
    }
    return (
        <div className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <h6>{props.course}</h6>
                <p className="mb-0">{props.Instructor}</p>
            </div>
            <button type="button" className="btn btn-danger btn-sm ml-2" onClick={() => remove_like(props.id)}>Remove from liked</button>
        </div>
    )
}

export default LikedCard