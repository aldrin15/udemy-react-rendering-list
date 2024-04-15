import React, { useState } from 'react'

import Card from '../UI/Card/Card';
import Filter from './Filter/Filter';
import './Expenses.css'
import List from './List/List';

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <Filter 
                    selected={ filteredYear }
                    onChangeFilter={ filterChangeHandler } />

                <List items={ filteredExpenses } />
            </Card>
        </div>
    )
}

export default Expenses;