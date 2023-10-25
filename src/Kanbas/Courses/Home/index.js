import ModuleList from "../Modules/ModuleList";
import ModuleBar from "../Modules/ModuleBar";
import Status from "./Status";

function Home({courses}) {
  return (
    <div className="row ms-5">
      <div className="col-8">
        <ModuleBar/>
        <br/>
        <ModuleList />
      </div>
      <div className="col d-none d-lg-block ms-4 me-5">
        <Status courses={courses}/>
      </div>
    </div>
  );
}
export default Home;