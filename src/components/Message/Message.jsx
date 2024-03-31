import { useState } from "react"
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import { CheckLikeInDataBase } from "../../utils/ChekUserLike"


export function MessagePost({icon,iconfull}){
    // const [message, setMessage] = useState([])
    const [likeMessage, setLikeMessage] = useState('')
    
    const useHeader = useAuthHeader('auth.token')

    async function checkLike(){
        try {
            console.log()
            const hasLiked = await CheckLikeInDataBase(useHeader, 2)
       
            console.log(hasLiked)
            setLikeMessage(hasLiked ? 'Você curtiu este post!' : 'Você não curtiu este post ainda.');
        } catch (error) {
            console.error('Erro ao verificar o like:', error);
        }
       
      
      
    }

    return(
        <>
        <button onClick={() => {checkLike()}}> checkLike </button>
        <div>
                 {likeMessage}
            </div>
        {/* {message.map((message) => {

            <div key={message.id} className="message-post">
                <div className="message-content">
                <p className="author-post">{message.author}</p>
                <p className="message-post">{message.message}</p>
                </div>
                <div className="like">
                    <img src="" alt="heart-icon" />
                    <span>message.likes</span>
                </div>
            </div>

        }
                
        )} */}
        
        </>
    )
}