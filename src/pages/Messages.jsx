import { PostContainer } from "../components/Posts-Container/PostsContainer"
import { MessagePost } from "../components/Message/Message"

export const Messages = () => {
    return(
        <>
         <div className="minhas-mensagens">
                          <h1>Todas as Mensagens</h1>  
                </div>
                <PostContainer>  <MessagePost  icon='./src\assets\icons\heartEmpty.png' iconfull='./src\assets\icons\heartFull.png' url='mensagensDeApoio'  /> </PostContainer>
        </>
       
    )
}