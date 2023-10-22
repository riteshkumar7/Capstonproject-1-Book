import { Divider, Segment} from 'semantic-ui-react';
import {  Input ,Label,Image} from 'semantic-ui-react'
const Footer = () => {
    return (
        <div>
        <div className="mainFooter" style={{ backgroundColor: "#b0b0b0" }}>
            <div className="container text-center">
             <div className="row">
                
            <div className="col" style={{ textAlign: "left" }}>
            <div>
            <h5 style={{ marginTop: "15px" }}>ABOUT US</h5>
                            <hr></hr>
        <p><a href=''>Contect Us</a></p>
        <p><a href=''>About Us</a></p>
        <p><a href=''>Careers</a></p>
        <p><a href=''>Bookchor Stories</a></p>
        <p><a href=''>Press & News</a></p>
        <p><a href=''>Bookchor Wholesale</a></p>
        <p><a href=''>Influencer Program</a></p>
                        </div>
                    </div>

                    <div className="col" style={{ textAlign: "left" }}>
                        <div>
                            <h5 style={{ marginTop: "15px" }}>QUICK HELP</h5>
                            <hr></hr>
      <p><a href=''>Help & Support</a></p>
           <p><a href=''>Shipping Costs</a></p>
            <p><a href=''>Cancellation & Returns</a></p>
           <p><a href=''>FAQ</a></p>
        <p><a href=''>Blog</a></p>
        <p><a href=''>Our Coupon Partners</a></p>
                        </div>
                    </div>

                    <div className="col" style={{ textAlign: "left" }}>
                        <div>
                            <h5 style={{ marginTop: "15px" }}>CONSUMER POLICY</h5>
                            <hr></hr>
         <p><a href=''>Return Policy</a></p>
        <p><a href=''>Shipping Policies</a></p>
        <p><a href=''>Terms Of Use</a></p>
       <p><a href=''>Privacy</a></p>
                        </div>
                    </div>

                    <div className="col" style={{ textAlign: "left" }}>
                        <div>
                            <h5 style={{ marginTop: "15px" }}>FOLLOW US</h5>
                            <hr></hr>
           <p><a href=''>Instagram</a></p>
        <p><a href=''>Facebook</a></p>
       <p><a href=''>Twitter</a></p>
   <p><a href=''>You Tube</a></p>
       <p><a href=''>Linkedin</a></p>
        <p><a href=''>Whatsapp</a></p>
                        </div>
                    </div>

                    <div className="col" style={{ textAlign: "left" }}>
                        <div>
                            <h5 style={{ marginTop: "15px" }}>OUR SHOP ADDRESS:</h5>
                            <hr></hr>
            <p>BOOK.COM</p>
            <p>The Last page,</p>
            <p>Municipal No 50, The Basement near Brigade School J. P. Nagar Bengaluru,</p>
            <p>Prayagraj 211016</p>
            <p>P:+91-0123456789</p>
           <p><a href=''>Email: cs@book.com</a></p>
            </div>
                    </div>
                    <Divider fitted  style={{marginTop:"10px"}}/>


                    <div style={{margin:"20px 20px"}}>
                <span style={{ marginRight: "20px",fontSize:"20px" }}> NEWSLETTER</span><Input labelPosition='right' type='text' placeholder='youremail@gmail.com'><input />
                    <Label>SUBSCRIBE</Label>
                    </Input>
                    </div>
           </div>
            </div>
        </div>
        <div style={{ display: "flex", alignItems: "center",backgroundColor: "grey" ,padding:"15px"}}>
    <span style={{ fontSize: "14px"}}>2015-2023 © BookChor Literary Solutions Private Limited. ALL Rights Reserved</span>
    <div style={{ marginLeft: "600px", display: "flex", alignItems: "center" }}>
        <Image src="./visa.jpg" size='mini'  style={{ marginRight: "10px" }} />
        <Image src="./MasterCard.jpg" size='mini'  style={{ marginRight: "10px" }}/>
        <Image src="./western-union.jpg" size='mini'  style={{ marginRight: "10px" }}/>
        <Image src="./american-express.jpg" size='mini' />
    </div>
</div>
      </div>  
    );
}

export default Footer;
