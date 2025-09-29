import style from "./ExpenseTable.module.css";

const ExpenseTable = ({ expenses }) => {
  if (expenses.length > 0) {
    console.log(expenses);
  }

  return (
    <div className={style["form-data"]}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Milk</td>
            <td>Grocery</td>
            <td>₹40</td>
          </tr>
          {expenses.map((expense, id) => (
            <tr key={id}>
              <td>{expense.Title}</td>
              <td>{expense.Category}</td>
              <td>{expense.Amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
