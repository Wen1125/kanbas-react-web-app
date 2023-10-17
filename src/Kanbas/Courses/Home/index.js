import ModuleList from "../Modules/ModuleList";
import ModuleBar from "../Modules/ModuleBar";
import Status from "./Status";

function Home() {
  return (
    <div className="row ms-5">
      <div className="col-7">
        <ModuleBar/>
        <br/>
        <ModuleList />
      </div>

      <div className="col-3 d-none d-lg-block ms-4 me-5">
        <Status/>
      </div>
    </div>
  );
}
export default Home;