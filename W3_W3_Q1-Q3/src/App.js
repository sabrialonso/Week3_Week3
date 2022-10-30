import React from "react";
import HOC from "../HOC";
import Component1 from "./Component/Component1";
import Component2 from "./Component/Component2";
import Hooks from "../Hooks";
import Hooks2 from "../Hooks2";
import Lodash1 from "./Component/Lodash1";

const App = () => {
  
  return (
    <>
    <h2>Question 1</h2>
   <Component1 />
   <Component2 /> 
   <Hooks />
   <Hooks2 />
   {/* <Lodash1/> */}
  </>
  
)
};
export default App;