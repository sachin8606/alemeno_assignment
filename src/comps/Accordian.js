import React, { useEffect } from 'react'
import '../styles/compsStyle/accordian.css'


const Accordian = (props) => {
    useEffect(() => {
        console.log(props.syllabus)
    },[])
    return (
        <div id="accordion">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Syllabus <i className ="bi bi-caret-down-fill"></i>
                        </button>
                    </h5>
                </div>
                <div id="collapseOne" className="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        <ul>
                            {props.syllabus && props.syllabus.map((item, index) => {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordian