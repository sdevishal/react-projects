import style from "./ExpenseTable.module.css";

const ExpenseTable = ({ expenses }) => {
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
          {expenses.map((expense, id) => (
            <tr key={id}>
              <td>{expense.title}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
