import { NavLink } from 'react-router-dom'

const Header = () => {
   return (
      <header>
         <nav>
            <ul>
               <li>
                  <NavLink id="home" className="left-floated" to="/">MoneySafe</NavLink>
               </li>
            </ul>
            <ul>
               <li>
                  <NavLink className="right-floated" to="/register">Register</NavLink>
               </li>
               <li>
                  <NavLink className="right-floated" to="/login">Login</NavLink>
               </li>
               <li>
                  <NavLink className="right-floated" to="/profile">[myusername profile]</NavLink>
               </li>

               <li>
                  <NavLink className="right-floated" to="/expenses">My Expenses</NavLink>
               </li>

               <li>
                  <NavLink className="right-floated" to="/">Logout</NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;