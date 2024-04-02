import { useNavigate } from "react-router-dom";
import useSignOut from "react-auth-kit/hooks/useSignOut";

export const useUnlog = () => {
    const navigate = useNavigate();
    const signOut = useSignOut();

    // Função para deslogar o usuário e redirecioná-lo para a página inicial
    const unlogUser = () => {
        signOut();
        navigate("/");
    };

    return unlogUser;
};