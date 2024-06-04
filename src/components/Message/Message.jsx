import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import { useEffect, useState } from "react"
import { useUnlog } from "../../utils/Unlog";
import { FetchApiData } from "../../utils/Request";
import { EditMessages } from '../EditMessage-box/EditBox';

import pencil from "../../assets/icons/pencil.svg"
import trash from "../../assets/icons/trash.png"

import './message.css'


export function MessagePost({ url, authtoken, iconx }) {
    const [messages, setMessage] = useState([])
    const [openEditMenu, setOpenEditMenu] = useState(false)
    const [selectedMessage, setSelectedMessage] = useState(null)
    const unlog = useUnlog()

    const authUser = useAuthUser()


    useEffect(() => {


        loadMessage()
    }, [])

    function handleEditMenu(msg) {
        setOpenEditMenu(!openEditMenu)
        setSelectedMessage(msg)
        loadMessage();

    }

    async function loadMessage() {

        try {
            const response = await FetchApiData('get', `https://mental-space-api.onrender.com/Messages/${url}`, '', authtoken)

            const messages = response.messages

            setMessage(messages)

        } catch (error) {
            console.log(error)
            if (error.response.status === 401) {
                unlog()
                return
            }

        }

    }

    async function deleteMessage(msg){
        try {
            await FetchApiData('delete', `https://mental-space-api.up.railway.app/Messages/delete-message/${msg.id}`, '', authtoken)

            loadMessage()
        } catch (error) {
            console.log(error)
            if (error.response.status === 401) {
                unlog()
                return
            }

        }
    }



    return (
        <>
            {openEditMenu ? (
                <>
                    <img src={iconx} alt="close" className='close' onClick={handleEditMenu} />
                    <EditMessages  message={selectedMessage.message} urlId={selectedMessage.id} />



                </>)

                : null}

            {messages.map((msg) => {

                return (<div key={msg.id} className="message-post">
                    <div className="message-content">
                        <div className="top-side-post">
                            <p className="author-post">{msg.author} :</p>
                            {msg.userid == authUser.id ? null : <img src={pencil} alt="" onClick={() => handleEditMenu(msg)}  className='pencil' />}

                        </div>

                        <p className="message-text">{msg.message}</p>
                        {msg.userid == authUser.id ? null : (<div className='edit-icons'>
                            <img src={trash} alt="lixo" className='trash' onClick={() => deleteMessage(msg)} />
                        </div>)}

                    </div>
                </div>)

            }

            )}

            <button className="carrega-mensagens" onClick={loadMessage}>carrega mais mensagens</button>
        </>
    )
}