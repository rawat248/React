import React from "react";
import PropTypes from "prop-types";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses({ items }) {
  return (
    <Card className="expenses">
      {
        items.map(
          (expense) => (
            <ExpenseItem
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
          ),
        )
      }

    </Card>
  );
}
Expenses.propTypes = {
  items: PropTypes.string.isRequired,
};
export default Expenses;
