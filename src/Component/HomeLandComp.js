import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';

import silvera from '../Shared/Images/silver.jpg';
import animationa from '../Shared/Images/animationa.gif';
export class HomeLandComp extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid mt-5" style={{height:'20px'}}></div>

<div className='container-fluid d-flex justify-content-start'>
  <div className='row d-flex justify-content-start'>
    <div className="col-sm-10 " >
        
        {/* ===================================================== */}
        
        
        <Carousel class="carousel" >
      <Carousel.Item interval={1000}>
      <img src={silvera} alt="Notebook" style={{width:"1140px",textAlign:'left',height:"500px",borderRadius:'20px 0px 0px 20px'}}/>
  <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={silvera} alt="Notebook" style={{width:"1140px",textAlign:'left',height:"500px",borderRadius:'20px 0px 0px 20px'}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={silvera} alt="Notebook" style={{width:"1140px",textAlign:'left',height:"500px",borderRadius:'20px 0px 0px 20px'}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
        
        {/* =================================================================== */}
        
        </div>
    <div className="col-sm-1 ml-1">
        <img src={animationa} alt="Notebook" style={{width:"200px",textAlign:'left',height:"500px",borderRadius:'0px 20px 20px 0px'}}/>
    </div>
  </div>
</div>


            </div>
        )
    }
}

export default HomeLandComp
