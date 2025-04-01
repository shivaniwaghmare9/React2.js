

// import College from "./College";
// import Cybrom from "./Cybrom";
// import Student from "./Student";

//import { BrowserRouter, Route, Routes } from "react-router-dom";


///=========================================variable=======================================================
// const name="RNTU";
// const seat=40;
// const fees=46000;


//=========================================array of object=============================================
// const Clg={
//   name:"RNTU",
//   seat:49,
//   fees:48000
// }

//============================================Array.map(variable)===========================
// const Student=["shiv","shiva","vani","shivani"];
// const ans=Student.map((key)=>{
//   return(
//     <>
//     {/* <h1>{key}</h1> */}
//     {/* <option>{key}</option>   */}
//     <li>{key}</li>
//     </>
//   )
// })
//=============================================Array of object===========================================
// const Student=[
//   {
//     name:"shivani",
//     rollno:123,
//     city:"bhopal",
//     fees:45000
//   },
//   {
//     name:"shiv",
//     rollno:124,
//     city:"satna",
//     fees:45500
//   },
//   {
//     name:"shiva",
//     rollno:125,
//     city:"riva",
//     fees:45600
//   },
//   {
//     name:"vani",
//     rollno:126,
//     city:"pune",
//     fees:45800
//   }
// ]

// const ans=Student.map((key)=>{
//   return(
//     <>
//     <tr>
//       <td>{key.name}</td>
//       <td>{key.rollno}</td>
//       <td>{key.city}</td>
//       <td>{key.fees}</td>
//     </tr>
//     </>
//   )
// })

// import Data from "./EmpData";
// import Design from "./Empdesign";

// const ans=Data.map((key)=> <Design 
//   nm={key.name} 
//   emn={key.empolyno} 
//   desig={key.designation} 
//   sal={key.salary}/>

// )


// const FRS=()=>{
 // return(
   // <>
   // <h1 align="center">welcome to react class!! this is my second class!!!</h1>
   // {/* <Student nm="shivani" city="Indore" sub="Java"/>
   
   //  <College nm={name} st={seat} fs={fees}/> 

   // <Cybrom nm={Clg.name} st={Clg.seat} fs={Clg.fees}/> */}
   // {/* {ans}      */}

   // {/* <select>{ans}</select> */}
   // {/* <ul>{ans}</ul> */}

   // {/* <hr />
    // <table border="1" width="400px">
    //   <tr>
    //   <th>Name</th>
    //   <th>Rollno</th>
    //   <th>City</th>
    //   <th>Fees</th>
    //   </tr>
    //   {ans}
    // </table>
    // */}
//     <hr />
//     <table border="1" width="400">
//       <tr>
//         <th>Name</th>
//         <th>Employe</th>
//         <th>Desgination</th>
//         <th>Salary</th>
//       </tr>
//       {ans}
//     </table>
    
//     </> 

//   )
// }

//export default FRS;

import {BrowserRouter,Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
const App=()=>{
  return(
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
               <Route path="home" element={<Home/>}/>
               <Route path="about" element={<About/>}/>
               <Route path="contact" element={<Contact/>}/>


            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
