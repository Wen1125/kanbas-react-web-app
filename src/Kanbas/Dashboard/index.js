import db from "../Database";
import { Link } from "react-router-dom";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="col ms-4">
      <h1>Dashboard</h1>
      <hr/>
      <h2>Published Courses ({courses.length})</h2>
      <hr/>
      <div className="d-flex flex-row flex-wrap mt-4">
        {courses.map((course) => (
          <div className="card w-25 mb-4 ms-4">
            <img src="/images/blue.jpg" className="card-img-top" alt="can't find image..."/>
            <div className="card-body">
              <h5 className="card-title">{course.name}</h5>
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                {course.name}
              </Link>
              <p className="card-text">Fall 2023 Semester Full Term</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;