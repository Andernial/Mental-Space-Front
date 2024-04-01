import axios from "axios"


export const FetchApiData = async(method,url,data = null, authToken = null) =>{
        try {
           
            

            const headers = authToken ? {
                'x-acess-token': authToken
            } : {};
    
            console.log("Headers:", headers);
 
            const response = await axios({
                method,
                url,
                data,
                headers
            })
            
            console.log(response.data)
            const result = response.data

            return result
        } catch (error) {
           console.log
            console.error(error.message)
            throw error
        }
}