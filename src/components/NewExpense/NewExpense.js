import Form from './Form/Form'

import './NewExpense.css'

const NewExpense = props => {
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random()
        }

        props.onAddExpense(expenseData);
    }

    return <div className="new-expense">
        <Form onSaveExpenseData={ saveExpenseDataHandler }></Form>
    </div>
}

export default NewExpense;