import { Link, useParams } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { LuBookKey } from "react-icons/lu";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { 
    selectAssignments,
    deleteAssignment,
    selectAssignment, 
    resetAssignment,
    updateAssignment,
    }
from "./assignmentsReducer";   
import { useEffect } from "react";
import * as client from "./client.js";

function Assignments() {
  const { courseId } = useParams();
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  useEffect(() => {
    client.findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(selectAssignments(assignments))
    );
  }, [courseId]);

  const handleDeleteAssignment = (assignmentId) => {
    client.delteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };
  // const courseAssignments = assignments.filter(
  //   (assignment) => assignment.course === courseId);
  const handleDeleteClick = (assignment) => {
    const confirmDelete = window.confirm('Are you sure you want to remove the assignment?');
    if (confirmDelete) {
      handleDeleteAssignment(assignment._id);
    } else {dispatch(resetAssignment)}
  };
  return (
    <div>
      <input className="form-control w-25" style={{display: "inline"}} type="text" placeholder="Search for Assignments"/>
        <div className="d-flex flex-nowrap float-end">
            <button className="btn btn-secondary me-1"><AiOutlinePlus className="me-1"/>Group</button>
            <button  className="btn btn-danger me-1">
              <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="clearLink">
              <AiOutlinePlus className="me-1"/>
              Assignment</Link>
            </button>
        </div>
      <hr/>
      <h2>Assignments for course {courseId}</h2>
      <div className="list-group me-2">
        {assignments.map((assignment) => (
          <div className="list-group-item">
            <Link className="clearLink2"
              key={assignment._id}
              onClick={()=> {
                dispatch(selectAssignment(assignment))}} 
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              >
              <PiDotsSixVerticalBold className="me-1"/>
              <LuBookKey className="me-5" style={{color:"rgb(55, 194, 111)"}}/>
              {assignment.title}
            </Link>
            <div className="d-inline-block float-end">
              <button onClick={(event)=> {
              event.preventDefault();
              handleDeleteClick(assignment)}} 
              className="btn  btn-secondary">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Assignments;