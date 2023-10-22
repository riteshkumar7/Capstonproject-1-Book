import { Grid, Segment } from 'semantic-ui-react'
import { Button, Form } from 'semantic-ui-react'
import { Image, Reveal } from 'semantic-ui-react'
import Footer from './Footer'
import Menu from './Menu'

import axios from 'axios';
import { useState, useEffect } from "react"
const Number = () => {

  const [name,setName] = useState('');
  const [email,setEmail] = useState(''); 
  const [message,setMessage]= useState('');

  let [data,setData]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:9000/getInfo")
    .then((temp)=>temp.json())
    .then((res)=>setData(res))
    .catch((e)=>console.log("error"))
  },[])
  console.log(data);

  const  Adduser= () => {
    axios.post("http://localhost:9000/newDocument",{"name":name,"email":email,"message":message})
  }
    
  const deleteDocument=()=>{
    axios.delete(`http://localhost:9000/removeDocument/${name}`)
  }


  return (
    <div style={{ padding: "20px" ,backgroundColor:"lightgrey"}}>
      <Menu/>
      <Segment>
        <Grid columns={2} relaxed='very' style={{ padding: "30px" }}>
          <Grid.Column>
            <Form>
              <Form.Field>
                <label style={{ fontSize: "18px" }}>CONTACT US</label>
                <label>Name</label>
                <input placeholder='Name' type="text"  onChange={(e) => setName(e.target.value)} style={{ width: "650px" }} />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input placeholder='Email' type="email"  onChange={(e) => setEmail(e.target.value)} style={{ width: "650px" }} />
              </Form.Field>
              <Form.Field>
                <label>Message</label>
                <textarea  onChange={(e) => setMessage(e.target.value)} style={{ width: "650px", height: "50px" }}></textarea>
              </Form.Field>
              <Button type='submit' onClick={Adduser} primary>Send</Button>
              <Button type='button' onClick={deleteDocument}>Cancel</Button>
            </Form>
          </Grid.Column>
          <Grid.Column  >
            <Form>
              <Form.Field style={{margin:"0 120px"}}>
              <label style={{ fontSize: "18px" }}>OUR CONTACTS</label>
              <p style={{margin:"10px"}}>
                BOOKCHOR.COM<br />
                Last Page - Bookchor's Bookstore,<br />
                Municipal No 50, The Basement near Brigade School J. P. Nagar Bengaluru,<br />
                Karnataka-560078<br />
                P: (+91) 9050111218</p><br />
                <label>Email:<br /></label>
                <a href=''>cs@bookchor.com</a>

                <Reveal animated='move down' style={{width:"40px"}} >
    <Reveal.Content visible >
      <Image src='./130.png' size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='./640px-Facebook_logo_(square).png' size='small' />
    </Reveal.Content>
  </Reveal> 
              </Form.Field> 
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
      <Footer/>
    </div>
  )
}

export default Number;
