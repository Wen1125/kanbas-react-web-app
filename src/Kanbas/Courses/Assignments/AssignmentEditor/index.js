import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import AssignmentEditorBar from "./AssignmentEditBar";
import { addAssignment, selectAssignment, updateAssignment, resetAssignment } from "../assignmentsReducer";

function AssignmentEditor() {
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const dispatch = useDispatch();
  const [text, setText] = useState("New Assignment Description")
  return (
    <div>
      <AssignmentEditorBar/>
      <hr/>
      <div className="me-2">
        <h3>Assignment Name</h3>
        <input value={assignment.title} 
          onChange={(e) => dispatch(selectAssignment({...assignment, title: e.target.value}))} 
          className="form-control mb-3 me-1" />
        <textarea value={text} 
          onChange={(e) => setText(e.target.value)}
          className="form-control mb-3">
        </textarea>
        <div className="row mb-3">
          <div className="col-3">
              <h3 className="text-end mb-4"><label className="form-label me-4">Assign</label></h3>
          </div>
          <div className="col">
              <div className="border border-secondary-subtle p-3 mb-0 w-50">
                  <h6><label className="form-label" for="assignTo"> Assign To</label></h6>
                  <input defaultValue={""} type="text" className="form-control" id="assignTo" placeholder="Everyone"/>
                  <h6><label class="form-label mt-3" for="due">Due</label></h6>  
                  <input defaultValue={"Oct 01,2023,11:59 PM"} type="date" className="form-control" id="due"/>
                  <div className="row">
                      <div className="col-6">
                          <h6><label className="form-label mt-3" for="avalable">Available from</label></h6>  
                          <input defaultValue={""} type="date" className="form-control" id="avalable" name="Oct 01,2023,11:59 PM"/>
                      </div>
                      <div className="col-6">
                          <h6><label className="form-label mt-3" for="until">Until</label></h6>  
                          <input defaultValue={""} type="date" className="form-control" id="until" name="Oct 01,2023,11:59 PM"/>
                      </div>
                  </div>
              </div>
          </div>
      </div>

        <div className="d-flex flex-nowrap float-end">
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger me-1" onClick={() => dispatch(resetAssignment())}>
            Cancel
          </Link>
          <button onClick={()=>{if(assignment._id === undefined) 
            {dispatch(addAssignment({...assignment, course: courseId}));} 
            else {dispatch(updateAssignment(assignment))};
            handleSave()}} className="btn btn-success me-2">
            Save
          </button>   
        </div>
        <br/>
      </div>
      <hr/>
    </div>
  );
}

export default AssignmentEditor;