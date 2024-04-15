import Item from "../Item/Item";

import './List.css'

const List = props => {
    if(props.items.length === 0) {
        return <h2 className="list__fallback">No Expenses Found.</h2>
    }

    return <ul className="list">
        { props.items.map(expense => (
           (<Item
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />) 
        )) }        
    </ul>
}

export default List;