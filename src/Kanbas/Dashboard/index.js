import { React } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Dashboard({course, courses, setCourse,
addNewCourse, deleteCourse, updateCourse}) {
  return (
    <div className="col ms-4">
      <h1>Dashboard</h1>
      <hr/>
      <h2>Published Courses ({courses.length})</h2>
      <hr/>
      <h5>Course</h5>
      <input value={course.name} className="form-control mb-1" onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
      <input value={course.number} className="form-control mb-1" onChange={(e) => setCourse({ ...course, number: e.target.value }) }/>
      <input value={course.startDate} className="form-control mb-1" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value }) } />
      <input value={course.endDate} className="form-control mb-1" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }/>
      <button onClick={addNewCourse} className="btn btn-success me-2" >
        Add
      </button>
      <button onClick={updateCourse} className="btn btn-primary">
        Update
      </button>
      <div className="d-flex flex-row flex-wrap mt-4">
        {courses.map((course) => (
          <div className="card w-25 mb-4 ms-4">
            <img src="/images/blue.jpg" className="card-img-top" alt="can't find image..."/>
            <div className="card-body">
              <h5 className="card-title">{course.name}</h5>
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                <button
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }} className="btn btn-success me-1">
                Edit
                </button>
                <button
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }} className="btn btn-danger me-1">
                Delete
                </button>
                {course.name}
              </Link>
              <p className="card-text">from {course.startDate} to: {course.endDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;