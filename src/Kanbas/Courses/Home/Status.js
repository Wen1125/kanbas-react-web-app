import { FaBan } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useParams } from "react-router";
import "./index.css";

function Status({course}) {
    const list = ["Import Existing Content", "Import From Commons", "Choose Home Page", "View Course Stream", "New Announcement", "New Analytics", "View Course"];
    const { courseId } = useParams();
    // const course = courses.find(course =>(course._id === courseId))
    return (
        <>
            <h2>Course Status</h2>
            <button className="btn btn-secondary me-1"><FaBan className="me-1"/>Unpublish</button>
            <button className="btn btn-success"><AiOutlineCheckCircle className="me-1" style={{color:"rgba(245, 247, 245, 0.905)"}}/>Publish</button>
            <ul className="list-group mt-3">
                {list.map((option, index)=> (<li key={index} className="list-group-item list-group-item-secondary mb-1" style={{borderRadius:"0px"}}><a  href="#" className="statusOptionLink">{option}</a></li>))}
            </ul>
            <h3 class="mt-3">Comming Up</h3>
            <a href="#" className="statusEventLink">View Calendar</a>
            <ul>
                <li style={{fontSize:"25px"}}><a href="#" className="statusEventLink">Lecture  Sep 7 at 11:45am</a></li>
                {/* <li><a href="#">Lecture CS4550.12631.202410 Sep 11 at<br/>
                11:45am</a></li>
                <li><a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li> */}
            </ul> 
            <ul>
                <li style={{fontSize:"25px"}}><a href="#" className="statusEventLink">Lecture  Sep 7 at 11:45am</a></li>
                {/* <li><a href="#">Lecture CS4550.12631.202410 Sep 11 at<br/>
                11:45am</a></li>
                <li><a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li> */}
            </ul> 
            <ul>
                <li style={{fontSize:"25px"}}><a href="#" className="statusEventLink">Lecture  Sep 7 at 11:45am</a></li>
                {/* <li><a href="#">Lecture CS4550.12631.202410 Sep 11 at<br/>
                11:45am</a></li>
                <li><a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li> */}
            </ul> 
        </>
    );
}

export default Status;