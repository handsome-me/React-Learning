import logo from './logo.svg';
import './App.css';
import React from 'react';
 
function App() {
const [name,setName]=React.useState(true);
console.log("button is cliked , re-rendering the component");
function renderItems(){
  const divs=[];
  let j=name?0:3;
  for( let i=j;i<10;i++){
    divs.push(<div key={j}>{1}</div>)
  }; 
  return divs;
  } 

  return (
    <div style={{display:"flex",color:"green",border:"1px solid red"}}>
          <div style={{border:"1px solid blue",wordBreak:"break-word"}}>
           <span style={{display:"flex"}}>Model:Singniture</span>
           <span style={{display:"flex"}}>Device Id:9090909fdfdfdffdfdf09090..........</span>
           </div>
         <div style={{color:"yellow",border:"1px solid black",wordBreak:"break-word"}}>
           <span>Wifi:Singniture(Connected)</span>
           <span>Bt Enabled Device:Diconnected()</span>  
         </div> 

      </div>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
// <button onClick={()=>{
//   setName(false)
// }}></button>
//       <div>{
//         renderItems()
//         }</div>
//     </div>
  );
}

export default App;
