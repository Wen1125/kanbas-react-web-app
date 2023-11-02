import ModuleList from "./ModuleList";
import ModuleBar from "./ModuleBar";
// import { useParams } from "react-router";
// import db from "../../Database";

function Modules() {
  // const { courseId } = useParams();
  // const flag = db.modules.find((module)=> module.course === courseId);
  
  // if (flag !== "undefined")
   return (
    <div>
      <ModuleBar/>
      <br/>
      <ModuleList />
    </div>
  );
}
export default Modules;