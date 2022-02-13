import React, { Component } from 'react';
import styles from './main.css';


class Main extends Component {

    render() { 
        return (
            <main>
                
                
           
           <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <a href="https://ethereum.org/en/dao/"> Click to know more about DAO</a>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"/>
      </div>
      
        
      
      <div className="container-fluid">
         
          
          <div className="buy-sell">
             <div className="register">
              <h2>Buy & Sell Crypto in minutes</h2>
              <p>Join the world's largest crypto exchange</p>
              <button type="button" className="outline">Register</button> </div>
              <div className="img">
                  <img src="./bitcoin.png" alt="" />
              </div>
              
              </div>       
     <div className="market-trends">
         <h2>Market trends</h2>
         <div className="coins-name">
            <div className="heading"> <p className='name' >Name</p>
             <p>Last Price</p>
             <p>24h Change</p></div>
             <div className="coins">
                 <div className='bitcoin'>
                    <div className='logo'> <img src="./bitcoin.png" alt="" />
                     <h5>BTC Bitcoin </h5></div>
                     <div className="last-price">
                         $4416.07
                     </div>
                     <div className="hr-change">
                         +1.04%
                     </div>
                 </div>
                 <div className='bitcoin'>
                    <div className='logo'> <img src="./bitcoin.png" alt="" />
                     <h5>BTC Bitcoin </h5></div>
                     <div className="last-price">
                         $4416.07
                     </div>
                     <div className="hr-change">
                         +1.04%
                     </div>
                 </div>
                 <div className='bitcoin'>
                    <div className='logo'> <img src="./bitcoin.png" alt="" />
                     <h5>BTC Bitcoin </h5></div>
                     <div className="last-price">
                         $4416.07
                     </div>
                     <div className="hr-change">
                         +1.04%
                     </div>
                 </div>
                 <div className='bitcoin'>
                    <div className='logo'> <img src="./bitcoin.png" alt="" />
                     <h5>BTC Bitcoin </h5></div>
                     <div className="last-price">
                         $4416.07
                     </div>
                     <div className="hr-change">
                         +1.04%
                     </div>
                 </div>
                 <div className='bitcoin'>
                    <div className='logo'> <img src="./bitcoin.png" alt="" />
                     <h5>BTC Bitcoin </h5></div>
                     <div className="last-price">
                         $4416.07
                     </div>
                     <div className="hr-change">
                         +1.04%
                     </div>
                 </div>
             </div>

         </div>
         <div className="view-more">View More</div>
     </div>
          
      </div>
      
     
            </main>
        );
    }
}
 
export default Main;