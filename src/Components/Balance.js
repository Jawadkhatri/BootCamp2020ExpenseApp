import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import '../App.css';

function Balance() {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  
  return (

        <div className="Bal-container">
            <div>
                <h4>
                    Your Balance
                </h4>
                <h1>
                PKR {total} 
                </h1>
            </div>
            
        </div>
  
        );
}

export default Balance;