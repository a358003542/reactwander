import { useState } from 'react';
import { create_jwt_token, get_user_info } from '../services/jwt_token'

function LoginPage(props) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const saveToken = props.saveToken
    const setUser = props.setUser

    function onChangeUsername(e) {
        setUserName(e.target.value);
    }
    function onChangePassword(e) {
        setPassword(e.target.value);
    }

    function onSubmitLogin(e) {
        e.preventDefault();
        const send_data = {
            username,
            password
        };

        create_jwt_token(send_data).then((data) => {
            const token = data['access'];
            saveToken(token);

            get_user_info().then(data => {
                console.log(data);
                if (data.username){
                  setUser(data)
                }else{
                  setUser(null)
                }
                });
        });
    }
    return (
        <article>
            <h2>Login Page</h2>

            <form onSubmit={onSubmitLogin}>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Username" onChange={onChangeUsername} />
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={onChangePassword} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="my-3">
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
            </form>

        </article>
    )
}

export default LoginPage;