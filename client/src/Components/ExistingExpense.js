
const ExistingExpense = ({
    expense,
    price,
    category,
    description
}) => {

    return (
        <tr>
            <td>
                <p>{expense}</p>
                {/* <div className="report">
                    <a href="#">Report</a>
                </div> */}
            </td>

            <td>
                <img src="static/images/amount.png" alt="" />
                <p>{price} лв</p>
            </td>

            <td>
                <img src="static/images/category.png" alt="" />
                <p>{category}</p>
            </td>

            <td>
                <img src="static/images/hastag.png" alt="" />
                <p>{description}</p>
            </td>

            <td>
                <div className="report">
                    <p><a href="#">Report</a></p>
                </div>
            </td>
        </tr>
    );
};

export default ExistingExpense;