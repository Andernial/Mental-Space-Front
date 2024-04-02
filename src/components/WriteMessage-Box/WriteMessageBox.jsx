import './writeMessageBox.css'


export function WriteBox(){
    return(
        <div className="write-box-container">
            <div className='message-box'>
                <p className='write-message'>digite uma mensagem !</p>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
    )
}