import { Link } from 'react-router-dom';

const ExistingExpense = ({
  id,
  expense,
  price,
  category,
  description
}) => {

  const deleteExpenseMessage = () => {
    if (window.confirm('Are you sure?')) {
      console.log('Deleted');
      return;
    }

    console.log('Not Deleted');
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