import axios from 'axios'

//Functions to fetch server information through redux
export const getDatas =() => dispatch => {
    return fetch('http://localhost:3001/')
    .then(res => res.json())
    .then(getdates => dispatch({
        type:'GET_DATES',
        payload:getdates
    }))
}
//POST
export function postData (payload){
    return async function (dispatch){
        const response = axios.post('http://localhost:3001/newdata', payload)
        console.log(response)
        return response;
    }
}
//DELETE
export function deleteData (id){
    return async function (dispatch){
        const response = await axios.delete('http://localhost:3001/delete/'+ id);
       
    return response
        }
}
//PUT
export function updateData (id, payload){
    return async function (dispatch){
        const response = await axios.put('http://localhost:3001/put/'+ id, payload);
       
    return response
        }
}

//SearchBar function
export function getDataName (payload){
    return async function (dispatch){
      try{
          var json= await axios.get('http://localhost:3001/?name='+ payload)
          
          return dispatch ({
                type: 'GET_NAME_DATA',
                payload: json.data
            })
        }catch(error){
         console.log(error)
        }

    }
}