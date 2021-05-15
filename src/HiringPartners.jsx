import React from 'react';
import Tdata from './Tdata';
import Companycard from "./Companycard";

const HiringPartners = () => {
    return (
        <>
           <div className="my-5">
               <h1 className="text-center">Our Recruters</h1>
           <div className="container-fluid mb-5">
             <div className="row">
                 <div className="col-10 mx-auto ">
                 <div className="row gy-4">
                     {Tdata.map((val, ind) =>{
                         return <Companycard key={ind} imgsrc={val.imgsrc} />
                     })}
                     </div>
                 </div>
             </div>
               </div>    
          </div> 
        </>
    );
};

export default HiringPartners;
