
const Register = () => {
    return (
        <main>
            <form>
                <h1>Register</h1>

                <p>Personal info</p>
                <label for="usernmae">Username</label>
                <input id="username" type="text" placeholder="JustMyself123..." />

                <label for="usernmae">Password</label>
                <input id="password" type="password" placeholder="******" />

                <label for="repeat-password">Repeat Password</label>
                <input id="repeat-password" type="password" placeholder="******" />
                <hr />
                <p>Account</p>
                <label for="amount">Amount</label>
                <input id="amount" type="text" placeholder="$125.90" />

                <button type="submit">Register</button>
            </form>
        </main>
    );
};

export default Register;