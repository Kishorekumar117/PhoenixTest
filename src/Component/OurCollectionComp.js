import React, { Component } from 'react'
import { Button } from 'react-bootstrap';


import cymera from '../Shared/Images/CYMERA_20231111_161122.jpg';
import wall_a from '../Shared/Images/wallpaperflare-cropped.jpg';
import wall_b from '../Shared/Images/wallpaperflare-cropped (1).jpg';
import beads from '../Shared/Images/beads-beautiful-blurred-background-bridal-gown.jpg'
import theam from '../Shared/Images/theams.jpg'
import line from '../Shared/Images/line.png';


export class OurCollectionComp extends Component {
    render() {
        return (
            <div>
                <h3 class="stip">  <img src={line} style={{width:"140px",height:"80px"}} />{" "}OUR COLLECTIONS{" "}  
  <img src={line} style={{width:"140px",height:"80px"}}/></h3>
  
<div class="container mt-2 ">
 
  
  <div class="row">
    <div class="col-md-4 ">
    
  <div class="shows">
  <img src={wall_a} alt="Notebook"/>
  <div class="content">
    <h1 style={{textAlign:'left'}}>Heading</h1>
    <p style={{textAlign:'left'}}>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
  </div>
</div>





      
      </div>
    <div class="col-md-4"> 

  <div class="shows">
  <img src={wall_b} alt="Notebook"/>
  <div class="content">
    <h1 style={{textAlign:'left'}}>Heading</h1>
    <p style={{textAlign:'left'}}>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
  </div>
</div>
  
    
    </div>
    <div class="col-md-4"> 

    <div class="shows">
    <img src={theam} alt="Notebook"/>
    <div class="content">
      <h1 style={{textAlign:'left'}}>Heading</h1>
      <p style={{textAlign:'left'}}>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
    </div>
    </div>

    </div>

 </div>
 </div>

<div class="container mt-3">
 <Button variant="secondary" size="lg" active style={{borderRadius:'0px',width:'420px'}}>
        MORE COLLECTIONS
      </Button>
      </div>
      <h3 class="stip">  <img src={line} style={{width:"140px",height:"80px"}} />{" "}MORE PRODUCT{" "}  
  <img src={line} style={{width:"140px",height:"80px"}}/></h3>

            </div>
        )
    }
}

export default OurCollectionComp
