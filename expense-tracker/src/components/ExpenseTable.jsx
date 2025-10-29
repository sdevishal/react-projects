import { useState, useEffect, useRef, useMemo } from "react";
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
  const [sortPopup, setSortPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [sortOrder, setSortOrder] = useState(null);
  const sortButtonRef = useRef(null);
  const popupRef = useRef(null);
  const categories = [
    "All",
    "Grocery",
    "Clothes",
    "Bills",
    "Education",
    "Medicine",
  ];

  const displayData = useMemo(() => {
    const data = [...filteredData];
    if (sortOrder === "asc") {
      data.sort((a, b) => a.amount - b.amount);
    } else if (sortOrder === "desc") {
      data.sort((a, b) => b.amount - a.amount);
    } else {
      data.sort((a, b) => a.originalIndex - b.originalIndex);
    }

    return data;
  }, [filteredData, sortOrder]);

  const total = displayData.reduce(
    (acc, elem) => acc + Number(elem.amount),
    0
  );

  const handleRightClick = (e, rowId) => {
    e.preventDefault();
    setContextMenu({
      show: true,
      position: { x: e.pageX, y: e.pageY },
      rowId,
    });
    setEditingRowId(rowId);
  };

  const openSortPopup = (e) => {
    e.stopPropagation();
    const buttonRect = sortButtonRef.current.getBoundingClientRect();
    setPopupPosition({
      x: buttonRect.left - 20,
      y: buttonRect.bottom + 10,
    });
    setSortPopup(true);
  };

  const applySort = (order) => {
    console.log(order)
    setSortOrder(order ?? null);
    setSortPopup(false); // remove popup after sorting
  };

  // Close context menu on click outside
  useEffect(() => {
    function removeContextMenu() {
      setContextMenu({});
    }
    if (contextMenu.show) {
      const timer = setTimeout(() => {
        document.addEventListener("click", removeContextMenu);
      }, 0);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("click", removeContextMenu);
      };
    }
  }, [contextMenu.show]);

  // Close sort popup on click outside
  useEffect(() => {
    function handleClickOutside() {
      setSortPopup(false);
    }
    if (sortPopup) {
      const timer = setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
      }, 0);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [sortPopup]);

  return (
    <>
      {sortPopup && (
        <div
          className={style["sort-popup"]}
          ref={popupRef}
          style={{
            top: popupPosition.y,
            left: popupPosition.x,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style["sort-asc"]} onClick={() => applySort("asc")}>
            <i className="fa-solid fa-arrow-down-wide-short"></i>
            <span>Sort A → Z</span>
          </div>
          <div className={style["sort-desc"]} onClick={() => applySort("desc")}>
            <i className="fa-solid fa-arrow-up-wide-short"></i>
            <span>Sort Z → A</span>
          </div>
          <div onClick={() => applySort()}>Reset</div>
        </div>
      )}
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
              <th>
                <div className={style["amount"]}>
                  <span>Amount</span>
                  <i
                    className="fa-solid fa-square-caret-down"
                    onClick={openSortPopup}
                    ref={sortButtonRef}
                  ></i>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {displayData.length === 0 ? (
              <tr>
                <td colSpan="3">No expenses found</td>
              </tr>
            ) : (
              <>
                {displayData.map(({ id, title, category, amount }) => (
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
