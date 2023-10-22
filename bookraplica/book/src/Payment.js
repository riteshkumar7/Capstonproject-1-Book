import {Icon,Input} from "semantic-ui-react"
import Footer from './Footer';
import { Carousel } from 'antd';
import {Segment ,Grid,Header,Button} from 'semantic-ui-react'
import { Step } from 'semantic-ui-react'
import React from "react"
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



const Payment=( )=>
{
    const location = useLocation();
    const { bookData, price } = location.state || {};

    const [showOrderForm, setShowOrderForm] = useState(false);

    useEffect(() => {
      // Access the price and bookData here
      console.log('Price:', price);
      console.log('Book Data:', bookData);
    }, [price, bookData]);


  const handleOrderClick = () => {
    setShowOrderForm(true);
  };

    const [flag, setFlag] = useState({
      shipComplete: false,
      shipActive: true,
      shipbtn: true,
      billComplete: false,
      billActive: false,
      billbtn: true, 
      billdisable: true,
      confirmComplete: false,
      confirmActive: false,
      confirmbtn: false,
      confirmdisable: true,
    });
  
    const handleshipping = () => {
      setFlag({
        ...flag,
        shipComplete: true,
        shipActive: false,
        shipbtn: false,
        billActive: true,
        billbtn: true,
        billdisable: false,
      });
    };
  
    const handleBill = () => {
      setFlag({
        ...flag,
        billComplete: true,
        billActive: false,
        billbtn: false,
        confirmActive: true,
        confirmbtn: true,
        confirmdisable: false,
      });
    };
  
    const [showButtons, setShowButtons] = useState(false);
    const handleConfirm = () => {
      setFlag({ ...flag, confirmComplete: true, confirmActive: false, confirmbtn: false });
      setShowButtons(true);
    };

    const onlinemode = () => {
      const googlePayUrl = 'https://pay.google.com/about/'; // Replace this with the actual Google Pay integration URL
    window.open(googlePayUrl, '_blank');
    };



const navigate = useNavigate();
const itemDelete=()=>{
  alert("Successfully delete");
navigate('/')
}
    
    return(
        <div style={{backgroundColor:"gold"}}>
        <div style={{height:"80px", backgroundColor:"gold"}}>
        <Icon name="align left" size='big' style={{margin:"20px 40px"}}/>
        <img src="logo-ltb.png"/>
        <Input action={{ icon: 'search' }} placeholder='Search books by author name...' style={{margin:"20px 270px",width:"500px"}}/>
        </div>
                
         
        <Carousel autoplay >
    <div>
    <img src="swami.jpg"  style={{height:"300px",width:"1310px"}}/>
    </div>
    <div>
    <img src="AbdulKalam.jpg" style={{height:"300px",width:"1400px"}}/>
    </div>
  </Carousel>
    
  <div>
    
      {bookData ? (
        <Segment style={{height:"420px",backgroundColor:"lightyellow"}}>
            
         
          <Grid columns={2} stackable textAlign='center'>
      

      <Grid.Row verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: '400px' }}>
          <Header >
          <div>
            <img src={bookData.imageUrl} alt="Book Cover" style={{ maxWidth: '60%' }} />
          </div>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header >
          <div>
            <strong>Title:</strong> {bookData.title}
          </div>
          <div>
            <strong>Price:</strong> ${bookData.price}
          </div>
          </Header>
          <Button primary onClick={handleOrderClick}>Order</Button>
          <Button primary onClick={itemDelete}>Order Cancel</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
        </Segment>
      ) : (
        <div>
          <h3>No book data available. Please add items to your cart.</h3>
        </div>
      )}
    </div>
    <br/>
    <br/>
    {showOrderForm && (
    <div style={{marginLeft:"300px",marginBottom:"30px"}}>
    <React.Fragment>
      <Step.Group ordered>
        <Step completed={flag.shipComplete} active={flag.shipActive}>
          <Step.Content>
            <Step.Title>Shipping</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
            <Step.Description> {flag.shipbtn ? <button onClick={handleshipping}>Ship</button> : null}</Step.Description>
          </Step.Content>
        </Step>

        <Step completed={flag.billComplete} active={flag.billActive} disabled={flag.billdisable}>
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
            <Step.Description>{flag.billbtn ? <button onClick={handleBill}>Bill</button> : null}</Step.Description>
          </Step.Content>
        </Step>

        <Step completed={flag.confirmComplete} active={flag.confirmActive} disabled={flag.confirmdisable}>
          <Step.Content>
            <Step.Title>Confirm Order</Step.Title>
            <Step.Description>{flag.confirmbtn ? <button onClick={handleConfirm}>Confirm</button> : null}</Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
    </React.Fragment>
    </div>
     )}
    {showButtons && (
        <div style={{marginLeft:"600px",marginBottom:"30px"}}>
      <Button onClick={onlinemode}> <Icon name='payment'  color='teal' />Online Payment</Button>
      </div>
)}



  <img src="qc-img.png" style={{marginLeft:"300px"}}/>
    <br/>
    <br/>
        <Footer/>
        </div>
    )
}
export default Payment;