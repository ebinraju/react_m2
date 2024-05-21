import React from "react";
import {Link} from "react-router-dom";

const ApplicationError = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1> 500</h1>
        </div>
        
        <h2>Oops! Something Went Wrong</h2>
        <p>
          Brace yourself till we get the error fixed. You may also refresh the page or try again.
        </p>
        <Link to="/login">Go To Homepage</Link>
      </div>
    </div>
  );
};

export default ApplicationError;