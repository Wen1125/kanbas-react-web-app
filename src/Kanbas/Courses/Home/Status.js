import { FaBan } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useParams } from "react-router";
import db from "../../Database";
import "./index.css";

function Status() {
    const list = ["Import Existing Content", "Import From Commons", "Choose Home Page", "View Course Stream", "New Announcement", "New Analytics", "View Course Notifications"];
    const { courseId } = useParams();
    const courses = db.courses;
    const course = courses.find(course =>(course._id === courseId))
    return (
        <>
            <h2>Course Status</h2>
            <button className="btn btn-secondary me-1"><FaBan className="me-1"/>Unpublish</button>
            <button className="btn btn-success"><AiOutlineCheckCircle className="me-1" style={{color:"rgba(245, 247, 245, 0.905)"}}/>Publish</button>
            <ul className="list-group mt-3">
                {list.map((option, index)=> (<a href="#" key={index} className="list-group-item list-group-item-secondary mb-1 statusOptionList">{option}</a>))}
            </ul>
            <h2 class="mt-3">Comming Up</h2>
            <a href="#" className="statusEventList">View Calendar</a>
            <ul>
                <li style={{fontSize:"20px"}}><a href="#" className="statusEventList">Lecture {course.name} Sep 7 at 11:45am</a></li>
                {/* <li><a href="#">Lecture CS4550.12631.202410 Sep 11 at<br/>
                11:45am</a></li>
                <li><a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li> */}
            </ul> 
        </>
    );
}

export default Status;