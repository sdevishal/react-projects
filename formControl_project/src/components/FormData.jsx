import style from './FormData.module.css'

const FormData = () => {
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
        </tbody>
      </table>
    </div>
  );
};

export default FormData;
