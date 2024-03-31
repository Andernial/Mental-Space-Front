import { useRef } from "react"
import { FetchApiData } from "../../utils/Request"
import useSignIn from 'react-auth-kit/hooks/useSignIn';

import "./loginForm.css"




export function LoginForm(){


    const loginForm = useRef(null)
    const signIn = useSignIn()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const email = loginForm.current.email.value
        const password = loginForm.current.password.value
        const userInfo = { email,password}
        try {
           const result = await FetchApiData('post','http://localhost:3000/user/login-user', userInfo)
           console.log(result)
            
           signIn({
            auth: {
                token: result.data.token,
                type: 'x-acess-token'
            },
            userState: {
                name:  result.data.name,
                uid: result.data.id
            }

           })

        } catch (error) {
            console.error(error.message)
        }
        

    }


    return(
        <div className="container-login">
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