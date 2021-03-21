import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <main>
            <p className="guest-message">MoneySafe? The best expense tracker tool of all time! </p>
            <p className="guest-message">Аre you new here? <NavLink to="/register">Register</NavLink> yourself!</p>
        </main>
    );
};

export default Home;