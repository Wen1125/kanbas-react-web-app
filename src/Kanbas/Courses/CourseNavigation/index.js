import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css"

function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades", "People", "Quizzes", "Panopto Video", "Discussions", "Annoucements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="list-group wd-course-navigation" style={{ width: 150}}>
      {links.map((link, index) => <Link key={index} to={`/Kanbas/Courses/${courseId}/${link}`} className={`list-group-item ${pathname.includes(link) && "active"} linkStyle`}>
            {link}</Link>
      )}
    </div>
  );
}

export default CourseNavigation;