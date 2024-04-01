import { useEffect, useState } from "react"
// import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
// import { CheckLikeInDataBase } from "../../utils/ChekUserLike"
import { FetchApiData } from "../../utils/Request";

import './message.css'


export function MessagePost({icon,iconfull}){
   const [messages, setMessage] = useState([])
    // const [likes, setLikes] = useState({});
    // const useHeader = useAuthHeader('auth.token')
    
    useEffect(() =>{

      
        loadMessage()
    },[])

    async function loadMessage(){
        const response = await FetchApiData('get',`http://localhost:3000/Messages/mensagemsDeApoio`)
        const messages = response.messages
       
        // checkLikesForMessages(messages);
        setMessage(messages)
    }

    // const checkLikesForMessages = async (messagesData) => {
    //     try {
    //         const token = useHeader.replace('x-acess-token ', '');
    //         const likesData = {};

    //         for (const msg of messagesData) {
    //             const hasLiked = await CheckLikeInDataBase(token, msg.id);
    //             likesData[msg.id] = hasLiked;
    //         }

    //         setLikes(likesData);
    //     } catch (error) {
    //         console.error('Erro ao verificar os likes:', error);
    //     }
    // }
    return(
        <>
      
    
        {messages.map((msg) => {

         return (  <div key={msg.id} className="message-post">
                <div className="message-content">
                <p className="author-post">{msg.author} :</p>
                <p className="message-text">{msg.message}</p>
                </div>
                {/* <div className="like">
                    {likes ? (<img src={iconfull}alt="heart-icon" className="icon-heart" />)  : ( <img src={icon} alt="heart-icon"  className="icon-heart"/>  )}
                   
                    <span>{msg.likes}</span>
                </div> */}
            </div>)

        }
                
        )}
        
                <button className="carrega-mensagens" onClick={loadMessage}>carrega mais mensagens</button>
        </>
    )
}