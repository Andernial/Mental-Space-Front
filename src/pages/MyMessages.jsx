import { useState } from "react";
import { MessagePost } from "../components/Message/Message"
import { PostContainer } from "../components/Posts-Container/PostsContainer";
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';

export const MyMessages = () => {
    const [openPost, setPost] = useState(false)
    const headers = useAuthHeader()
    const cleanToken = headers.replace('x-acess-token ', '')

    function openPostMenu(){
            setPost(!openPost)
    }

    return (
       <>
        <div className="minhas-mensagens">
        <h1>Minhas Mensagens</h1>  
      
            </div>
            <img src="./src/assets/icons/adicionar.png" alt="" className="adiciona-message-button" />
         <PostContainer> <MessagePost  icon='./src\assets\icons\heartEmpty.png' iconfull='./src\assets\icons\heartFull.png'  authtoken={cleanToken} url='my-messages'  /> </PostContainer>
       </>
       


    )
}