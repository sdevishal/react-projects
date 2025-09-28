import style from "./App.module.css";
import FormInput from "./components/FormInput";
import FormData from "./components/FormData";
// import { useState } from "react";

const App = () => {
  // const [expenses, setExpenses] = useState();

  return (
    <div className={style["container"]}>
      <h1 className="heading">Expense Tracker</h1>
      <div className={style["form-group"]}>
        <FormInput />
        <FormData />
      </div>
    </div>
  );
};

export default App;
