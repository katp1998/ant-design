/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Input, Row } from 'antd';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../mutations/userMutations';
import { User } from '../types/userType';
import styles from '../styles/Default.module.css'

function login() {
    // const { auth,setAuth } = useAuth();


    // const [fields,setFields] = useState<User>({
    //   email:'',
    //   password: ''
    // }) 
  
    
    // const [error,setError] = useState<String>('')
  
  
    // const navigate = useRouter();
  
      
    // const onChange =  (event:any) =>{
    //   setFields({...fields, [event.target.name] : event.target.value});
    //   setError('')
    // }
    // useEffect(() => {
    //   if(auth.isLoggedIn) {
    //     navigate.push('/home')
    //   }
      
    // },[auth,navigate])
  
    // const [login, { loading }] = useMutation(LOGIN_USER , {
    //   update(proxy , {data: { login: {accessToken}}}) {
    //     setAuth({accessToken:accessToken, isLoggedIn:true});
    //     navigate.push('/home')
    //   },
    //   onError({graphQLErrors}){
    //     setError(graphQLErrors[0].message)
    //   },
    //   variables : { email : fields.email , password : fields.password}
    // }) 
  
    //   const handleLogin = (e:any) =>{
    //     e.preventDefault(); 
    //     setError('')
    //     const user: User = {
    //       email: fields.email as string,
    //       password: fields.password as string
    //     }
  
    //     for (const [key, value] of Object.entries(user)) {
    //       if(value === '') {
    //         setError(`Please fill in the \"${key}\" field`)
    //         return undefined
    //       }
    //     } 
  
    //     login()
    //   }
  return (
    <>

                <Card className={styles.card} >
                <h2 className={styles.heading}>Login</h2>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        //onFinish={handleLogin}
                        autoComplete="off"
                        className={styles.form}
                        >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                            className={styles.textFields}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                            className={styles.textFields}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" danger block size='middle' htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>

                    </Form>
                </Card>


    </>
  )
}

export default login