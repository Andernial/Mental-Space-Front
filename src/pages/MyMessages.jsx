import { useState, useEffect } from "react";
import { MessagePost } from "../components/Message/Message"
import { PostContainer } from "../components/Posts-Container/PostsContainer";
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import { WriteBox } from "../components/WriteMessage-Box/WriteMessageBox";


export const MyMessages = () => {
    const [openPost, setPost] = useState(false)
    const [postContainerKey, setPostContainerKey] = useState(0)
    const headers = useAuthHeader()
    const cleanToken = headers.replace('x-acess-token ', '')

    function openPostMenu(){
            setPost(!openPost)
            setPostContainerKey(prevKey => prevKey + 1)
    }

    useEffect(() => {
        if (!openPost) {
            setPostContainerKey(prevKey => prevKey + 1)
        }
    }, [openPost])

    return (
       <>
       <WriteBox className={ openPost ? 'write-box-container-open' : 'write-box-container'} /> 
        <div className="minhas-mensagens">
        <h1>Minhas Mensagens</h1>  
      
            </div>
            <img src="/src/assets/icons/adicionar.png" alt="" className="adiciona-message-button" onClick={openPostMenu} />
         <PostContainer key={postContainerKey}> <MessagePost  icon='./src\assets\icons\heartEmpty.png' iconfull='/src/assets/icons/heartFull.png'  authtoken={cleanToken} url='my-messages' iconx='/src/assets/icons/close.png' /> </PostContainer>
       </>
       


    )
}