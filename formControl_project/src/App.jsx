import style from "./App.module.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  return (
    <div className={style["container"]}>
      <h1 className="heading">Expense Tracker</h1>
      <div className={style["form-group"]}>
        <ExpenseForm setExpenses={setExpenses}  />
        <ExpenseTable expenses={expenses} />
      </div>
    </div>
  );
};

export default App;
