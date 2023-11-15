import ModuleList from "../Modules/ModuleList";
import ModuleBar from "../Modules/ModuleBar";
import Status from "./Status";
// import { useParams } from "react-router";
// import db from "../../Database";

function Home({course}) {
  // const { courseId } = useParams();
  // const flag = db.modules.find((module)=> module.course === courseId);
  // if (flag !== "undefined") 
  return (
    <div className="row ms-5">
      <div className="col-8">
        <ModuleBar/>
        <br/>
        <ModuleList />
      </div>
      <div className="col d-none d-lg-block ms-4 me-5">
        <Status course={course}/>
      </div>
    </div>
  );
}
export default Home;