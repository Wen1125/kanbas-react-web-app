import Assignment3 from "./a3/index";
import Assignment4 from "./a4";
import Nav from "../Nav";
import { Route, Routes } from "react-router";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
 return (
  <Provider store={store}>
   <div>
        <Nav/>
        <Routes>
          <Route path="/" element={<Assignment3/> }></Route>
          <Route path="a3" element={<Assignment3/> }></Route>
          <Route path="a4" element={<Assignment4/> }></Route>
        </Routes>
   </div>
   </Provider>
 );
}
export default Labs;