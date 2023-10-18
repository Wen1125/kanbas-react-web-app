import Assignment3 from "./a3/index";
import Assignment4 from "./a4";
import Nav from "../Nav";
import { Route, Routes } from "react-router";

function Labs() {
 return (
   <div>
        <Nav/>
        <Routes>
          <Route path="/" element={<Assignment3/> }></Route>
          <Route path="a3" element={<Assignment3/> }></Route>
          <Route path="a4" element={<Assignment4/> }></Route>
        </Routes>
   </div>
 );
}
export default Labs;