import { NavLink, useHistory } from 'react-router-dom';
import { auth } from '../config/firebaseInit';

const Header = ({
   userEmail,
   setUserEmail
}) => {
   const history = useHistory();

   const links = [
      { menuName: "Register", path: "/register", isAuth: false },
      { menuName: "Login", path: "/login", isAuth: false },
      { menuName: userEmail?.email, path: "/profile", isAuth: true },
      { menuName: "My Expenses", path: "/expenses", isAuth: true },
   ]

   function logOutHandler(e) {
      e.preventDefault();
      auth.signOut();
      setUserEmail(null);
      localStorage.removeItem("email");
      localStorage.removeItem("uid");
      console.log(history);
      history.push('/');
   }

   return (
      <header>
         <nav>


            <ul>
               <li key="MoneySafe">
                  <NavLink id="home" className="left-floated" to="/">MoneySafe</NavLink>
               </li>
            </ul>


            <ul>
               {
                  links.map(link => {
                     if (userEmail !== null && link.isAuth) {
                        return (
                        <li key={link.menuName}>
                           <NavLink className="right-floated" to={link.path}>{link.menuName}</NavLink>
                        </li>
                        );

                     } else if (userEmail === null && !link.isAuth) {
                        return (
                        <li key={link.menuName}>
                           <NavLink className="right-floated" to={link.path}>{link.menuName}</NavLink>
                        </li>
                        );
                     }
                  })
               }
               {/* {(userEmail === null)
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


               {(userEmail !== null)
                  ? <li>
                     <NavLink className="right-floated" to="/expenses">My Expenses</NavLink>
                  </li>
                  : ''
               } */}


               {(userEmail !== null)
                  ? <li key="Logout">
                     <a className="right-floated" href="#" onClick={logOutHandler} >Logout</a>
                  </li>
                  : ''
               }
            </ul>

         </nav>
      </header>
   );
};

export default Header;