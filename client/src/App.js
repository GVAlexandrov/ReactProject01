import style from './App.module.css';

function App() {
  return (
    <div className={style.App}>
      <nav className={style.Navigation}>
        <ul>
          <li className="listItem"><img src="/white-origami-bird.png" alt="white origami"/></li>
          <li className="listItem"><a href="#">Information</a></li>
          <li className="listItem"><a href="#">Expenditures</a></li>
          <li className="listItem"><a href="#">New Expenditure</a></li>
          <li className="listItem"><a href="#">Going to 4</a></li>
          <li className="listItem"><a href="#">Going to 5</a></li>
        </ul>

      </nav>
    </div>
  );
}

export default App;