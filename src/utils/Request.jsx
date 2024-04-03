import axios from "axios"



export const FetchApiData = async (method, url, data = null, authToken = null) => {
   
    try {
      

        const headers = authToken ? {
            'x-acess-token': authToken
        } : {};

        const response = await axios({
            method,
            url,
            data,
            headers
        })

        
        const result = response.data

        return result
    } catch (error) {
        
        throw error
    }
}
