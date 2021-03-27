import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Login from './Components/Login';
import NewExpense from './Components/NewExpense';
import Expenses from './Components/Expenses';
import ExpenseDetails from './Components/ExpenseDetails';
import EditExpense from './Components/EditExpense';
import Profile from './Components/Profile';
import Report from './Components/Report';
import Error404 from './Components/404';
import style from './App.module.css';


function App() {
  return (
    <div className={style.App}>
      <Header />


      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <Route path='/new-expense' exact component={NewExpense} />
        <Route path='/expenses' exact component={Expenses} />
        <Route path='/expenses/:id/details' exact component={ExpenseDetails} />
        <Route path='/expenses/:id/details/edit' exact component={EditExpense} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/report' exact component={Report} />
        <Route path='/*' exact component={Error404} />
      </Switch>


      <Footer />
    </div>
  );
}


export default App;