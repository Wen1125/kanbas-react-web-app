import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import AssignmentBar from "./AssignmentBar";
import { LuBookKey } from "react-icons/lu";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <AssignmentBar/>
      <hr/>
      <h2>Assignments for course {courseId}</h2>
      <div className="list-group me-2">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            <PiDotsSixVerticalBold className="me-1"/>
            <LuBookKey className="me-5" style={{color:"rgb(55, 194, 111)"}}/>
            {assignment.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;