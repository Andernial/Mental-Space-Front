

import "./registerForm.css"

export function LoginForm(){
    return(
        <div className="container-login">
            <div className="login-register-container">
                <form >
                    <div className="input">
                        <label>Email</label>
                        <input type="text" name="email" />
                    </div>

                    <div className="input">
                        <label>Senha</label>
                   <input type="password" name="password"/>

                    </div>

                    <div className="send">
                        <input type="submit" value='login' className="button-submit" />
                    </div>

                </form>
            </div>
        </div>
    )
}