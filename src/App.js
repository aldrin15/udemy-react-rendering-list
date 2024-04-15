import React, {useState} from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

import './App.css'

const DUMMY_EXPENSES = [
  { id: 1, title: 'Toilet Paper', amount: 94.12, date: new Date(2023, 8, 12) },
  { id: 2, title: 'New TV', amount: 799.49, date: new Date(2022, 9, 12) },
  { id: 3, title: 'Car Insurance', amount: 294.67, date: new Date(2021, 10, 12) },
  { id: 4, title: 'New Desk (Wooden)', amount: 450, date: new Date(2023, 11, 14) }
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // Old Way and why React being imported in most files
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'Lets get started'),
  //   React.createElement(Expenses, {items: expenses})
  // )

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={ addExpenseHandler } />
      <Expenses items={expenses} />
    </div>
  )
}

export default App;
