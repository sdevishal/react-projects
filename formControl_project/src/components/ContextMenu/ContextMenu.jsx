import style from "./ContextMenu.module.css";

const ContextMenu = ({
  position,
  rowId,
  expenses,
  setExpenses,
  setContextMenu,
  setExpense,
  setIsEditingRow
}) => {
  const onDelete = () => {
    setExpenses((prev) => prev.filter((expense) => expense.id != rowId));
    setContextMenu({});
  };
  const onEdit = () => {
    const foundExp = expenses.find((expense) => expense.id === rowId);
    setExpense({
      title: foundExp.title,
      category: foundExp.category,
      amount: foundExp.amount,
    });
    setIsEditingRow(true)
    setContextMenu({});
  };
  return (
    <div
      className={style["context-menu"]}
      style={{ left: position.x + 4, top: position.y }}
    >
      <div onClick={() => onEdit(rowId)}>Edit</div>
      <div onClick={() => onDelete(rowId)}>Delete</div>
    </div>
  );
};

export default ContextMenu;
