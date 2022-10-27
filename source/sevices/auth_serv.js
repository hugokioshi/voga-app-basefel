import API from './Webapiservices';
import {BASE_URL} from './urls'

export const register = async(param)=>{

  try{
      
return await API.post('${BASE_URL}/register', param).then(
response =>{
  response.data;
  },

error=>{
console.log(error)
return null;
}
  
);

  }catch(erro){
    return null;
  }
}


export const login = async(param)=>{

  try{
      
return await API.post('${BASE_URL}/login', param).then(
response =>{
  response.data;
  },

error=>{
console.log(error)
return null;
}
  
);

  }catch(erro){
    return null;
  }
}
