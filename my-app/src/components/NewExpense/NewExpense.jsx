import React from "react";
import "./NewExpense.css";
import PropTypes from "prop-types";
import ExpenseForm from "./ExpenseForm";

function NewExpense({ onAddExpense }) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
NewExpense.propTypes = {
  onAddExpense: PropTypes.func.isRequired,
};
export default NewExpense;
