import { login, activeUser } from './services/authService';


const Login = () => {
  const onLogin = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const pass = e.target.elements.pass.value;

    login(email, pass)
      .then(res => activeUser(res.user.uid, res.user.email));
  }


  return (
    <main>
      <form onSubmit={onLogin}>
        <h1>Login</h1>

        <p>Personal info</p>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="JustMyself123..." autoComplete="on" name="email"/>

        <label htmlFor="pass">Password</label>
        <input id="pass" type="password" placeholder="********" autoComplete="on" name="pass"/>

        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default Login;