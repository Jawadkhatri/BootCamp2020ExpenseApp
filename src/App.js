import React from 'react';

import './App.css';
import './Components/Header.js';
import Header from './Components/Header.js';
import Balance from './Components/Balance.js';
import IncomeExpense from './Components/IncomeExpense.js';
import AddTransaction from './Components/AddTransaction';
import { TransactionList } from './Components/TransactionList';

import { GlobalProvider } from './Context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <AddTransaction/>
        <TransactionList />
        
        
      </div>
    </GlobalProvider>
  );
}


export default App;
