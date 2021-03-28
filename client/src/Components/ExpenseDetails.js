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
      .then(res => {
        if (res) {
          setExpense(res);
        }
      })
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
          </tr>


        </thead>


        <tbody>
          <tr id={match.params.id}>
            <td>
              <p>{expense.expense}</p>
            </td>


            <td>
              <p>{expense.price} лв</p>
            </td>


            <td>
              <p>{expense.category}</p>
            </td>


            <td>
              <p>{expense.description}</p>
            </td>


            <td>
              <div className="report">
                <p><Link to={`/expenses/${match.params.id}/details/edit`} id={expense.id}>Edit</Link></p>
              </div>
            </td>

            
          </tr>
        </tbody>
      </table>
    </main>
  );
};


export default ExpenseDetails;