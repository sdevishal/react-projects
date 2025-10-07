import style from "./App.module.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [isEditingRow, setIsEditingRow] = useState(false);
  const [editingRowId, setEditingRowId] = useState(null);

  return (
    <div className={style["container"]}>
      <h1 className="heading">Expense Tracker</h1>
      <div className={style["form-group"]}>
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          isEditingRow={isEditingRow}
          setIsEditingRow={setIsEditingRow}
          editingRowId={editingRowId}
        />
        <ExpenseTable
          expenses={expenses}
          setExpenses={setExpenses}
          setExpense={setExpense}
          setEditingRowId={setEditingRowId}
          setIsEditingRow={setIsEditingRow}
        />
      </div>
    </div>
  );
};

export default App;
