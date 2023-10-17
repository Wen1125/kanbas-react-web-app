import { AiOutlinePlus } from "react-icons/ai";

function AssignmentBar() {
    return(
        <>
        <input className="form-control w-25" style={{display: "inline"}} type="text" placeholder="Search for Assignments"/>
        <div className="d-flex flex-nowrap float-end">
            <button className="btn btn-secondary me-1"><AiOutlinePlus className="me-1"/>Group</button>
            <button className="btn btn-danger me-1"><AiOutlinePlus className="me-1"/>Assignment</button>
            {/* <div class="dropdown">
                <button className="btn btn-cos-sandwhich " style="width: 30px;" type="button" data-bs-toggle="dropdown" aria-expanded="false">     
                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Edit Assignment Dates</a></li>
                </ul>
            </div> */}
        </div>
        </>
    );
}

export default AssignmentBar;