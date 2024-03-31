import "./post-container.css"


export function PostContainer(props){
    return(
        <div className="post-container">
            {props.children}
        </div>
    )
}


