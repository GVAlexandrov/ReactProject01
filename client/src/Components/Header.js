import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink id="home" class="left-floated" to="/">MoneyGone</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink class="right-floated" to="/register">Register</NavLink>
                    </li>
                    <li>
                        <NavLink class="right-floated" to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink class="right-floated" to="/profile">[myusername profile]</NavLink>
                    </li>

                    <li>
                        <NavLink class="right-floated" to="/">Logout</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;