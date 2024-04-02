import "./post-container.css"


export function PostContainer(props,){
    return(
        <div className="post-container">
              
            <div className='posts'>
            {props.children}

            </div>
           
        </div>
    )
}


