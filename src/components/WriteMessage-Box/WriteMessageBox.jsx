import * as Yup from 'yup'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'
import './writeMessageBox.css'
import { useRef } from 'react'
import { FetchApiData } from '../../utils/Request'
import { useUnlog } from "../../utils/Unlog";
import { useState } from 'react'


export function WriteBox({className}){
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
            
            try {
                await validation.validate(messageObject, { abortEarly: false })
                const result = await FetchApiData('post', 'https://mental-space-api.up.railway.app/Messages/create-message', message,cleanToken)
    
                console.log(result)
                // setError(false)
                setSucess(true)
                setErros([])
                messageForm.current.message.value = ''
            } catch (error) {
                setSucess(false)
                console.log(error)
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
        <div className={className}>
            <div className='message-box'>
            <p className='write-message'>digite uma mensagem !</p>
                <form className='form-message' ref={messageForm} onSubmit={handleSubmit}>
                {sucess && <div className='sucess-message'>mensagem enviada com sucesso !</div>}
                {errors.messageBody && <div className='error-create-message'>{errors.messageBody}</div>}
                <textarea name="message" id="textarea-write-post" cols="30" rows="10" maxLength="200"></textarea>
                <input type="submit" value="Enviar" className='send-message'></input>
                </form>
                
                
            </div>
        </div>
    )
}