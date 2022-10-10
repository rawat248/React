import React from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props)=> {
    return (
        <Card className="expenses">
            {
                props.items.map(
                    expense => (
                        <ExpenseItem
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}/>
                    )
                        
                    
                )
            }
             {/* <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}></ExpenseItem>
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}></ExpenseItem>
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}></ExpenseItem>  */}
        </Card>
    );
}
export default Expenses;