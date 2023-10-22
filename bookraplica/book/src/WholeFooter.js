import { Divider, } from 'semantic-ui-react';
import {  Icon,Image} from 'semantic-ui-react'
const WholeFooter = () => {
    return (
        <div>
        <div className="mainFooter" style={{ backgroundColor: "#6c757d" }}>
            <div className="container text-center">
             <div className="row">

                    <div className="col" style={{ textAlign: "left" }}>
                        <div>
                            <h2 style={{ marginTop: "15px",color:"white" }}><b>Get in Touch</b></h2>
                            <hr></hr>
                  <span style={{fontSize:"18px",padding:"15px",color:"white"}}><Icon name='point'/>Bookchor Literary Sol. Pvt. Ltd. Kh.<br/> No- 58/9/7, 12/2 Vill.
                            Dhaturi Near <br/>Murthal Sonipat Haryana- 131039, <br/>
                            India<br/>

                            <Icon name='mail'/>cs@bookchor.com<br/>

                            <Icon name='phone'/>+91-74198-79198 (Whatsapp)
                             </span>
            </div>
                    </div>

                    <div className="col" style={{ textAlign: "left" }}>
                        <div>
                            <h2 style={{ marginTop: "15px",color:"white" }}><b>Follow Us</b></h2>
                            <hr></hr>
                            <p style={{color:"white"}}><Icon name='facebook square' size='huge'/><Icon name='twitter' size='huge'/><Icon name='instagram' size='huge'/></p>
                             
            </div>
                    </div>

                    <div className="col" style={{ textAlign: "left" }}>
                        <div>
                            <h2 style={{ marginTop: "15px",color:"white" }}><b>Company Info</b></h2>
                            <hr></hr>
                         <span style={{fontSize:"18px",padding:"15px",color:"white" }}><Icon name='angle right'/>About Us<br/>
                             <Icon name='angle right'/>Privacy Policy<br/>
                             <Icon name='angle right'/>Term & Conditions</span>
            </div>
                    </div>


            <Divider fitted  style={{marginTop:"30px"}}/>
                <span style={{display: "flex",fontSize:"25px",color:"white"}}><b>We Accept:</b>
            <div style={{ marginLeft: "20px",display: "flex", alignItems: "center" }}>
        <Image src="./visa.jpg" size='mini'  style={{ marginRight: "10px" }} />
        <Image src="./MasterCard.jpg" size='mini'  style={{ marginRight: "10px" }}/>
        <Image src="./western-union.jpg" size='mini'  style={{ marginRight: "10px" }}/>
        <Image src="./american-express.jpg" size='mini'  style={{ marginRight: "450px" }}/>        



    <span style={{display: "flex",fontSize:"25px",color:"white"}}><b>Secured By:</b>
            <div style={{ marginLeft: "20px",display: "flex", alignItems: "center" }}>
        <Image src="./godaddy.svg" size='mini'  style={{ marginRight: "10px",width:"50px" }} />
        <Image src="./norton.svg" size='mini' style={{ marginRight: "10px",width:"50px" }}/>
        <Image src="./ssl.svg" size='mini' style={{ width:"50px" }}/>
        </div>
    </span>
</div>
    </span>









           </div>
            </div>
        </div>
        <div style={{ display: "flex", alignItems: "center",backgroundColor: "#343a40" ,padding:"15px"}}>
    <span style={{ fontSize: "18px", padding:"18px"}}>Copyright © <a href=''>Bookchor Literary Solutions Pvt Ltd.</a> All Rights Reserved</span>
   
</div>
      </div>  
    );
}

export default WholeFooter;
