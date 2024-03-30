

import "./registerForm.css"

export function RegisterForm(){
    return(
        <div className="container-register">
            <div className="register-container-add">
                <form >
                <div className="input">
                        <label>Nome de Usuario</label>
                        <input type="text" name="userName" />
                    </div>

                    <div className="input">
                        <label>Email</label>
                        <input type="text" name="email" />
                    </div>

                    <div className="input">
                        <label>Senha</label>
                   <input type="password" name="password"/>

                    </div>

                    <div className="send">
                        <input type="submit" value='Register' className="button-submit" />
                    </div>

                </form>
            </div>
        </div>
    )
}