import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

const Navigation = props => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='container-fluid'>
                <div className="nav navbar-nav">
                    <Link className="navbar-brand" href="#">Państwa.js</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className='nav-link' to='/countries'>Countries</Link></li>
                        <li className="nav-item"><Link className='nav-link' to='/continents'>Continents</Link></li>
                        <li className="nav-item"><Link className='nav-link' to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>  
        <div className="container-fluid">
            {props.children}
        </div>
    </div>
);
export default Navigation;