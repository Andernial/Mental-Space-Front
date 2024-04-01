import { PostContainer } from "../components/Posts-Container/PostsContainer"
import { MessagePost } from "../components/Message/Message"

export const Messages = () => {
    return(
        <PostContainer> <MessagePost  icon='./src\assets\icons\heartEmpty.png' iconfull='./src\assets\icons\heartFull.png'   /> </PostContainer>
    )
}