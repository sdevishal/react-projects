import style from "./ExpenseForm.module.css";

const ExpenseForm = ({ setExpenses }) => {
  function handleSubmit(e) {
    e.preventDefault();
    setExpenses((prevState) => [
      ...prevState,
      { ...getFormData(e), id: crypto.randomUUID() },
    ]);
     setTimeout(() => e.target.reset(), 0);
  }

  function getFormData(e) {
    const formData = new FormData(e.target);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    return data;
  }

  return (
    <div className="form-input">
      <form onSubmit={handleSubmit}>
        <div className={style["input-group"]}>
          <label>Title</label>
          <input type="text" name="Title" id="" />
        </div>
        <div className={style["input-group"]}>
          <label>Category</label>
          <select name="Category" id="category">
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
          <input type="text" name="Amount" id="" />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
