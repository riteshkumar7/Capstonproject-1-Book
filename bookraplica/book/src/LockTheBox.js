import { Icon, Input, Button, Segment, Header,Modal} from "semantic-ui-react";
import { Card,Card as AntdCard } from 'antd';
import  LockTheBoxFooter from './LockTheBoxFooter'
import { useNavigate } from 'react-router-dom';
import React ,{useState,useEffect} from 'react'


const LockTheBox=()=>{
  const [open, setOpen] = React.useState(false)
  const [bname,setBname]=useState();
  const [price,setPrice]=useState();
  const navigate = useNavigate();
  const [photo, setPhoto] = useState('');
  const [books, setBooks] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');
 



  const AddToCart = (bookData,price) => {
    
    navigate('/Payment',{ state: { bookData, price } }); 
  };

    



  const addBook = () => {
    if (bname && price && photo) {
      const newBook = {
        title: bname,
        price: price,
        imageUrl: photo,
      };
      setBooks([...books, newBook]);
      localStorage.setItem('books', JSON.stringify([...books, newBook]));
      setOpen(false);
    } else {
      
      console.log('Please fill out all fields.');
    }
  };

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  },  []);

  const removeBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  const filteredBooks = books.filter((book) =>
  book.title.toLowerCase().includes(searchQuery.toLowerCase())
);
  
    return(
        <div>
        
        <div style={{height:"80px", backgroundColor:"gold"}}>
        <Icon name="align left" size='big' style={{margin:"20px 40px"}}/>
        <img src="logo-ltb.png"/>
        <Input action={{ icon: 'search' }} 
        placeholder='Search books by author name...' 
        style={{margin:"20px 270px",width:"500px"}}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Icon name="shop" size='big'/>
        </div>
        <div style={{display:"flex",padding:"25px"}}>
        <p style={{margin:"14px"}}><img src="./best-icon-1.png" style={{border:"2px white", borderRadius:"60px 60px 60px 60px",width:"120px",height:"120px"}}/><br/>
        Literature and Fiction</p>
        
        <p style={{margin:"20px"}}><img src="./crime-icon-1.png" style={{border:"2px white", borderRadius:"60px 60px 60px 60px",width:"120px",height:"120px"}}/><br/>
        Crime and Thriller</p>

        <p style={{margin:"20px"}}><img src="./romance-icon-1.png" style={{border:"2px white", borderRadius:"60px 60px 60px 60px",width:"120px",height:"120px"}}/><br/>
        Romance</p> 

        <p style={{margin:"20px"}}><img src="./classic-icon-1.png" style={{border:"2px white", borderRadius:"60px 60px 60px 60px",width:"120px",height:"120px"}}/><br/>
        Classics</p>

        <p style={{margin:"20px"}}><img src="./teen-icon-1.png" style={{border:"2px white", borderRadius:"60px 60px 60px 60px",width:"120px",height:"120px"}}/><br/>
        Teen Fiction</p>

        <p style={{margin:"20px"}}><img src="./nonfiction-icon-1.png" style={{border:"2px white", borderRadius:"60px 60px 60px 60px",width:"120px",height:"120px"}}/><br/>
        Non Fiction</p>

        <p style={{margin:"20px"}}><img src="./young-icon-1.png" style={{border:"2px white", borderRadius:"60px 60px 60px 60px",width:"120px",height:"120px"}}/><br/>
        Young Adult</p>

        <p style={{margin:"20px"}}><img src="./child-icon-1.png" style={{border:"2px white", borderRadius:"60px 60px 60px 60px",width:"120px",height:"120px"}}/><br/>
        Children</p>

        </div>
        <div>
            <img src="banner_134.jpg"/>
        </div>
      
        <Modal
      closeIcon
      open={open}
      trigger={<Button onClick={()=>addBook()} style={{marginLeft:"600px"}}><Icon name='address book' color='teal'/>Add Book</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      style={{height: "335px", marginLeft: "230px", marginTop: "100px"}}
    >
      <Header  style={{ marginLeft: "260px", fontSize: "20px", color: "#263A29", fontFamily: "Times New Roman" }}
      icon="clipboard outline"
    content="Please fill the following details." />
      <Modal.Content>
      <Input type="file" name="" accept="image/*"  onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}/><br/><br/>
      <Input type="text" placeholder="Book Name" onChange={(e)=> setBname(e.target.value)} style={{width:"308px"}}/><br/><br/>
      <Input type="text" placeholder="Price" onChange={(e)=> setPrice(e.target.value)} style={{width:"308px"}}/>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
    
        <Segment style={{ display: 'flex', flexWrap: 'wrap', gap: '8px'}} >
        
        <Card hoverable style={{ width: "200px" ,margin:"0 20px"}}
    cover={<img alt="example" src="9781857992915.jpg"/>}
>
    <b>Sophine World</b>
    <Button style={{backgroundColor:"orange"}}  onClick={()=>AddToCart(
      { title: 'Sophine World',price: 299,imageUrl: '9781857992915.jpg'}
      )}>Add To Card</Button>
  </Card>
 
 
  <Card hoverable style={{ width: "200px" ,margin:"0 20px"}}
    cover={<img alt="example" src="9781784709082.jpg"/>}
>
    <b>Knife Harry Hole #12</b>
    <Button style={{backgroundColor:"orange"}} onClick={()=>AddToCart(
      { title: 'Knife Harry Hole #12',price: 349,imageUrl: '9781784709082.jpg'}
      )}>Add To Card</Button>
  </Card>


  <Card hoverable style={{ width: "200px" ,margin:"0 20px"}}
    cover={<img alt="example" src="9780575400184.jpg"/>}
>
    <b>High Fidelity</b>
    <Button style={{backgroundColor:"orange"}} onClick={()=>AddToCart(
      { title: 'High Fidelity',price: 199,imageUrl: '9780575400184.jpg'}
      )}>Add To Card</Button>
  </Card>


  <Card hoverable style={{ width: "200px",margin:"0 20px" }}
    cover={<img alt="example" src="9781405005807.jpg"/>}
>
    <b>Quest</b>
    <Button style={{backgroundColor:"orange"}} onClick={()=>AddToCart(
      { title: 'Quest',price:289,imageUrl: '9781405005807.jpg'}
      )}>Add To Card</Button>
  </Card>


   <Card hoverable style={{ width: "200px" ,margin:"0 20px"}}
    cover={<img alt="example" src="9789386050304.jpg"/>}
>
    <b>A Season for Martyrs</b>
    <Button style={{backgroundColor:"orange"}} onClick={()=>AddToCart(
      { title: 'A Season for Martyrs',price: 659,imageUrl: '9789386050304.jpg'}
      )}>Add To Card</Button>
  </Card>


  <Card hoverable style={{ width: "200px" ,margin:"0 20px"}}
    cover={<img alt="example" src="9781405462952.jpg"/>}
>
    <b>Snow White and the Seven Dwarves</b>
    <Button style={{backgroundColor:"orange"}} onClick={()=>AddToCart(
      { title: 'Snow White and the Seven Dwarves',price: 99,imageUrl: '9781405462952.jpg'}
      )}>Add To Card</Button>
  </Card>


  <Card hoverable style={{ width: "200px" ,margin:"0 20px"}}
    cover={<img alt="example" src="9780721495989.jpg" style={{height:"270px"}}/>}
>
    <b>The Night Before Christmas</b>
    <Button style={{backgroundColor:"orange"}} onClick={()=>AddToCart(
      { title: 'The Night Before Christmas',price: 499,imageUrl: '9780721495989.jpg'}
      )}>Add To Card</Button>
  </Card>


  <Card hoverable style={{ width: "200px" ,margin:"0 20px"}}
    cover={<img alt="example" src="9781842556252.jpg"/>}
>
    <b>Horrid Henry's Annual 2008</b>
    <Button style={{backgroundColor:"orange"}} onClick={()=>AddToCart(
      { title: 'Horrid Henrys Annual 2008',price: 349,imageUrl: '9781842556252.jpg'}
      )}>Add To Card</Button>
  </Card>


  <Card hoverable style={{ width: "200px" ,margin:"0 20px"}}
    cover={<img alt="example" src="9780192732309.jpg"/>}
>
    <b>Happy Birthday, Winnie</b>
    <Button style={{backgroundColor:"orange"}} onClick={()=>AddToCart(
      { title: 'Happy Birthday, Winnie',price: 429,imageUrl: '9780192732309.jpg'}
      )}>Add To Card</Button>
  </Card>


  <Card hoverable style={{ width: "200px" ,margin:"0 20px"}}
    cover={<img alt="example" src="9781472109798.jpg"/>}
>
    <b>We're Going on a Bar Hunt</b>
    <Button style={{backgroundColor:"orange"}} onClick={()=>AddToCart(
      { title: 'We are Going on a Bar Hunt',price: 179,imageUrl: '9781472109798.jpg'}
      )}>Add To Card</Button>
  </Card>


  <Card hoverable style={{ width: "200px" ,margin:"0 20px"}}
    cover={<img alt="example" src="9781406328073.jpg"/>}
>
    <b>Bravest Ever Bear</b>
    <Button style={{backgroundColor:"orange"}} onClick={()=>AddToCart(
      { title: 'Bravest Ever Bear',price: 619,imageUrl: '9781406328073.jpg'}
      )}>Add To Card</Button>
  </Card>


  <Card hoverable style={{ width: "200px" ,margin:"0 20px"}}
    cover={<img alt="example" src="9781472325242.jpg" style={{height:"300px"}}/>}
>
    <b>Disney Frozen</b>
    <Button style={{backgroundColor:"orange"}} onClick={()=>AddToCart(
      { title: 'Disney Frozen',price: 369,imageUrl: '9781472325242.jpg'}
      )}>Add To Card</Button>
  </Card>


  <Card hoverable style={{ width: "200px" ,margin:"0 20px"}}
    cover={<img alt="example" src="9780230747722.jpg" style={{height:"310px"}}/>}
>
    <b>Dear Zoo</b>
    <Button style={{backgroundColor:"orange"}} onClick={()=>AddToCart(
      { title: 'Dear Zoo',price: 859,imageUrl: '9780230747722.jpg'}
      )}>Add To Card</Button>
  </Card>

  
  <Card hoverable style={{ width: "200px" ,margin:"0 20px"}}
    cover={<img alt="example" src="9781407144306.jpg"/>}
>
    <b>Horrible Histories Annual 2015 Horrible Histories Annuals</b>
    <Button style={{backgroundColor:"orange"}} onClick={()=>AddToCart(
      { title: 'Horrible Histories Annual 2015 Horrible Histories Annuals',price: 719,imageUrl: '9781407144306.jpg'}
      )}>Add To Card</Button>
  </Card>

  
  <Card hoverable style={{ width: "200px" ,margin:"0 20px"}}
    cover={<img alt="example" src="9780862836788.jpg"/>}
>
    <b>COLOUR LIBRARY BOOK OF GREAT BRITISH WRITERS.</b>
    <Button style={{backgroundColor:"orange"}} onClick={()=>AddToCart(
      { title: 'COLOUR LIBRARY BOOK OF GREAT BRITISH WRITERS',price: 459,imageUrl: '9780862836788.jpg'}
      )}>Add To Card</Button>
  </Card>

  {filteredBooks.map((book, index) => (
  <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <AntdCard hoverable style={{ width: '200px', marginRight: '20px' }} cover={<img alt='example' src={book.imageUrl} />}>
      <br/><br/>
      <b>{book.title}</b>
      <br/>
      <Button style={{ backgroundColor: 'orange' }} onClick={() => AddToCart(book)}>
        Add To Card
      </Button>
      <Icon name='remove'  color='teal' onClick={() => removeBook(index)}/>
    </AntdCard>
  </div>
))}

        </Segment>
       <div> <LockTheBoxFooter/></div>
        </div>
    );
}
export default LockTheBox;