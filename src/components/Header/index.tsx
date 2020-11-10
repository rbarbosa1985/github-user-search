import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

const Header = () => {
     return (
          <div className="main-header">
               <Link to="/" className="link">
                    <text className="title" >Bootcamp DevSuperior</text>
               </Link>
          </div>
     );
}

export default Header;