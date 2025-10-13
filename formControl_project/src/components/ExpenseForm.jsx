import { useState } from "react";
import { Input, Select } from "./CustomFormField";

const ExpenseForm = ({
  setExpenses,
  expense,
  setExpense,
  isEditingRow,
  setIsEditingRow,
  editingRowId,
}) => {
  // Stores validation errors for each field
  const [formErrors, setFormErrors] = useState({});

  // Validation rules for each field
  const validationRules = {
    title: {
      required: "Title is required",
      minLength: { value: 3, message: "Title must be at least 3 characters" },
    },
    category: {
      required: "Please select a category",
    },
    amount: {
      required: "Amount is required",
      pattern: { value: /^[0-9]+$/, message: "Amount must be a number" },
    },
  };

  // Update form state when input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Remove previous errors as user types
    setFormErrors({});
  };

  // Validate the form and return any errors
  const getValidationErrors = (data) => {
    const errors = {};

    Object.entries(data).forEach(([fieldName, fieldValue]) => {
      const rules = validationRules[fieldName];

      if (rules.required && !fieldValue) {
        errors[fieldName] = rules.required;
      }
      if (rules.minLength && fieldValue.length < rules.minLength.value) {
        errors[fieldName] = rules.minLength.message;
      }
      if (rules.pattern && !rules.pattern.value.test(fieldValue)) {
        errors[fieldName] = rules.pattern.message;
      }
    });

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = getValidationErrors(expense);
    setFormErrors(validationErrors);

    // Stop if validation failed
    if (Object.keys(validationErrors).length > 0) return;

    // edit formTable row
    if (isEditingRow) {
      setExpenses((prevExp) => {
        return prevExp.map((exp) => {
          if (exp.id === editingRowId) {
            return { ...expense, id: editingRowId };
          }
          return exp;
        });
      });

      // reset form field
      setExpense({
        title: "",
        category: "",
        amount: "",
      });
      // reset to switch to Add btn from save btn
      setIsEditingRow(false);
      return;
    }

    // Add new expense
    setExpenses((prev) => [...prev, { ...expense, id: crypto.randomUUID(), originalIndex: prev.length }]);

    // Reset form after submit
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  return (
    <div className="form-input">
      <form onSubmit={handleSubmit}>
        <Input
          label="Title"
          id="title"
          name="title"
          value={expense.title}
          onChange={handleInputChange}
          error={formErrors.title}
        />
        <Select
          label="Category"
          id="category"
          name="category"
          value={expense.category}
          onChange={handleInputChange}
          error={formErrors.category}
          defaultOption="Select a Category"
          options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        />
        <Input
          label="Amount"
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleInputChange}
          error={formErrors.amount}
        />
        <button type="submit">{isEditingRow ? "Save" : "Add"}</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
