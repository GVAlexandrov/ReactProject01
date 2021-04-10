import { useEffect, useState } from 'react';
import * as expenseService from './services/services';

const EditExpense = ({
  match,
  history
}) => {
  let [expense, setExpense] = useState({});


  useEffect(() => {
    expenseService.getOne(match.params.id)
      .then(res => {
        setExpense(res);
      });
  }, [match.params.id]);


  console.log(expense.category);


  let onEditSubmit = (e) => {
    e.preventDefault();

    let { merchant, price, curency, category, description } = e.target;

    // console.log(e.target);
    expenseService
      .editExpense(
        merchant.value,
        price.value,
        curency.value,
        category.value,
        description.value,
        match.params.id)
      .then(res => console.log(res))
      .then(() => {
        setTimeout(() => { history.push(`/expenses/${match.params.id}/details`) }, 200);
      })
  }


  return (
    <main>
      <form onSubmit={onEditSubmit}>
        <h1>Edit Expense</h1>


        <div className="form-control">
          <label htmlFor="merchant">Merchant*</label>

          <input id="merchant" name="merchant" type="text" defaultValue={expense.expense} />
        </div>


        <div className="form-control">
          <label htmlFor="total">Total*</label>

          <input id="total" name="price" type="text" defaultValue={expense.price} />

          <select className="vault" name="curency" id="vault">
            <option value="bgn">BGN</option>
            {/* <option value="eur">EUR</option> */}
            {/* <option value="usd">USD</option> */}
          </select>
        </div>


        <div className="form-control">
          <label htmlFor="category">Category*</label>

          <select className="category" name="category" id="category" value={expense.category}>
            <option value="all">All</option>
            <option value="car">Car</option>
            <option value="clothes">Clothes</option>
            <option value="insurance">Insurance</option>
            <option value="maintenance">Maintenance</option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="taxes">Taxes</option>
            <option value="travel">Travel</option>
            <option value="utilities">Utilities</option>
            <option value="other">Other</option>
          </select>
        </div>


        <div className="form-control">
          <label htmlFor="description">Description*</label>

          <input id="description" name="description" type="text" defaultValue={expense.description} />
        </div>


        <button type="Submit">Save</button>
      </form>
    </main>
  );
};

export default EditExpense;