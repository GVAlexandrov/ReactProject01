import { useEffect, useState } from 'react';
import * as expenseService from './services/services';
import validate from '../validations/expensesValidations';


const NewExpense = ({
  history,
}) => {
  let [merchantError, setMerchantError] = useState("");
  let [priceError, setPriceError] = useState("");

  let onNewExpenseSubmitHandler = (e) => {
    e.preventDefault();

    let { merchant, price, curency, category, description } = e.target;
    const merchantError = validate.merchant(merchant.value);
    const priceError = validate.price(price.value);

    if (merchantError) {
      setMerchantError(merchantError);
      setTimeout(() => {
        setMerchantError('');
      }, 1500);
    }

    if (priceError) {
      setPriceError(priceError);
      setTimeout(() => {
        setPriceError('');
      }, 1500);
    }

    if (merchantError || priceError) return;

    expenseService
      .addNewExpense(
        merchant.value,
        price.value,
        curency.value,
        category.value,
        description.value)
      .then(resp => {
        if (resp.statusText === "OK") {
          history.push('/expenses');
        }
      })
      .catch(console.log);
  }


  return (
    <main>
      <form onSubmit={onNewExpenseSubmitHandler}>
        <h1>New Expense</h1>


        <div className="form-control">
          <label htmlFor="merchant">Expense*</label>

          <input id="merchant" name="merchant" type="text" placeholder="Expense" />
        </div>

        {merchantError
          ? (
            <div className="notifications" >
              <p className="notification-message">{merchantError}</p>
            </div>
          )
          : (<></>)
        }


        <div className="form-control">
          <label htmlFor="total">Price*</label>

          <input id="total" name="price" type="number" placeholder="52.00" />

          <select className="vault" name="curency" id="vault">
            <option value="bgn">BGN</option>
            {/* <option value="eur">EUR</option> */}
          </select>
        </div>

        {priceError
          ? (
            <div className="notifications" >
              <p className="notification-message">{priceError}</p>
            </div>
          )
          : (<></>)
        }

        <div className="form-control">
          <label htmlFor="category">Category*</label>

          <select className="category" name="category" id="category">
            {/* <option disabled selected value="default">Select category...</option> */}
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

          <input id="description" name="description" type="text" placeholder="Expense description..." />
        </div>


        <button type="Submit">Save</button>
      </form>
    </main>
  );
};


export default NewExpense;