import * as Yup from 'yup'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'
import { useRef } from 'react'
import { FetchApiData } from '../../utils/Request'
import { useUnlog } from "../../utils/Unlog";
import { useState } from 'react'


import './edit-box.css'



export function EditMessages({className,message,urlId}){


    const [sucess, setSucess] = useState(false)
    const [errors, setErros] = useState([])
    const [requestError, setRequestError] = useState([])

    const authToken = useAuthHeader()
    const unlog = useUnlog()

    const validation = Yup.object({
        messageBody: Yup.string().required('Preencha Este Campo!').min(8, 'a mensagem deve conter pelo menos 8 caracteres'),
   
    })

    const messageForm = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const messageBody = messageForm.current.message.value
        

        const cleanToken = authToken.replace('x-acess-token ', '')
        const messageObject = {messageBody}
        const message = {message :messageBody}
        
        console.log(message)
        try {
            await validation.validate(messageObject, { abortEarly: false })
            const result = await FetchApiData('patch', `https://mental-space-api.onrender.com/Messages/update-message/${urlId}`, message,cleanToken)

            console.log(result)
            // setError(false)
            setSucess(true)
            setErros([])
          
        } catch (error) {
            setSucess(false)
                const newErrors = {}

            if (error.inner) {
                error.inner.forEach(err => {
                    newErrors[err.path] = err.message
                })
                setRequestError([])
                console.log(newErrors)
               return setErros(newErrors)
            }

            if(error.response.status === 401){
                unlog()
               return
            }
          
            setRequestError(error.response.data)
           
        }

    }
    return(
        <div className='editing-container'>
            <div className='edit-box'>
              
                <h1>Edite sua Mensagem</h1>
              
              
                <form className='edit-form' ref={messageForm} onSubmit={handleSubmit}>
                {sucess && <div className='sucess-message'>mensagem editada com sucesso !</div>}

                {errors.messageBody && <div className='error-create-message'>{errors.messageBody}</div>}
                <textarea name="message" id="message-edit" cols="30" defaultValue={message} rows="10" maxLength='200'></textarea>
                <input type="submit" value="Editar" className='edit-message'></input>
               
                </form>
            </div>

        </div>
    )
}

    