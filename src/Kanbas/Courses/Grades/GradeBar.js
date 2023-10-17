import { LiaFileImportSolid } from "react-icons/lia";
import { PiGear } from "react-icons/pi";
import "./index.css";

function GradeBar() {
    return (
        <>
        <div className="d-flex float-end">
            <button className="btn btn-secondary me-1"><LiaFileImportSolid className=""/>Import</button>
            {/* <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle me-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-file-import fa-rotate-180"></i>Export
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Unpublish</a></li>
                </ul>
            </div> */}
            <button className="btn btn-secondary"><PiGear/></button>
        </div>
        <br/>
        <div className="row">
            <div className="col-6">
                <label className="form-label fw-semibold" for="studentNames">Student Names</label>
                <input className="form-control" id="studentNames" title="Type the student name"  placeholder="Search Students"/>
                <button className="btn btn-secondary mt-2"><i class="fa fa-filter me-1"></i>Apply Fliters</button>
            </div>
            <div className="col-6">
                <label className="form-label fw-semibold" for="assignmentNames">Assignment Names</label>
                <input className="form-control" id="assignmentNames" placeholder="Search Assignment"/>
            </div>
        </div>
        </>
    );
}

export default GradeBar;