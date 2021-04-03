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


               {(localStorage.email === undefined)
                  ? <li>
                     <NavLink className="right-floated" to="/register">Register</NavLink>
                  </li>
                  : ''
               }


               {(localStorage.email === undefined)
                  ? <li>
                     <NavLink className="right-floated" to="/login">Login</NavLink>
                  </li>
                  : ''
               }


               <li>
                  <NavLink className="right-floated" to="/profile">{localStorage.email}</NavLink>
               </li>


               {(localStorage.email !== undefined)
                  ? <li>
                     <NavLink className="right-floated" to="/expenses">My Expenses</NavLink>
                  </li>
                  : ''
               }


               {(localStorage.email !== undefined)
                  ? <li>
                     <NavLink className="right-floated" to="/">Logout</NavLink>
                  </li>
                  : ''
               }
            </ul>

         </nav>
      </header>
   );
};

export default Header;