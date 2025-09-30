import { useState } from "react";
import style from "./ExpenseForm.module.css";

const ExpenseForm = ({ setExpenses }) => {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  }
  return (
    <div className="form-input">
      <form onSubmit={handleSubmit}>
        <div className={style["input-group"]}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={expense.title}
            onChange={(e) =>
              setExpense((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
        </div>
        <div className={style["input-group"]}>
          <label>Category</label>
          <select
            name="category"
            id="category"
            value={expense.category}
            onChange={(e) =>
              setExpense((prevState) => ({
                ...prevState,
                category: e.target.value,
              }))
            }
          >
            <option hidden>Select Category</option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
        </div>
        <div className={style["input-group"]}>
          <label>Amount</label>
          <input
            type="text"
            name="amount"
            id="amount"
            value={expense.amount}
            onChange={(e) =>
              setExpense((prevState) => ({
                ...prevState,
                amount: e.target.value,
              }))
            }
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
