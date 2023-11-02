import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  
  return (
    <ul className="list-group mt-2 me-3">
      <li className="list-group-item"> 
      <div className="row">
        <div className="col-7">
          <input value={module.name}
            onChange={(e) => dispatch(setModule({...module, name: e.target.value}))}
          className="form-control mt-1 mb-1"/>
          <textarea value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
          } className="form-control mb-1"/>
        </div>
        <div className="col">
          <button onClick={() => dispatch(updateModule(module))} className="btn  btn-primary me-2 float-end">
            Update
          </button> 
          <button onClick={() => dispatch(addModule({...module, course: courseId}))} className="btn  btn-success float-end me-2">
            Add
          </button>
        </div>
      </div>
      </li>
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item" style={{borderRadius:"0px"}}>
             <button onClick={() => dispatch(setModule(module))} className="btn  btn-success float-end me-2">
                Edit
              </button>
             <button onClick={() => dispatch(deleteModule(module._id))} className="btn  btn-danger float-end me-2">
                Delete
              </button>
             <h3>{module.name}</h3>
             <p className="fs-5">{module.description}</p>
             <p>{module._id}</p>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;