import { useParams } from "react-router-dom";
import db from "../../Database";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group mt-2 me-3">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item" style={{borderRadius:"0px"}}>
             <h3>{module.name}</h3>
             <p className="fs-5">{module.description}</p>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;