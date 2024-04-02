import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import './middle.css'



export function MiddlePage(){
    
    const isAuth = useIsAuthenticated()
    const authUser = useAuthUser()

    

    

    return(
        <>
        { isAuth ? (

        <div className="container-middle">
         <h1 className="titulo">Seja bem vindo !</h1>
        <p className='user-name'>{authUser.name}</p>
        </div>

        ) : (


            <div className="container-middle">
            <h1 className="titulo">Crie uma conta para adicionar e ver mensagens !</h1>
            <p className='main-page-p'>espaço destinado a saúde mental</p>
        </div>


        )}
        

        </>
       
    )
}