import React, { Component } from 'react'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import wall_a from '../Shared/Images/wallpaperflare-cropped.jpg';

export class FooterComp extends Component {
    render() {
        return (
            <div>
                
                <br/>
        <div align="center" class="ad">
            <a href="#"><img class='sho' src={wall_a} width="95%" height="350px"/></a>
        </div>
        
<div class="container-fluid mt-2" style={{width:"100%",backgroundColor:"black"}}>
  <footer
          class="text-center text-lg-start text-white"
          style={{backgroundColor:"black"}}
          >
    <div class="container p-4 pb-0">
      <section class="">
        <div class="row">
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>

          <hr class="w-100 clearfix d-md-none" />

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a class="text-white">MDBootstrap</a>
            </p>
            <p>
              <a class="text-white">MDWordPress</a>
            </p>
            <p>
              <a class="text-white">BrandFlow</a>
            </p>
            <p>
              <a class="text-white">Bootstrap Angular</a>
            </p>
          </div>

          <hr class="w-100 clearfix d-md-none" />

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a class="text-white">Your Account</a>
            </p>
            <p>
              <a class="text-white">Become an Affiliate</a>
            </p>
            <p>
              <a class="text-white">Shipping Rates</a>
            </p>
            <p>
              <a class="text-white">Help</a>
            </p>
          </div>

          <hr class="w-100 clearfix d-md-none" />

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
        </div>
      </section>

      <hr class="my-3"/>

      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-lg-8 text-center text-md-start">
            <div class="p-3">
              © 2020 Copyright:
              <a class="text-white" href="https://mdbootstrap.com/"
                 >MDBootstrap.com</a
                >
            </div>
          </div>
          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <a
               class="btn btn-outline-light btn-floating m-1"
               className="text-white"
               role="button"
               ><i class="fab fa-facebook-f"></i
              ></a>

            <a
               class="btn btn-outline-light btn-floating m-1"
               className="text-white"
               role="button"
               ><i class="fab fa-twitter"></i
              ></a>
            <a
               class="btn btn-outline-light btn-floating m-1"
               className="text-white"
               role="button"
               ><i class="fab fa-google"></i
              ></a>

            <a
               class="btn btn-outline-light btn-floating m-1"
               className="text-white"
               role="button"
               ><i class="fab fa-instagram"></i
              ></a>
          </div>
        </div>
      </section>
    </div>
  </footer>
</div>




            </div>
        )
    }
}


export default FooterComp
