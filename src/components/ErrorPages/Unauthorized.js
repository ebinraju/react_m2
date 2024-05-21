import React from "react";
import {Link} from "react-router-dom";

const Unauthorized = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>403</h1>
        </div>
        
        <h2>Access Denied</h2>
        <p>
          Oops! You don`t have permission to access this page.
        </p>
        <Link to="/">Go To Homepage</Link>
      </div>
    </div>
  );
};

export default Unauthorized;