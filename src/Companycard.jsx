import React from 'react';


const Companycard = (props) => {
    return (
        <>
        <div className="col-md-3 col-10 mx-auto">
            
            <div className="Companycard" style={{ height: '8rem', width:'12rem'}}>
            {/* <div class="w3-display-topleft w3-black w3-padding">company</div> */}
            <img src={props.imgsrc} className="card-img-top" alt="props.imgsrc" style={{ height: '8rem' }} />
            <div className="card-body">
               
            </div>
</div>
</div>
        </>
    );
};

export default Companycard;
