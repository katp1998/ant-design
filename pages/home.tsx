/* eslint-disable react-hooks/rules-of-hooks */
import { useLazyQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import { GET_USER } from '../queries/userQueries'

function home() {
    // const [user,setUser] = useState<String>()

    // const {auth,setAuth} = useAuth()
    // const navigate = useRouter()
  
    
  
    // const [ privateRoute, {data,loading}] = useLazyQuery(GET_USER, {
    //   context:{
    //     headers: {
    //       "Authorization" : `Bearer ${auth.accessToken}`
    //     }
    //   },
    //     onError({graphQLErrors}){
    //     console.log("error",graphQLErrors[0].message)
    //   }
    // })
  
    // useEffect(()=>{
    //   if(auth.isLoggedIn){
    //     privateRoute()
    //     console.log('useeffect called ')
    //     setUser(data?.privateroute?.name)
    //   }
    // },[])
  return (
    <div>Welcome!</div>
  )
}

export default home