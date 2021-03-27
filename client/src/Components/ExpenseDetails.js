import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import * as expenseService from './services/services';

const ExpenseDetails = ({
  match
}) => {
  let [expense, setExpense] = useState({});


  // console.log(match.params.id);


  useEffect(() => {
    expenseService.getOne(match.params.id)
      .then(res => setExpense(res));
  }, [match.params.id]);


  return (
    <main>
      <h1>Expense details</h1>


      <table className="expenses">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>


        </thead>


        <tbody>
          <tr id={expense.id}>
            <td>
              <p>{expense.expense}</p>
              {/* <div className="report">
                    <a href="#">Report</a>
                </div> */}
            </td>


            <td>
              {/* <img src="src/images/amount.png" alt="" /> */}
              <p>{expense.price} лв</p>
            </td>


            <td>
              {/* <img src="static/images/category.png" alt="" /> */}
              <p>{expense.category}</p>
            </td>


            <td>
              {/* <img src="./src/images/hastag.png" alt="" /> */}
              <p>{expense.description}</p>
            </td>


            <td>
              <div className="report">
                <p><Link to={`/expenses/${expense.id}/details/edit`} id={expense.id}>Edit</Link></p>
              </div>
            </td>


            <td>
              <div className="report">
                <p><Link to="#" id={expense.id}>X</Link></p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};


export default ExpenseDetails;