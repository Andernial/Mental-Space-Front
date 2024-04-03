import { useRef, useState, } from "react"
import { useNavigate } from "react-router-dom";
import { FetchApiData } from "../../utils/Request"
import useSignIn from 'react-auth-kit/hooks/useSignIn';

import "./loginForm.css"

export function LoginForm() {
    const [error, setError] = useState(false)

    const loginForm = useRef(null)
    const signIn = useSignIn()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = loginForm.current.email.value
        const password = loginForm.current.password.value
        const userInfo = { email, password }
        try {
            const result = await FetchApiData('post', 'https://mental-space-api.up.railway.app/user/login-user', userInfo)


            signIn({
                auth: {
                    token: result.data.token,
                    type: 'x-acess-token'
                },
                userState: {
                    name: result.data.name,
                    uid: result.data.id
                }

            })
            setError(false)
            navigate('/')
        } catch (error) {
            console.error(error.message)
            setError(true)
        }


    }

    return (
        <div className="container-login">
            {error ? (
                <p className="erro-login"> Erro login ou senha invalido !</p>
            ) : null}
            <div className="login-register-container">
                <form ref={loginForm} onSubmit={handleSubmit}>
                    <div className="input">
                        <label>Email</label>
                        <input type="text" name="email" />
                    </div>

                    <div className="input">
                        <label>Senha</label>
                        <input type="password" name="password" />

                    </div>

                    <div className="send">
                        <input type="submit" value='login' className="button-submit" />
                    </div>

                </form>
            </div>
        </div>
    )
}