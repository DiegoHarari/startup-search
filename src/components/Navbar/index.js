import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Navbar(props) {
  const { canSearch, handleChange } = props;

  return (
    <nav>
      {canSearch && (
        <div>
          <span>Search</span>
          <input
            className='search'
            onChange={(e) => handleChange(e.target.value)}
            type='text'
          />
          <Link to='/form'>
            <span className='add-startup'>Add Startup</span>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
