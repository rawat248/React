import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "TV",
    amount: 799.49,
    date: new Date(2022, 10, 6),

  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 699.49,
    date: new Date(2022, 10, 6),

  },
  {
    id: "e3",
    title: "freeze",
    amount: 599.49,
    date: new Date(2022, 10, 6),

  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };
  return (
    <div>
      <h2>Lets get started</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
export default App;
