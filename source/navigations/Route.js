import React from 'react';
import {useUser} from '../contexts/Usercontext'
import Main from './Main'
import Auth from '../sevices/auth_serv'
const Route = ()=>{

const {signed} = useUser();
retur(
  <>
  {
    signed
    ? <Main/>
    : <Auth/>
  }
  </>
)

}

export default Route;