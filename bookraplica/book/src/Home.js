import Carousel from 'react-bootstrap/Carousel';
import { Divider, Segment } from 'semantic-ui-react'
import { Card, Image } from 'semantic-ui-react'
import Menu from './Menu'
import List from './List'
import Footer from './Footer';
import "./Home.css"
import { useNavigate } from 'react-router-dom';

const Home=()=>
{
  const navigate = useNavigate();

  
  const AddToCart = (bookData) => {

    navigate('/Payment',{ state: { bookData } }); 
  };
    return(


<div>
<Menu/>
<List/>  
<Carousel>
      <Carousel.Item>
        <img src="./2023052653652.png" alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./2023060555036.png" alt="seacond slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./2023082679708.webp" alt="Third slide"/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>
    <br/>
    <Segment style={{ fontSize: '18px', fontWeight: 'bold' , display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
    <div><b>Book Sets</b></div>
    <Card style={{ maxWidth:"200px",}} >
      <div id="div2">
    <Image src='/9781310395182.jpg' style={{ maxWidth:"120px"}} onClick={() =>AddToCart(
      { title: 'Sudha Murty',price: 489,imageUrl: '9781310395182.jpg'}
    )}  />
    </div>
    <Card.Content extra>
      <a style={{margin:"10px",}}>Sudha Murty Be</a>
      <div id="div1">
      <p style={{color:"blue"}}>Rs.489</p><p style={{color:"red",textDecoration: 'line-through'}}>Rs.699</p>
      </div>
    </Card.Content>
    
  </Card>
  
  <Card style={{ maxWidth:"200px",}} >
      <div id="div2">
    <Image src='/9781311313398.jpg' style={{ maxWidth:"120px"}} onClick={() =>AddToCart(
{ title: 'Eldesteragon',price: 349,imageUrl: '9781311313398.jpg'}

    )} />
    </div>
    <Card.Content extra>
      <a style={{margin:"10px",}}>Eldesteragon</a>
      <div id="div1">
      <p style={{color:"blue"}}>Rs.349</p><p style={{color:"red",textDecoration: 'line-through'}}>Rs.949</p>
      </div>
    </Card.Content>
    
  </Card>
  <Card style={{ maxWidth:"200px",}} >
      <div id="div2">
    <Image src='/9780747581086.jpg' style={{ maxWidth:"120px"}} onClick={() =>AddToCart(
      { title: 'Harry Potter',price: 349,imageUrl: '9780747581086.jpg'}
    )} />
    </div>
    <Card.Content extra>
      <a style={{margin:"10px",}}>Harry Potter</a>
      <div id="div1">
      <p style={{color:"blue"}}>Rs.349</p><p style={{color:"red",textDecoration: 'line-through'}}>Rs.999</p>
      </div>
    </Card.Content>
    
  </Card>
  <Card style={{ maxWidth:"200px",}} >
      <div id="div2">
    <Image src='/9780747566533.jpg' style={{ maxWidth:"120px"}}  onClick={() =>AddToCart(
      { title: 'The Kite Runner',price: 175,imageUrl: '9780747566533.jpg'}
    )}/>
    </div>
    <Card.Content extra>
      <a style={{margin:"10px",}}>The Kite Runner</a>
      <div id="div1">
      <p style={{color:"blue"}}>Rs.175</p><p style={{color:"red",textDecoration: 'line-through'}}>Rs.599</p>
      </div>
    </Card.Content>
    
  </Card>
  <Card style={{ maxWidth:"200px",}} >
      <div id="div2">
    <Image src='/9780670088249.jpg' style={{ maxWidth:"120px"}}  onClick={() =>AddToCart( 
      { title: 'Emergency Chronicles',price: 285,imageUrl: '9780670088249.jpg'}
    )}/>
    </div>
    <Card.Content extra>
      <a style={{margin:"10px",}}>Emergency Chronicles</a>
      <div id="div1">
      <p style={{color:"blue"}}>Rs.285</p><p style={{color:"red",textDecoration: 'line-through'}}>Rs.699</p>
      </div>
    </Card.Content>
    
  </Card>
  <Card style={{ maxWidth:"200px",}} >
      <div id="div2">
    <Image src='/9789390166268.jpg' style={{ maxWidth:"120px"}} onClick={() =>AddToCart(
      { title: 'The Psychology',price: 259,imageUrl: '9789390166268.jpg'}
    )} />
    </div>
    <Card.Content extra>
      <a style={{margin:"10px",}}>The Psychology</a>
      <div id="div1">
      <p style={{color:"blue"}}>Rs.259</p><p style={{color:"red",textDecoration: 'line-through'}}>Rs.499</p>
      </div>
    </Card.Content>
    
  </Card>
  <Card style={{ maxWidth:"200px",}} >
      <div id="div2">
    <Image src='/9780349413686.jpg' style={{ maxWidth:"120px"}} onClick={() =>AddToCart(
      { title: 'Deep Work',price: 259,imageUrl: '9780349413686.jpg'}
    )} />
    </div>
    <Card.Content extra>
      <a style={{margin:"10px",}}>Deep Work</a>
      <div id="div1">
      <p style={{color:"blue"}}>Rs.259</p><p style={{color:"red",textDecoration: 'line-through'}}>Rs.499</p>
      </div>
    </Card.Content>
    
  </Card>
  <Card style={{ maxWidth:"200px",}} >
      <div id="div2">
    <Image src='/9781311313315.jpg' style={{ maxWidth:"120px"}} onClick={() =>AddToCart(
      { title: 'Premchand',price: 1599,imageUrl: '9781311313315.jpg'}
    )} />
    </div>
    <Card.Content extra>
      <a style={{margin:"10px",}}>Premchand</a>
      <div id="div1">
      <p style={{color:"blue"}}>Rs.1599</p><p style={{color:"red",textDecoration: 'line-through'}}>Rs.1890</p>
      </div>
    </Card.Content>
    
  </Card>
  <Card style={{ maxWidth:"200px",}} >
      <div id="div2">
    <Image src='/9781310010025.jpg' style={{ maxWidth:"120px"}} onClick={() =>AddToCart(
      { title: 'BestofInspiration',price: 499,imageUrl: '9781310010025.jpg'}
    )} />
    </div>
    <Card.Content extra>
      <a style={{margin:"10px",}}>BestofInspiration</a>
      <div id="div1">
      <p style={{color:"blue"}}>Rs.499</p><p style={{color:"red",textDecoration: 'line-through'}}>Rs.749</p>
      </div>
    </Card.Content>
    
  </Card>
  <Card style={{ maxWidth:"200px",}} >
      <div id="div2">
    <Image src='/9789357022002.jpg' style={{ maxWidth:"120px"}} onClick={() =>AddToCart(
      { title: 'Droupadi Murmu',price: 488,imageUrl: '9789357022002.jpg'}
    )} />
    </div>
    <Card.Content extra>
      <a style={{margin:"10px",}}>Droupadi Murmu</a>
      <div id="div1">
      <p style={{color:"blue"}}>Rs.488</p><p style={{color:"red",textDecoration: 'line-through'}}>Rs.595</p>
      </div>
    </Card.Content>
    
  </Card>
  <Card style={{ maxWidth:"200px",}} >
      <div id="div2">
    <Image src='/9780571230587.jpg' style={{ maxWidth:"120px"}} onClick={() =>AddToCart(
      { title: 'Fine Balance',price: 235,imageUrl: '9780571230587.jpg'}
    )} />
    </div>
    <Card.Content extra>
      <a style={{margin:"10px",}}>Fine Balance</a>
      <div id="div1">
      <p style={{color:"blue"}}>Rs.235</p><p style={{color:"red",textDecoration: 'line-through'}}>Rs.599</p>
      </div>
    </Card.Content>
    
  </Card>
  <Card style={{ maxWidth:"200px",}} >
      <div id="div2">
    <Image src='/9781612681139.jpg' style={{ maxWidth:"120px"}} onClick={() =>AddToCart(
      { title: 'Rich Dad Poor Dad',price: 389,imageUrl: '9781612681139.jpg'}
    )} />
    </div>
    <Card.Content extra>
      <a style={{margin:"10px",}}>Rich Dad Poor Dad</a>
      <div id="div1">
      <p style={{color:"blue"}}>Rs.389</p><p style={{color:"red",textDecoration: 'line-through'}}>Rs.599</p>
      </div>
    </Card.Content>
    
  </Card>
  <Card style={{ maxWidth:"200px",}} >
      <div id="div2">
    <Image src='/9780747585664.jpg' style={{ maxWidth:"120px"}} onClick={() =>AddToCart(
      { title: 'Eat Pray Love',price: 95,imageUrl: '9780747585664.jpg'}
    )} />
    </div>
    <Card.Content extra>
      <a style={{margin:"10px",}}>Eat Pray Love</a>
      <div id="div1">
      <p style={{color:"blue"}}>Rs.95</p><p style={{color:"red",textDecoration: 'line-through'}}>Rs.299</p>
      </div>
    </Card.Content>
    
  </Card>
  <Card style={{ maxWidth:"200px",}} >
      <div id="div2">
    <Image src='/9781310397472.jpg' style={{ maxWidth:"120px"}} onClick={() =>AddToCart(
      { title: 'Dan Brown',price: 472,imageUrl: '9781310397472.jpg'}
    )} />
    </div>
    <Card.Content extra>
      <a style={{margin:"10px",}}>Dan Brown</a>
      <div id="div1">
      <p style={{color:"blue"}}>Rs.472</p><p style={{color:"red",textDecoration: 'line-through'}}>Rs.1197</p>
      </div>
    </Card.Content>
    
  </Card>
  <Card style={{ maxWidth:"200px",}} >
      <div id="div2">
    <Image src='/9781310392900.jpg' style={{ maxWidth:"120px"}}  onClick={() =>AddToCart(
      { title: 'Heather Morrise',price: 518,imageUrl: '9781310392900.jpg'}
    )}/>
    </div>
    <Card.Content extra>
      <a style={{margin:"10px",}}>Heather Morrise</a>
      <div id="div1">
      <p style={{color:"blue"}}>Rs.518</p><p style={{color:"red",textDecoration: 'line-through'}}>Rs.798</p>
      </div>
    </Card.Content>
    
  </Card>
  <Card style={{ maxWidth:"200px",}} >
      <div id="div2">
    <Image src='/9781234567894.jpg' style={{ maxWidth:"120px"}} onClick={() =>AddToCart(
      { title: 'The Hunger Game',price: 449,imageUrl: '9781234567894.jpg'}
    )} />
    </div>
    <Card.Content extra>
      <a style={{margin:"10px",}}>The Hunger Game</a>
      <div id="div1">
      <p style={{color:"blue"}}>Rs.449</p><p style={{color:"red",textDecoration: 'line-through'}}>Rs.1299</p>
      </div>
    </Card.Content>
    
  </Card>
  <Card style={{ maxWidth:"200px",}} >
      <div id="div2">
    <Image src='/9788172234980.jpg' style={{ maxWidth:"120px"}}  onClick={() =>AddToCart(
      { title: 'The Alchemist ',price: 259,imageUrl: '9788172234980.jpg'}
    )}/>
    </div>
    <Card.Content extra>
      <a style={{margin:"10px",}}>The Alchemist</a>
      <div id="div1">
      <p style={{color:"blue"}}>Rs.259</p><p style={{color:"red",textDecoration: 'line-through'}}>Rs.399</p>
      </div>
    </Card.Content>
    
  </Card>
  </Segment>
    <Footer/>
</div>
    )
}
export default Home;