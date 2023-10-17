import { AiOutlineCheckCircle } from "react-icons/ai";
import "./index.css"

function AssignmentEditorBar() {
    return (
        <>
         <input className="form-control w-25" style={{display: "inline"}} type="text" placeholder="Search for Assignments"/>
         <div className="d-flex flex-nowrap float-end align-items-center">
            <AiOutlineCheckCircle className="published"/> 
            <span className="fw-semibold me-4 published">Published</span>
            {/* <div class="dropdown">
                <button class="btn btn-cos-sandwhich " style="width: 30px;" type="button" data-bs-toggle="dropdown" aria-expanded="false">     
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Edit Assignment Dates</a></li>
                </ul>
            </div> */}
        </div>
        </>
    );
}

export default AssignmentEditorBar;