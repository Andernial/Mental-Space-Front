import { useEffect, useState } from "react"
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
// import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
// import { CheckLikeInDataBase } from "../../utils/ChekUserLike"
import { useUnlog } from "../../utils/Unlog";
import { FetchApiData } from "../../utils/Request";

import './message.css'


export function MessagePost({icon,iconfull,url,authtoken,titulo,}){
   const [messages, setMessage] = useState([])
    const unlog = useUnlog()
    // const [likes, setLikes] = useState({});
    // const useHeader = useAuthHeader('auth.token')

    const authUser = useAuthUser()
    
    useEffect(() =>{

      
        loadMessage()
    },[])

    async function loadMessage(){

        try {
            const response = await FetchApiData('get',`http://localhost:3000/Messages/${url}`,'',authtoken)
        
            const messages = response.messages
    
            setMessage(messages)
        } catch (error) {
            console.log(error)
            if(error.response.status === 401){
                unlog()
               return
            }
        
        }
       
       
        // checkLikesForMessages(messages);
       
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
                    <div className="top-side-post">
                    <p className="author-post">{msg.author} :</p>
                    {msg.userid == authUser.id ? null : <img src="./src\assets\icons\pencil.svg" alt="" /> }
                    
                    </div>
              
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