import React, { useEffect } from "react";
import { TodoList } from "../src/hooks/TodoReducer";
import { BrowserRouter, Route, Link, Routes ,useNavigate} from "react-router-dom";
export const Router = () => {

  return(

  <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/users" element={<User/>}/>
      </Routes>
   
  </BrowserRouter>)
};

const Home = (props) => {
  console.log("props of home", props);
  const navigate=useNavigate();
  return (
    <>
      {/* <div>Home Page Renderd</div>
      <button onClick={() => {
        navigate("/users")
      }}></button> */}
      <TodoList></TodoList>
    </>
  );
};

const User = (props) => {

  console.log("props of home", props);
  const navigate=useNavigate();
  useEffect(()=>{

    console.log("render only first time")

  },[])
  return (
    <>
      <div>User Page Renderd</div>
      <Link to={"/"}>Click me Link</Link>
      <button onClick={() => {
           
      }}></button>
    </>
  );
};