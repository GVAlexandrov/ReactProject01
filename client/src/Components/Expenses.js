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
                        <h2>Salary time? Refill your account amount.</h2>
                        <input type="text" id="refill-amount" />
                        <button type="submit">Refill</button>
                    </form>
                    <div>
                        <h2>New expense comming up?</h2>
                        <NavLink to="/new-expense">Add it now</NavLink>
                    </div>
                </section>

                <hr className="separator" />


                <table className="expenses">
                    <thead>
                        <tr>
                            <th>Expense</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Description</th>
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



                <h1 className="no-expenses">No expenses founded so far.. <span>GOOD JOB!</span></h1>

            </main>
        );
    }
};

export default Expenses;