import { NavLink } from 'react-router-dom'

const Profile = () => {
    return (
        <main>
            <table className="expenses-info">
                <thead>
                    <tr>
                        <th colSpan="2">Expenses</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Total Amount:</td>
                        <td>3887.85 BGN</td>
                    </tr>
                    <tr>
                        <td>Total Merches</td>
                        <td>1416</td>
                    </tr>
                </tbody>
            </table>

            <div className="current-amount">
                <p>Available amount: <span>1234.00 BGN</span></p>
            </div>
        </main>
    );
};

export default Profile;