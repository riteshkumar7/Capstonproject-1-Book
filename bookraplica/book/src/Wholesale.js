import { useState } from 'react'
import WholeFooter from './WholeFooter';
import { Header, Segment, Icon ,Grid, Image, Rail ,Menu, Dimmer, Card} from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel';


const Wholesale=()=>{

    const [active, setActive] = useState(false);
    const [Active,setSActive] = useState(false);

  const handleShow = () => setActive(true);
  const handleHide = () => setActive(false);

  const handleShow2 = () => setSActive(true);
  const handleHide2 = () => setSActive(false);

  
  
  const content = (
    <div>
      <Header as='h2' inverted>
        Children Book
      </Header>

          </div>
  );
  const content2= (
    <div>
      <Header as='h2' inverted>
        Novels
      </Header>

          </div>
  );
    return(
        <div style={{backgroundColor:"#f3f6ff"}}>
             <Segment clearing style={{margin:"0 0 60px 0"}}>
    <Header as='h1' floated='right'>
    
    <Icon.Group size='large'>

      <Icon name='shop'/>
      <Icon corner='top right' name='add' />
    </Icon.Group>

    </Header>
    <Header as='h2' floated='left'>
      Book
    </Header>
  </Segment>



  <Grid centered columns={4} >
    <Grid.Column style={{width:"570px"}}>
      
      <Carousel >
      <Carousel.Item>
        <img src="922666.webp" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="ws_banner2.jpg" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="ws_banner3.jpg" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="ws_banner4.jpg" />
      </Carousel.Item>
    </Carousel>

        <Rail position='left'>
          
          <Grid.Column>
        <Menu fluid vertical style={{textAlign:"center",fontSize:"18px"}}>
        <Menu.Item style={{ display: "flex", alignItems: "center" }}>
      <img src="./ws-children.png" alt="Children Books" style={{ marginRight: "10px" }} />
       Children Books</Menu.Item>

          <Menu.Item style={{ display: "flex", alignItems: "center" }}>
            <img src="./ws-novels.png" alt="Novels" style={{ marginRight: "10px" }}/>
            Novels</Menu.Item>

          <Menu.Item style={{ display: "flex", alignItems: "center" }}>
            <img src="./ws-crime.png" alt="Crime Thriller" style={{ marginRight: "10px" }}/>
            Crime Thriller</Menu.Item>


          <Menu.Item style={{ display: "flex", alignItems: "center" }}>
            <img src="./ws-young-adult.png" alt="Young Adult" style={{ marginRight: "10px" }}/>
            Young Adult</Menu.Item>

          <Menu.Item style={{ display: "flex", alignItems: "center" }}>
            <img src="./ws-romance.png" alt="Romance" style={{ marginRight: "10px" }}/> 
            Romance</Menu.Item>

          <Menu.Item style={{ display: "flex", alignItems: "center" }}>
            <img src="./ws-classic.png" alt="Classics" style={{ marginRight: "10px" }}/>
            Classics</Menu.Item>

          <Menu.Item style={{ display: "flex", alignItems: "center" }}>
            <img src="./ws-teen-fiction.png" alt="Teen Fiction" style={{ marginRight: "10px" }}/>
            Teen Fiction</Menu.Item>

          <Menu.Item style={{ display: "flex", alignItems: "center" }}>
            <img src="./ws-non-fiction.png" alt="Non-Fiction" style={{ marginRight: "10px" }}/> 
            Non-Fiction</Menu.Item>
          
        </Menu>
      </Grid.Column>

          
        </Rail>

        <Rail position='right'>
          
          <Dimmer.Dimmable
      as={Image}
      dimmed={active}
      dimmer={{ active , content}}
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
      size='medium'
      src='./boy-standing.jpg'
    />
         <Dimmer.Dimmable
      as={Image}
      dimmed={Active}
      dimmer={{ active:Active ,content:content2}}
      onMouseEnter={handleShow2}
      onMouseLeave={handleHide2}
      size='medium'
      src='./ws_sidebanner2.jpg'
    />
          
        </Rail>
      
    </Grid.Column>
  </Grid>
<div style={{display:"flex",padding:"30px"}}>
<Segment style={{marginRight:"40px",marginTop:"15px",width:"300px",height:"180px", textAlign:"center"}}>
    <img src="secure-payment-icon.png"/><br/>
    <b>Secure Payment</b>
</Segment>
<Segment style={{marginRight:"40px",width:"300px",height:"180px",textAlign:"center" }}>
    <img src="worldwide-delivery.png"/><br/>
    <b>Worldwide Delivery</b>
</Segment>
<Segment style={{marginRight:"40px",width:"300px",height:"180px",textAlign:"center"}}>
    <img src="quality-check.png"/><br/>
    <b>Quality Checked</b>
</Segment>
<Segment style={{width:"300px",height:"180px",textAlign:"center"}}>
    <img src="customer-support.png"/><br/>
    <b>365 Days Support</b>
</Segment>
  </div>
  <div>
            <h1 style={{backgroundColor:"#007bff", padding:"20px",display:"flex",color: "white"}}>
                <b>call us for any queries</b>
                <p style={{border:"2px solid white",marginLeft:"600px",width:"290px"}}>+91-8564853040</p>
                </h1>
        </div>
        <WholeFooter/>
        </div>
        
    );
}
export default Wholesale;