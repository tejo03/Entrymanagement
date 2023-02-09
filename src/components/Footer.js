// import React from 'react';
import NIT_Andhra_Pradesh from '../images/NIT_Andhra_Pradesh.png'
// const Footer=() =>{
  
    

//     return (
       
//         <div >
//             <div>
//                 <div style={{display:"inline",float:"left"}}>
//                     <img src={NIT_Andhra_Pradesh}></img>
//                 </div>
//                 <div style={{display:"inline",float:"left", textAlign:"center"}}>
//                     <h1>National Institute of Technology</h1>
//                     <h2>Andhra Pradesh</h2>
//                 </div>
//             </div>
               
        
                

//         </div>
        

        
//     );
// }
// export default Footer;
import React from "react";
import "./App.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <img style={{display:"flex",alignContent:"center",paddingLeft:"80px"}} src={NIT_Andhra_Pradesh} height='100px'></img>
            <h1 className="list-unstyled">
              <li>National Institute of Technology</li>
              <li >ANDHRA PRADESH</li>
            </h1>
          </div>
          
          {/* Column3 */}
          <div className="col" style={{paddingLeft:"150px"}}>
            <h4>CONTACT US</h4>
            <ui className="list-unstyled" >
              <li>E-mail:nxxxxxx.nitandhra.ac.in</li>
              <li>Ph.no: 9XXXXXXXXX</li>
              <li>Pincode - 534101</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
             ESTABLISHED IN THE YEAR 2015
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;