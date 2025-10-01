import { useState } from "react";
import { Input, Select } from "./CustomFormField";

const ExpenseForm = ({ setExpenses }) => {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validateForm(expense);
    if (Object.keys(validateResult).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  const validateForm = (formData) => {
    const errMsg = {};
    if (!formData.title) {
      errMsg.title = "Title is required";
    }
    if (!formData.category) {
      errMsg.category = "Please Select a Category";
    }
    if (!formData.amount) {
      errMsg.amount = "Amount is required";
    }

    setErrors(errMsg);
    return errMsg;
  };

  return (
    <div className="form-input">
      <form onSubmit={handleSubmit}>
        <Input
          label="Title"
          id="title"
          name="title"
          value={expense.title}
          onChange={handleChange}
          error={errors.title}
        />
        <Select
          label="Category"
          id="category"
          name="category"
          value={expense.category}
          onChange={handleChange}
          error={errors.category}
          options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
          defaultOption="Select a Category"
        />
        <Input
          label="Amount"
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          error={errors.amount}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
