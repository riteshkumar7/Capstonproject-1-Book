import React from 'react'
import { Link } from 'react-router-dom'
import { Input, Menu} from 'semantic-ui-react'

import  { useState } from 'react';


const Menumem = () => {

  const [activeItem, setActiveItem] = useState('home');


  const handleItemClick = (name) => setActiveItem(name);

  

      return (
        <div>
        <Menu secondary style={{ margin:"20px"}}>
          <Menu.Item name='/' onClick={handleItemClick}><Link to ="/">Home</Link></Menu.Item>
         <Menu.Item  name='9050111218 ' onClick={handleItemClick}> <Link to ="/number">0123456789</Link></Menu.Item>  
        <Menu.Item name="Wholesale" onClick={handleItemClick}><Link to="/Wholesale">Wholesale</Link></Menu.Item>
        <Menu.Item  name='LockTheBox' onClick={handleItemClick}><Link to ="/LockTheBox">LockTheBox</Link></Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item style={{width:"500px"}}>
              <Input icon='search' placeholder='Search...'  />
            </Menu.Item>
            <Menu.Item  name='Login' onClick={handleItemClick}><Link to ="/Login">Login</Link></Menu.Item>
      </Menu.Menu>
        </Menu>


        </div>
      )
    }


    export default Menumem;