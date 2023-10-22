import { Divider, } from 'semantic-ui-react';
import {  Icon,Image} from 'semantic-ui-react'
const LockTheBoxFooter = () => {
    return (
        <div>
        <div className="mainFooter" style={{ backgroundColor: "#343a40" }}>
            <div className="container text-center">
             <div className="row">

                    <div className="col" style={{ textAlign: "left" }}>
                        <div>
                            <h4 style={{ marginTop: "15px",color:"white" }}>CUSTOMER SERVICES</h4>
                            <p style={{color:"white" }}>About Lock The Box<br/>
                               How It Works?<br/>
                               Upcoming Events<br/>
                               FAQs<br/>
                               Feedback</p>
                  
            </div>
                    </div>

                    <div className="col" style={{ textAlign: "left" }}>
                        <div>
                            <h4 style={{ marginTop: "15px",color:"white" }}>CONTACT US</h4>
                            <p style={{color:"white"}}>WhatsApp Us <a href="" style={{textDecoration:"none"}}>9050111218</a><br/>
                            Call Us <a href='' style={{textDecoration:"none"}}>9050111218</a></p>
                            
                             
            </div>
                    </div>

                    <div className="col" style={{ textAlign: "left" }}>
                        <div>
                            <h4 style={{ marginTop: "15px",color:"white" }}>SOCIAL PRESENCE</h4>
                            <p style={{color:"white"}}><Icon name='facebook square' /><Icon name='twitter' /><Icon name='instagram' /><Icon name='whatsapp' /></p>
                         <p style={{color:"white"}}>DOWNLOAD APP</p>
                         <img src="./play-store.png" />
            </div>
                    </div>


            <Divider fitted  style={{marginTop:"50px",backgroundColor:"white"}}/>
            <div style={{marginTop:"10px" ,padding:"15px" }}>
            <span style={{marginRight:"20px" ,color:"white"}}>Term and Conditions </span>|<span style={{marginRight:"250px", marginLeft:"20px",color:"white"}}> Privacy Policy</span>
            <span style={{ fontSize: "14px",color:"white"}}> 2023 © BookChor Literary Solutions Private Limited. ALL Rights Reserved.</span>
            </div>
           </div>
            </div>
        </div>
</div>  
    );
}

export default LockTheBoxFooter;
