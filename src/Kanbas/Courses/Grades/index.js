import db from "../../Database";
import { useParams } from "react-router-dom";
import GradeBar from "./GradeBar";
import { useState } from "react";
import "./index.css"

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    const [grades, setGrades] = useState(db.grades)
    const updatGrades = (grade, newGrade) =>
      setGrades(grades.map(g => {if (g === grade){return {...grade, grade: newGrade};}else {return g}}))
    return (
      <div className="textFormat">
        <GradeBar/>
        <div className="table-responsive mt-2">
          <table className="table">
            <thead>
              <th>Student Name</th>
              {assignments.map((assignment) => (<th>{assignment.title}</th>))}
            </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td><input value={grade?.grade || ""} onChange={(e) => updatGrades(grade, e.target.value)}/></td>);
                     })}             
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;