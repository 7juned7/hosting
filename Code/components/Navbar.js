import React, { Component } from 'react';
import './navbar.css';

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div>
 <nav>
        <div className="nav-container">
          <a className="navbar-brand" href="">Sipto</a>
          <div className="dropdowns">
          <div className="dropdown">
        <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Buy Crypto
        </button>
        <ul className="dropdown-menu bg-dark " aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="#">Bank Deposit</a></li>
          <li><a className="dropdown-item" href="#">Credit Card/Debit Card</a></li>
          <li><a className="dropdown-item" href="#">P2P Trading</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <div className="market">
        <a href="">Market</a>
      </div>
        
              <div className="dropdown">
        <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Trade
        </button>
        <ul className="dropdown-menu bg-dark " aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="#">Bank Deposit</a></li>
          <li><a className="dropdown-item" href="#">Credit Card/Debit Card</a></li>
          <li><a className="dropdown-item" href="#">P2P Trading</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <div className="NFT">
        <a href="#">NFT</a>
      </div>
      </div>
     
            
        <div className="account">
          <button type="button" className="outline">Login</button>
          <button type="button" className="outline">Register</button>
          </div>
          
        </div>
        
        
      </nav>
            </div>
        );
    }
}
 
export default Header;