import React from 'react'
import { useSelector } from 'react-redux'
import ProfileCard from '../comps/ProfileCard'
import LikedCard from '../comps/LikedCard'
const Profile = () => {
    const data = useSelector((state) => state.courses)
    console.log(data)
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://via.placeholder.com/150" alt="Avatar" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Sachin Rangar</h5>
                            <p className="card-text">sachin.rangar@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <h2 className="mb-4">Enrolled Courses</h2>
                    <div className="list-group">
                        {data && data.map((item,index)=>{
                            if(item.isEnrolled){
                                return (
                                    <ProfileCard 
                                    key={index}
                                    id={item.Course_id}
                                    course={item.Course_name}
                                    Instructor={item.Instructor}
                                    complete = {item.isCompleted}
                                    />
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
            <div className='row'>
            <div className="col-md-4"></div>
            <div className="col-md-8">
                    <h2 className="mb-4">Courses you liked</h2>
                    <div className="list-group">
                        {data && data.map((item,index)=>{
                            if(item.liked){
                                return (
                                    <LikedCard 
                                    key={index}
                                    id={item.Course_id}
                                    course={item.Course_name}
                                    Instructor={item.Instructor}
                                    complete = {item.isCompleted}
                                    />
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile