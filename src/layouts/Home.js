import React, { useEffect } from 'react'
import Hcard from '../comps/Hcard'
import { useSelector } from 'react-redux';
import { markcompleted } from '../actions/actions';
const Home = () => {
    const data = useSelector((state) => state.courses)
    console.log(data)
    return (
        <div>
            <h2 className='text-center mt-2'>Top Courses</h2>
            <div className="container d-flex flex-wrap justify-content-around mt-50 mb-50">
                {
                    data.map((item, index) => {
                        return (
                            <Hcard
                                key={index}
                                id={item.Course_id}
                                Course_name={item.Course_name}
                                Duration={item.Duration}
                                Enrollment_status={item.Enrollment_status}
                                isEnrolled={item.isEnrolled}
                                Instructor={item.Instructor}
                                liked={item.liked}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home