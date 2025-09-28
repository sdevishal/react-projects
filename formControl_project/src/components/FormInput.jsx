import style from "./FormInput.module.css";

const FormInput = () => {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className="form-input">
      <form action="#">
        <div className={style["input-group"]}>
          <label>Title</label>
          <input type="text" name="" id="" />
        </div>
        <div className={style["input-group"]}>
          <label>Category</label>
          <select name="" id="">
            <option value="Grocery">Grocery</option>
            <option hidden>Select Category</option>
            <option value="Grocery">Grocery</option>
            <option value="Bills">Bills</option>
            <option value="Clothes">Clothes</option>
            <option value="Personal_Exp">Personal Expense</option>
          </select>
        </div>
        <div className={style["input-group"]}>
          <label>Amount</label>
          <input type="text" name="" id="" />
        </div>
        <button onClick={(e) => handleClick(e)}>Add</button>
      </form>
    </div>
  );
};

export default FormInput;
