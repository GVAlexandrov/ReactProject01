
const NewExpense = () => {
  return (
    <main>
      <form>
        <h1>New Expense</h1>


        <div className="form-control">
          <label for="merchant">Merchant*</label>
          <input id="merchant" type="text" placeholder="Merchant" />
        </div>


        <div className="form-control">
          <label for="total">Total*</label>
          <input id="total" type="text" placeholder="52.00" />
          <select name="vault" id="vault">
            <option value="bgn">BGN</option>
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
          </select>
        </div>


        <div className="form-control">
          <label for="category">Category*</label>

          <select name="category" id="category">
            <option disabled selected value="default">Select category...</option>
            <option value="all">All</option>
            <option value="car">Car</option>
            <option value="fees">Fees</option>
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
          <label for="description">Description*</label>
          <input id="description" type="text" placeholder="Expense description..." />
        </div>


        <div className="form-control">
          <label for="report">Report: </label>
          <input type="checkbox" id="report" />
        </div>


        <button type="Submit">Save</button>
      </form>
    </main>
  );
};

export default NewExpense;