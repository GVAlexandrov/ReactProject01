import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Register from './Components/Register';
import NewExpenditure from './Components/NewExpenditure';
import Error404 from './Components/404';
import style from './App.module.css';

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register' exact component={Register} />
        <Route path='/new-expenditure' exact component={NewExpenditure} />
        <Route path='/*' exact component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;