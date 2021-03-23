import { Component } from 'react';
import { NavLink } from 'react-router-dom'
import ExistingExpense from './ExistingExpense';

class Expenses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/expenses')
            .then(res => res.json())
            .then(res => this.setState({ expenses: res }))
            .catch(error => console.log(error));
    }

    render() {
        console.log(this.state.expenses);

        return (
            <main>

                <section className="actions">
                    <form action="">
                        <h3>Refill account amount.</h3>
                        <input type="text" id="refill-amount" />
                        <button type="submit">Refill</button>
                    </form>

                    <div>
                        <h3>New expense</h3>
                        <NavLink to="/new-expense">Add</NavLink>
                    </div>
                </section>

                <hr className="separator" />
                
                <div className="select-category">
                    <select name="category" id="category">
                        <option disabled selected value="default">Select category...</option>
                        <option value="advertising">Advertising</option>
                        <option value="benefits">Benefits</option>
                        <option value="car">Car</option>
                        <option value="equipment">Equipment</option>
                        <option value="fees">Fees</option>
                        <option value="home-office">Home Office</option>
                        <option value="insurance">Insurance</option>
                        <option value="interest">Interest</option>
                        <option value="Labor">Labor</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="materials">Materials</option>
                        <option value="meals-and-entertainment">Meals and Entertainment</option>
                        <option value="office-supplies">Office Supplies</option>
                        <option value="other">Other</option>
                        <option value="professional-services">Professional Services</option>
                        <option value="rent">Rent</option>
                        <option value="taxes">Taxes</option>
                        <option value="travel">Travel</option>
                        <option value="utilities">Utilities</option>
                    </select>
                </div>

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

                        {this.state.expenses.map(x =>
                            <ExistingExpense
                                key={x.id}
                                id={x.id}
                                expense={x.expense}
                                price={x.price}
                                category={x.category}
                                description={x.description} />
                        )}

                    </tbody>


                </table>



                <h1 className="no-expenses">No expenses so far...</h1>

            </main>
        );
    }
};

export default Expenses;