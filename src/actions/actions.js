export function markcompleted(payload){
    return{
        type:'MARK_AS_COMPLETE',
        payload:payload
    }
}

export function fetchCourseDetail(payload){
    return{
        type:'FETCH_COURSE_DETAIL',
        payload:payload
    }
}

export function enroll(payload){
    return{
        type:'ENROLL',
        payload:payload
    }
}

export function like(payload){
    return{
        type:'LIKE_COURSE',
        payload:payload
    }
}

export function removelike(payload){
    return{
        type:'REMOVE_LIKE_COURSE',
        payload:payload
    }
}