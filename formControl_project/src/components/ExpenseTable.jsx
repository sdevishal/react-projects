import useFilter from "../hooks/useFilter";
import style from "./ExpenseTable.module.css";

const ExpenseTable = ({ expenses }) => {
  const [filteredData, selected, setSelected] = useFilter(expenses, "All");

  const categories = [
    "All",
    "Grocery",
    "Clothes",
    "Bills",
    "Education",
    "Medicine",
  ];

  return (
    <div className={style["form-data"]}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan="3">No expenses found</td>
            </tr>
          ) : (
            filteredData.map((exp) => (
              <tr key={exp.id}>
                <td>{exp.title}</td>
                <td>{exp.category}</td>
                <td>{exp.amount}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
