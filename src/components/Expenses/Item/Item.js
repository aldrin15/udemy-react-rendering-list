import Date from "../Date/Date"
import Card from "../../UI/Card/Card";

import './Item.css'

const Item = props => {
    return (
        <li>
            <Card className="item">
                <Date date={props.date} />

                <div className="item__description">
                    <h2>{ props.title }</h2>
                    <div className="item__price">${ props.amount }</div>
                </div>
            </Card> 
        </li>
    )
}

export default Item;