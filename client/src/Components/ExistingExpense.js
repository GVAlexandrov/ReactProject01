import { Link } from 'react-router-dom';
import * as expenseService from './services/services';

const ExistingExpense = ({
  id,
  expense,
  price,
  category,
  description,
  refresh
}) => {

  const deleteExpenseMessage = (e) => {
    if (window.confirm('Are you sure?')) {
      expenseService
      .deleteExpense(id)
      .then(resp => console.log(resp))
      .then(() => {
        refresh();
      });

    } else {
      console.log('Not Deleted');
    }
  }

  return (
    <tr id={id}>
      <td>
        <p>{expense}</p>
        {/* <div className="report">
                    <a href="#">Report</a>
                </div> */}
      </td>


      <td>
        {/* <img src="src/images/amount.png" alt="" /> */}
        <p>{price} лв</p>
      </td>


      <td>
        {/* <img src="static/images/category.png" alt="" /> */}
        <p>{category}</p>
      </td>


      <td>
        {/* <img src="./src/images/hastag.png" alt="" /> */}
        <p>{description}</p>
      </td>


      <td>
        <div className="report">
          <p><Link to={`/expenses/${id}/details`} id={id}>Details</Link></p>
        </div>
      </td>


      <td>
        <div className="report">
          <p><Link to="/expenses" id={id} onClick={deleteExpenseMessage}>X</Link></p>
        </div>
      </td>
    </tr>
  );
};

export default ExistingExpense;