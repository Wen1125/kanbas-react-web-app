import { useParams, Route, Routes, Navigate, useLocation } from "react-router";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import "./index.css"

function Courses({courses}) {
    const {pathname} = useLocation()
    const [root, kanbas, courseName, id, screen] = pathname.split("/")
    const {courseId} = useParams()
    const course = courses.find((course)=> course._id === courseId);
     return (
        <div className="ms-4">
            <h1 className="breadCrumb fw-light">
                <IoReorderThreeOutline className="me-2 fs-2" style={{color:"rgb(221, 24, 24)"}}/>
                <Link to={`/Kanbas/Courses/${courseId}/Home`}>Courses.{course.name}</Link> 
                {"  >"} {screen}
            </h1>
            <hr/>
            <div className="row">
                <div className="col-2 d-none d-md-block" style={{width:"200px"}}>
                    <CourseNavigation/>
                </div>
                <div className="col">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<h1><Home courses={courses}/></h1>} />
                        <Route path="Modules" element={<h1><Modules/></h1>} />
                        <Route path="Assignments" element={<h1><Assignments/></h1>} />
                        <Route path="Assignments/:assignmentId" element={<h1><AssignmentEditor/></h1>}/>
                        <Route path="Grades" element={<h1><Grades/></h1>} />
                    </Routes>
                </div>
            </div>
        </div>
        
    );
}

export default Courses;