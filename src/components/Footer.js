import React from 'react';
import  './Footer.css';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h2>COMPANY</h2>
            <h1 className="list-unstyled">
              <li> 122002</li>
              <li> Gurgaon, Haryana </li>
              <li>3rd Floor, Tower B, Unitech Cyber Park, Sector 39</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>PAY AFTER PLACEMENT MBA</h4>
            <ui className="list-unstyled">
              <li>All PROGRAMS</li>
              <li>GLOBLE EMMERSION PROGRAMS</li>
              <li>PLACEMENTS</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>SPECIALISATOIN</h4>
            <ui className="list-unstyled">
              <li>MARKETING</li>
              <li>FINANCE</li>
              <li>OPERATION</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;