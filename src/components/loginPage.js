
function LoginPage({ }) {
    return (
        <article>
            <h2>Login Page</h2>

            <form>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <div className="my-3">
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            </form>

        </article>
    )
}

export default LoginPage;