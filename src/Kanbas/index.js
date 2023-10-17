import KanbasNavigation from "./KanbasNavigation";
import { Route, Routes, Navigate } from "react-router";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";

function Kanbas() {
    return (
      <div className="row">
        <div className="col-1 d-none d-md-block" style={{width: "100px"}}>
          <KanbasNavigation/>
        </div>
        <div className="col">
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard"/>}/>
                <Route path="Account" element={<Account/>}/>
                <Route path="Dashboard" element={<Dashboard/>}/>
                <Route path="Courses/:courseId/*" element={<Courses/>}/>
                <Route path="Courses" element={<Dashboard/>}/>
            </Routes>
        </div>
      </div>
    );
}
export default Kanbas;