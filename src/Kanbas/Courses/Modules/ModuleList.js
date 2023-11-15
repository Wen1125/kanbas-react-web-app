import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./modulesReducer";
// import { findModulesForCourse, createModule, deleteModule} from "./client";
import * as client from "./client.js";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
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
          <button onClick={handleUpdateModule} className="btn  btn-primary me-2 float-end">
            Update
          </button> 
          <button onClick={handleAddModule} className="btn  btn-success float-end me-2">
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
             <button onClick={() => handleDeleteModule(module._id)} className="btn  btn-danger float-end me-2">
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