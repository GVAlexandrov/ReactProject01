import { register, activeUser } from './services/authService';


const Register = () => {
    
    const onRegister = (e) => {
        e.preventDefault();
        let email = e.target.elements.email.value;
        let pass = e.target.elements.pass.value;

        register(email, pass)
            .then(res => activeUser(res.user.uid, res.user.email))
            .catch(error => console.log(error));
    }


    return (
        <main>
            <form onSubmit={onRegister}>
                <h1>Register</h1>

                <p>Personal info</p>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="text" placeholder="JustMyself123..." autoComplete="on" name="email" />

                <label htmlFor="pass">Password</label>
                <input id="pass" type="password" placeholder="******" autoComplete="on" name="pass" />

                <label htmlFor="repeat-password">Repeat Password</label>
                <input id="repeat-password" type="password" placeholder="******" autoComplete="on" />
                <hr />
                <p>Account</p>
                <label htmlFor="amount">Amount</label>
                <input id="amount" type="text" placeholder="$125.90" />

                <button type="submit">Register</button>
            </form>
        </main>
    );
};

export default Register;