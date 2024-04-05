import * as Yup from 'yup'
import { useRef } from "react"
import "./registerForm.css"
import { useState } from "react"
import { FetchApiData } from "../../utils/Request"

export function RegisterForm() {
    const [sucess, setSucess] = useState(false)
    const [errors, setErros] = useState([])
    const [requestError, setRequestError] = useState([])

    const validation = Yup.object({
        name: Yup.string().required('Preencha Este Campo!'),
        email: Yup.string().email('email invalido').required('Preencha Este Campo!'),
        password: Yup.string()
            .required('Preencha Este Campo!')
            .min(8, 'a senha deve ter pelo menos 8 caracteres')
            .matches(/[!@#$%^&*]/, 'a senha deve conter pelo menos um símbolo')
            .matches(/[1-9]/, 'a senha deve conter pelo menos um número')
            .matches(/[a-z]/, 'a senha deve conter uma letra maiuscula e uma letra minuscula')
            .matches(/[A-Z]/, 'a senha deve conter uma letra maiuscula e uma letra minuscula')
    })

    const registerForm = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = registerForm.current.name.value
        const email = registerForm.current.email.value
        const password = registerForm.current.password.value
        const userInfo = { name, email, password }
        try {
            await validation.validate(userInfo, { abortEarly: false })
            const result = await FetchApiData('post', 'https://mental-space-api.up.railway.app/user/create-user', userInfo)


            // setError(false)
            setSucess(true)
        } catch (error) {
            // setError(true)
                const newErrors = {}

            if (error.inner) {
                error.inner.forEach(err => {
                    newErrors[err.path] = err.message
                })

                setRequestError([])

               return setErros(newErrors)
            }
          
            setRequestError(error.response.data)
           
        }


    }


    return (
        <div className="container-register">

            {sucess ? (
                <div className="sucess-register-container">
                    <h2 className='sucess-register'>Usuário cadastrado com sucesso!</h2>
                    <p className='register-message-p'>faça login!</p>
                </div>
            ) : (
                <>

                    <div className="register-container-add">
                        <form ref={registerForm} onSubmit={handleSubmit}>
                            
                            {requestError && <div className='error-input-register'>{requestError.error}</div>}
                            {errors.name && <div className='error-input-register'>{errors.name}</div>}
                            <div className="input">
                                <label>Nome de Usuario</label>
                                <input type="text" name="name" />
                            </div>
                            {errors.email && <div className='error-input-register'>{errors.email}</div>}
                            <div className="input">
                                <label>Email</label>
                                <input type="text" name="email" />
                            </div>
                            {errors.password && <div className='error-input-register'>{errors.password}</div>}
                            <div className="input">
                                <label>Senha</label>
                                <input type="password" name="password" />

                            </div>

                            <div className="send">
                                <input type="submit" value='register' className="button-submit" />
                            </div>

                        </form>
                    </div>
                </>
            )}   </div>

    )
}