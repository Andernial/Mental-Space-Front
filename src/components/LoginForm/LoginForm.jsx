import * as Yup from 'yup'
import { useRef, useState, } from "react"
import { useNavigate } from "react-router-dom";
import { FetchApiData } from "../../utils/Request"
import useSignIn from 'react-auth-kit/hooks/useSignIn';

import "./loginForm.css"

export function LoginForm() {
    const [errors, setErrors] = useState(false)
    const [requestError, setRequestError] = useState([])

    const validation = Yup.object({
        email: Yup.string().email('email invalido').required('Preencha Este Campo!'),
        password: Yup.string()
            .required('Preencha Este Campo!')
    })


    const loginForm = useRef(null)
    const signIn = useSignIn()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = loginForm.current.email.value
        const password = loginForm.current.password.value
        const userInfo = { email, password }
        try {
            await validation.validate(userInfo, { abortEarly: false })
            const result = await FetchApiData('post', 'https://mental-space-api.onrender.com/user/login-user', userInfo)


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
            setErrors(false)
            navigate('/')
        } catch (error) {
            const newErrors = {}

            if (error.inner) {
                error.inner.forEach(err => {
                    newErrors[err.path] = err.message
                })

                setRequestError([])

               return setErrors(newErrors)
            }
            setRequestError(error.response.data)
           
        }


    }

    return (
        <div className="container-login">
            
            <div className="login-register-container">
                <form ref={loginForm} onSubmit={handleSubmit}>
                    <div className="input">
                        <label>Email</label>
                        {errors.email && <div className='error-input-register'>{errors.email}</div>}
                        <input type="text" name="email" />
                    </div>

                    <div className="input">
                        <label>Senha</label>
                        {errors.password && <div className='error-input-register'>{errors.password}</div>}
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