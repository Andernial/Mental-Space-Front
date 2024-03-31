import { FetchApiData } from "./Request";
import { useState } from "react";



export async function CheckLikeInDataBase(authToken, postId) {
  try {
      const response = await FetchApiData('patch', `http://localhost:3000/Messages/toggle-like/${postId}`, '', authToken);
     
      console.log(response.message)
      if (response.message === 'like adicionado') {
          return true;  // Usuário deu "like"
      } else {
          return false; // Usuário não deu "like"
      }
  } catch (error) {
    console.log(response)
      console.error('Erro ao verificar o "like" do usuário:', error);
      return false; // Definindo como falso em caso de erro
  }
}