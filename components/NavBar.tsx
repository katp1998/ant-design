import React, { useState } from 'react'
import  useAuth  from '../hooks/useAuth';
import styles from '../styles/Default.module.css'
import { useMutation } from '@apollo/client';
import { LOG_OUT } from '../mutations/userMutations';

import { useRouter } from 'next/router';
import { Menu, Layout, MenuProps } from 'antd';

const { Header } = Layout;

const items: MenuProps['items'] = [
    {
      label: 'Home',
      key: 'home'
    },
    {
      label: 'Logout',
      key: 'logout'
    }
  ]
  
  const items2: MenuProps['items'] = [
      {
      label: 'Login',
      key: 'login'
    },
    {
      label: 'Register',
      key: 'register'
    }
  ]


function NavBar() {

    const router = useRouter()
  const { auth, setAuth } = useAuth();


  const [logout] = useMutation(LOG_OUT,{
    update(proxy) {
      
    }
  })

//   const logOut = () =>{
//     logout();
//     setAuth({accessToken:'', isLoggedIn:false});
//     router.push('/')
//   }

  const [current, setCurrent] = useState('');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  if(current === 'home') {
    router.push('/')
  } else if(current === 'register') {
    router.push('/register')
  } else if(current === 'login') {
    router.push('/login')
  } else {
    //logOut()
  }
  return (
    <>
    <Header>
        
        <div >
        {/** {auth.isLoggedIn ? ( */}
        <Menu
        className={styles.bg}
        style={{float:"right"}}
          theme="dark"
          mode="horizontal"
          items={items}
          onClick={onClick}
          selectedKeys={[current]}
        />
        {/** ) : (  */}
        <Menu
        className={styles.bg}
        //style={{float:"right"}}
          theme="dark"
          mode="horizontal"
          items={items2}
          onClick={onClick}
          selectedKeys={[current]}

        />
      {/**)}*/}
        </div>
      </Header>
    
    
  
    
 
  </>
  )
}

export default NavBar