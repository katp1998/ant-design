/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Input, Row } from 'antd';
import { useRouter } from 'next/router';
import { User } from '../types/userType';
import  useAuth  from '../hooks/useAuth';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../mutations/userMutations';
import styles from '../styles/Default.module.css'

function register() {
    const { auth,setAuth } = useAuth();

  const [fields,setFields] = useState({
    name: '',
    email:'',
    password: ''
  }) 

  const [error,setError] = useState<String>('')

  const navigate = useRouter()

  const onChange =  (event:any) =>{
    setFields({...fields, [event.target.name] : event.target.value});
    setError('')
  }

//   useEffect(() => {
//     if(auth.isLoggedIn) {
//       navigate.push('/home')
//     }
  
//   },[auth,navigate])

//   const [register, { loading }] = useMutation(REGISTER_USER,{
//       update(proxy , {data: { register: {accessToken}}}) {
//         setAuth({accessToken:accessToken, isLoggedIn:true});
//       navigate.push('/home')
//       },
//       onError({graphQLErrors}){
//         setError(graphQLErrors[0].message)
//       },
//       variables : { name: fields.name , email : fields.email , password : fields.password }
//     })
  
  const handleRegister = (e:any) =>{
    e.preventDefault(); 
    setError('')
    const user: User = {
      name: fields.name as string,
      email: fields.email as string,
      password: fields.password as string
    }

    for (const [key, value] of Object.entries(user)) {
      if(value === '') {
        setError(`Please fill in the \"${key}\" field`)
        return undefined
      }
    } 
    register();
  }

  return (
    <>
    <div className="site-card-wrapper">

                <Card className={styles.card} >
                    <h2 className={styles.heading}>Register</h2>

                    <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={handleRegister}
                    autoComplete="off"
                    className={styles.form}
                    >
                    <Form.Item
                    label="Username"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                    className={styles.textFields}
                    >
                    <Input />
                    </Form.Item>

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

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }} >
                    <Button danger size='middle' block type="primary" htmlType="submit">
                        Register
                    </Button>
                    </Form.Item>
                    </Form>
                </Card>

    </div>
    
    </>
  )
}

export default register