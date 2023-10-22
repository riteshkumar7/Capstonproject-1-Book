import React from 'react'
import { Button, Icon, Modal ,Input ,Popup,Form,Grid,Message,Divider,Segment, Label} from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import Footer from './Footer';
import Menu from './Menu'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login=()=>
{

  const navigate = useNavigate();

  const [forgotPassword, setForgotPassword] = useState(false);
  const [open, setOpen] = React.useState(false)
  const [Uid, setUId] = useState('');
  const [Pass, setPass] = useState(''); 
  const [mobile,setMobile]= useState('');

  let [data,setData]=useState([]);

  const [id, setId] = useState();
  const [userPass, setUserpass] = useState();
  const [show, setShow] = useState('');

  

  const handlepassword= () => {
    if (!id || !userPass) {
      setShow('Please enter both ID and Password');
      return;
    }
    let userinfo = JSON.parse(localStorage.getItem(id));
    if (userPass === userinfo.Pass ){
      setShow('Strong Password');
      sessionStorage.setItem("temp", id);
      navigate('/');
    }
    else {
      setShow('Please enter valid password');
    }
  }
  useEffect(()=>{
    fetch("http://localhost:9000/getInfo")
    .then((temp)=>temp.json())
    .then((res)=>setData(res))
    .catch((e)=>console.log("error"))
  },[])
  console.log(data);

  const Adduser = () => {
    axios.post("http://localhost:9000/newDocument",{"Uid":Uid,"mobile":mobile,"Pass":Pass})
    let userinfo = {
      Uid: Uid, Pass: Pass, mobile:mobile
    };
    userinfo = JSON.stringify(userinfo);
    localStorage.setItem(Uid, userinfo);
    setOpen(false);
  }
    
  const deleteDocument=()=>{
    axios.delete(`http://localhost:9000/removeDocument/${Uid}`)
  }

  const UpdatedDocument=()=>{
    axios.put(`http://localhost:9000/UpdatedDocument/${Uid}`,{"Uid":Uid,"mobile":mobile,"Pass":Pass})
  }
  
    return(
    
        <div style={{padding:"1px",backgroundColor:"#FBFAF0" }}>
          <Menu/>
        <Segment placeholder textAlign='left' style={{opacity:"0.9"}} >
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <img src="./about.png" style={{display:"flex", width:"500px"}}/>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
          {show && (
              <Message color={show === 'Strong Password' ? 'green' : 'red'}>
                {show}
              </Message>
            )}
            <Form>
              {forgotPassword ? (
                <div className='highlight-form'>
              <Form.Field>
              <label>Old Password</label>
              <input placeholder='Old Password' />
            </Form.Field>
            <Form.Field>
              <label>New Password</label>
              <input placeholder='New Password' />
            </Form.Field>
            <Form.Field>
              <label>Confirm Password</label>
              <input placeholder='Confirm Password' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
            </div>
              ):
             ( <>
             <Form.Input
                icon='user'
                iconPosition='left'
                label='Username'
                placeholder='Username'
                onChange={(e) => setId(e.target.value)}
              />
              
              
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            placeholder='Password'
            onChange={(e) => setUserpass(e.target.value)}
          />
            
              </>
             )}
              <Button content='Login' onClick={handlepassword} primary  />
              <a href='#' onClick={() => setForgotPassword(true)}>
        Forget Password
      </a>
                </Form>
            <Divider horizontal>Or</Divider>
            <Modal 
              closeIcon
              open={open}
               trigger={<Button color='teal' content='Become a Member' icon='add' labelPosition='left' />}
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)} 
              style={{height:'325px',margin:'160px 200px',background:'green'}}
            >
<Modal.Content>
             
                <label> User Id</label><br />
                <Input placeholder='UserId' type="text" onChange={(e) => setUId(e.target.value)} /><br/>
                <label> MobileNo.</label><br />
                <Input placeholder='MobileNo.' type="text" onChange={(e) => setMobile(e.target.value)} /><br/>
                <br />
                <br />
                <label> Password</label><br />
              
              <Input placeholder='Password' type="password" onChange={(e) => setPass(e.target.value)} />
        
              </Modal.Content>      
              <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                  <Icon name='cut' /> Cancel
                </Button>
                <Button color='green' onClick={Adduser} >
                  <Icon name='save outline' /> Submit
                </Button>
                <Button onClick={deleteDocument} >
                  <Icon name='user delete' />
                </Button>
                <Button  onClick={UpdatedDocument} >
                  <Icon name='edit' /> 
                </Button>
              </Modal.Actions>
            </Modal>    
            <div id='icon' style={{margin:"5px 230px"}}>
            <Icon name='facebook' size='large' />
            <Icon name='twitter' size='large' />
           <Icon name='instagram' size='large' />
           <Icon name='call' size='large' />
           </div>
          </Grid.Column>
        </Grid>
      </Segment>
      <Footer/>
      </div>
      
    )
}
export default Login;