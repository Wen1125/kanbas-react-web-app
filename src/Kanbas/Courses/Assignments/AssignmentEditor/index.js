import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import AssignmentEditorBar from "./AssignmentEditBar";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <AssignmentEditorBar/>
      <hr/>
      <h3>Assignment Name</h3>
      <input value={assignment.title} className="form-control mb-2 me-1" />
      <div className="d-flex flex-nowrap float-end">
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-danger me-1">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-success me-2">
          Save
        </button>
      </div>
      <br/>
      <hr/>
    </div>
  );
}


export default AssignmentEditor;