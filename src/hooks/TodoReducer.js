/**
 * Why we need useReducer 
 * 1-your state logic is more complicate and multiple values in state ,
 * 2-mostly for value which are primative use useState but if your state value is non-primative which can be array/object so then
 * using useReducer will help.
 * 3-As you can see in above ,code is more clear when actions are defined , 
 * 4-we dont need to pass the function to child component for changing parent , as you can think dispatch is also function 
 * but it will not get render every time parent gets render but it could be solved useCallback also but its new way of handling complex state of component
 * 
 * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass `dispatch` down instead of callbacks.
 */

import React ,{useReducer, useState} from 'react';
const MarkCompleted="MarkCompleted";
function getMeNewState(preState,itemToDel){
    return preState.filter((item)=>item.taskName!==itemToDel)
}
 function Reducer(preState,Action){
      
    switch(Action.type) {
        case MarkCompleted:{
          // code block
          return getMeNewState(preState,Action.payload.itemVal);
        }
        default:
          // code block
      }
}
const initalValue=[{taskName:"DSA",isCompleted:false},{taskName:"Operating System",isCompleted:false}];
export function TodoList(){ 
  //  const [task,setTask]=useState([{taskName:"DSA",isCompleted:false},{taskName:"Operating System",isCompleted:false}]); 
   const [state,dispatch]=useReducer(Reducer,initalValue);
    function onClickCompleted(taskName){

    //    console.log("taskName",taskName);
    //     const updatedState=task.filter((data)=>data.taskName!==taskName);
    //     setTask(updatedState);

    }
    
    return(

       <div>  
        <h1>Tasks</h1>    
        {state.map((Tempdata)=>{
        return <Todo data={Tempdata} dispatch={dispatch}></Todo>
       })}
       </div>
    
    )

}



const Todo=({data,dispatch})=>{

console.log("Data  in todo , which is data", data);



return(
    <div>
   <span>{data.taskName}</span>
   <div><button onClick={()=>{
       
      //onClickCompleted(data.taskName);
      dispatch({
          type:MarkCompleted,
          payload:{
              itemVal:data.taskName
          }
      })
   }}>Completed</button></div>
   </div>
);
}