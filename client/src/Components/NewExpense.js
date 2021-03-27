import * as expenseService from './services/services';

const NewExpense = () => {
  let onNewExpenseSubmitHandler = (e) => {
    e.preventDefault();

    console.log(e.target.merchant.value);    

    let { merchant, price, curency, category, description } = e.target;

    expenseService.addNewExpense(merchant.value, price.value, curency.value, category.value, description.value)
  }

  return (
    <main>
      <form onSubmit={onNewExpenseSubmitHandler}>
        <h1>New Expense</h1>


        <div className="form-control">
          <label htmlFor="merchant">Merchant*</label>

          <input id="merchant" name="merchant" type="text" placeholder="Merchant" />
        </div>


        <div className="form-control">
          <label htmlFor="total">Total*</label>

          <input id="total" name="price" type="text" placeholder="52.00" />

          <select className="vault" name="curency" id="vault">
            <option value="bgn">BGN</option>
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
          </select>
        </div>


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


        <div className="form-control">
          <label htmlFor="report">Report: </label>

          <input type="checkbox" id="report" />
        </div>


        <button type="Submit">Save</button>
      </form>
    </main>
  );
};

export default NewExpense;