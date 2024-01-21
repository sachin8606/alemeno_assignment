const initialState = {
    courses: [
        {
            "Course_name": "Introduction to Programming",
            "Course_id": 1,
            "Instructor": "Dr. Alice Johnson",
            "Description": "Learn the basics of programming using a popular programming language.",
            "Enrollment_status": "Open",
            "Duration": "30 hours",
            "Schedule": "Monday and Wednesday, 6:00 PM - 8:00 PM",
            "Location": "Room 101",
            "Pre-requisites": "Basic computer literacy",
            "Syllabus": [
                "Week 1: Introduction to Programming Concepts",
                "Week 2: Variables and Control Structures",
                "Week 3: Functions and Algorithms",
                "Week 4: Data Structures",
                "Week 5: Introduction to OOP",
                "Week 6: Final Project - Simple Application Development"
            ],
            "isEnrolled": false,
            "isCompleted": false,
            "liked": false
        },
        {
            "Course_name": "Data Science Fundamentals",
            "Course_id": 2,
            "Instructor": "Prof. Robert Smith",
            "Description": "Explore the foundations of data science, including data analysis and visualization.",
            "Enrollment_status": "Closed",
            "Duration": "40 hours",
            "Schedule": "Tuesday and Thursday, 7:00 PM - 9:00 PM",
            "Location": "Lab A",
            "Pre-requisites": "Basic statistics knowledge",
            "Syllabus": [
                "Week 1: Introduction to Data Science",
                "Week 2: Data Cleaning and Preprocessing",
                "Week 3: Exploratory Data Analysis",
                "Week 4: Statistical Modeling",
                "Week 5: Machine Learning Basics",
                "Week 6: Final Project - Data Analysis and Visualization"
            ],
            "isEnrolled": false,
            "isCompleted": false,
            "liked": false
        },
        {
            "Course_name": "Web Development Bootcamp",
            "Course_id": 3,
            "Instructor": "Emily Rodriguez",
            "Description": "Become a full-stack web developer through hands-on projects and coding exercises.",
            "Enrollment_status": "In Progress",
            "Duration": "50 hours",
            "Schedule": "Saturday and Sunday, 10:00 AM - 2:00 PM",
            "Location": "Online",
            "Pre-requisites": "None",
            "Syllabus": [
                "Week 1: Introduction to Machine Learning",
                "Week 2: Supervised Learning - Regression",
                "Week 3: Supervised Learning - Classification",
                "Week 4: Unsupervised Learning - Clustering",
                "Week 5: Dimensionality Reduction",
                "Week 6: Final Project - Machine Learning Application"
            ],
            "isEnrolled": false,
            "isCompleted": false,
            "liked": false
        },
        {
            "Course_name": "Artificial Intelligence Essentials",
            "Course_id": 4,
            "Instructor": "Dr. Michael Chang",
            "Description": "Explore the fundamental concepts and applications of artificial intelligence.",
            "Enrollment_status": "Open",
            "Duration": "45 hours",
            "Schedule": "Monday and Wednesday, 5:30 PM - 7:30 PM",
            "Location": "Room 202",
            "Pre-requisites": "Basic programming skills",
            "Syllabus": [
                "Week 1: Introduction to AI and machine learning",
                "Week 2: Natural Language Processing",
                "Week 3: Computer Vision",
                "Week 4: Neural Networks and Deep Learning",
                "Week 5: AI Ethics and Responsible AI",
                "Week 6: Final Project - AI Application Development"
            ],
            "isEnrolled": false,
            "isCompleted": false,
            "liked": false
        },
        {
            "Course_name": "Graphic Design Fundamentals",
            "Course_id": 5,
            "Instructor": "Sarah Thompson",
            "Description": "Develop your graphic design skills through hands-on projects and creative exercises.",
            "Enrollment_status": "In Progress",
            "Duration": "35 hours",
            "Schedule": "Friday, 6:00 PM - 9:00 PM",
            "Location": "Design Studio",
            "Pre-requisites": "None",
            "Syllabus": [
                "Week 1: Introduction to Graphic Design Principles",
                "Week 2: Typography and Color Theory",
                "Week 3: Layout and Composition",
                "Week 4: Image Editing with Adobe Photoshop",
                "Week 5: Vector Graphics with Adobe Illustrator",
                "Week 6: Final Project - Design Portfolio"
            ],
            "isEnrolled": false,
            "isCompleted": false,
            "liked": true
        },
        {
            "Course_name": "Cybersecurity Basics",
            "Course_id": 6,
            "Instructor": "Prof. Kevin Lee",
            "Description": "Learn the fundamentals of cybersecurity and how to protect digital assets.",
            "Enrollment_status": "Closed",
            "Duration": "30 hours",
            "Schedule": "Tuesday and Thursday, 6:30 PM - 8:30 PM",
            "Location": "Computer Lab B",
            "Pre-requisites": "Basic IT knowledge",
            "Syllabus": [
                "Week 1: Introduction to Cybersecurity",
                "Week 2: Network Security",
                "Week 3: Threats and Vulnerabilities",
                "Week 4: Encryption and Cryptography",
                "Week 5: Security Policies and Compliance",
                "Week 6: Final Project - Cybersecurity Assessment"
            ],
            "isEnrolled": false,
            "isCompleted": false,
            "liked": false
        },
        {
            "Course_name": "Business Analytics for Decision Making",
            "Course_id": 7,
            "Instructor": "Dr. Melissa Turner",
            "Description": "Gain insights into using data for effective business decision-making.",
            "Enrollment_status": "Open",
            "Duration": "40 hours",
            "Schedule": "Saturday, 9:00 AM - 1:00 PM",
            "Location": "Conference Room C",
            "Pre-requisites": "Basic knowledge of business concepts",
            "Syllabus": [
                "Week 1: Introduction to Business Analytics",
                "Week 2: Descriptive Analytics",
                "Week 3: Predictive Analytics",
                "Week 4: Prescriptive Analytics",
                "Week 5: Data Visualization",
                "Week 6: Final Project - Business Analytics Case Study"
            ],
            "isEnrolled": false,
            "isCompleted": false,
            "liked": false
        },
        {
            "Course_name": "Mobile App Development Workshop",
            "Course_id": 8,
            "Instructor": "James Martinez",
            "Description": "Build and deploy your own mobile applications for iOS and Android platforms.",
            "Enrollment_status": "Open",
            "Duration": "25 hours",
            "Schedule": "Sunday, 2:00 PM - 5:00 PM",
            "Location": "Mobile Lab",
            "Pre-requisites": "Basic programming skills",
            "Syllabus": [
                "Week 1: Setting up a Development Environment",
                "Week 2: User Interface Design",
                "Week 3: Mobile App Programming Basics",
                "Week 4: Database Integration",
                "Week 5: Testing and Debugging",
                "Week 6: Final Project - Mobile App Development"
            ],
            "isEnrolled": false,
            "isCompleted": false,
            "liked": false
        },
        {
            "Course_name": "Advanced JavaScript Masterclass",
            "Course_id": 9,
            "Instructor": "Dr. Jonathan Carter",
            "Description": "Deepen your understanding of JavaScript through advanced coding challenges and projects.",
            "Enrollment_status": "In Progress",
            "Duration": "35 hours",
            "Schedule": "Wednesday and Friday, 7:00 PM - 9:00 PM",
            "Location": "Coding Arena",
            "Pre-requisites": "Proficiency in basic JavaScript",
            "Syllabus": [
                "Week 1: Advanced Concepts in JavaScript",
                "Week 2: Asynchronous Programming",
                "Week 3: Frontend Frameworks (React, Angular, Vue)",
                "Week 4: Backend Development with Node.js",
                "Week 5: Testing and Optimization",
                "Week 6: Final Project - Advanced JavaScript Application"
            ],
            "isEnrolled": false,
            "isCompleted": false,
            "liked": false
        },
    ],
    userDetail: {
        "name": "Sachin Rangar",
    }
}

const rootreducer = (state = initialState, action) => {
    let crs = state.courses
    switch (action.type) {
        case 'MARK_AS_COMPLETE':
            crs = state.courses
            crs.map((item) => {
                if (item.Course_id === action.payload.id) {
                    item.isCompleted = true
                }
            })
            return { ...state, courses: [...crs] }
        case 'ENROLL':
            crs = state.courses
            crs.map((item) => {
                if (item.Course_id == action.payload.id) {
                    console.log(item)
                    item.isEnrolled = true
                }
            })
            return { ...state, courses: [...crs] }
        case 'LIKE_COURSE':
            crs = state.courses
            crs.map((item) => {
                if (item.Course_id == action.payload.id) {
                    console.log(item)
                    item.liked = true
                }
            })
            return { ...state, courses: [...crs] }
        case 'REMOVE_LIKE_COURSE':
            crs = state.courses
            crs.map((item) => {
                if (item.Course_id == action.payload.id) {
                    console.log(item)
                    item.liked = false
                }
            })
            return { ...state, courses: [...crs] }
        default:
            return state

    }
}
export default rootreducer