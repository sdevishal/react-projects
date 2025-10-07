import { useState, useEffect } from "react";
import useFilter from "../hooks/useFilter";
import ContextMenu from "./ContextMenu/ContextMenu";
import style from "./ExpenseTable.module.css";

const ExpenseTable = ({
  expenses,
  setExpenses,
  setExpense,
  setEditingRowId,
  setIsEditingRow,
}) => {
  const [filteredData, selected, setSelected] = useFilter(expenses, "All");
  const [contextMenu, setContextMenu] = useState({});
  const total = expenses.reduce((acc, elem) => acc + Number(elem.amount), 0);
  const categories = [
    "All",
    "Grocery",
    "Clothes",
    "Bills",
    "Education",
    "Medicine",
  ];

  const handleRightClick = (e, rowId) => {
    e.preventDefault();
    setContextMenu({
      show: true,
      position: { x: e.pageX, y: e.pageY },
      rowId,
    });
    setEditingRowId(rowId);
  };

  useEffect(() => {
    //remove contextMenu
    function removeContextMenu() {
      setContextMenu({});
    }
    if (contextMenu.show) {
      document.addEventListener("click", removeContextMenu);
    }
    // cleanup function
    return () => {
      document.removeEventListener("click", removeContextMenu);
    };
  }, [contextMenu.show]);

  return (
    <>
      {contextMenu.show && (
        <ContextMenu
          position={contextMenu.position}
          rowId={contextMenu.rowId}
          expenses={expenses}
          setExpenses={setExpenses}
          setExpense={setExpense}
          setContextMenu={setContextMenu}
          setIsEditingRow={setIsEditingRow}
        />
      )}
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
              <>
                {filteredData.map(({ id, title, category, amount }) => (
                  <tr key={id} onContextMenu={(e) => handleRightClick(e, id)}>
                    <td>{title}</td>
                    <td>{category}</td>
                    <td>₹{amount}</td>
                  </tr>
                ))}
                <tr>
                  <th>Total</th>
                  <th></th>
                  <th>₹{total}</th>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExpenseTable;
