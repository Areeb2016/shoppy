import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button, Card, Carousel, Col, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdGlasses, IoMdSearch, IoIosPin } from "react-icons/io";

function App() {
  return (
    <>

    <Navbar>
    <Navbar.Brand style={{color:'gold', fontSize:12, fontWeight:'bold'}} href="#home">Find</Navbar.Brand><Navbar.Brand style={{fontSize:12, fontWeight:'bold', marginLeft:-15, color:'grey'}} href="#home">BookBeuty</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <a style={{color:'gold', fontSize:12, marginRight:15}} href="#listing">List My Business</a>
      </Navbar.Text>
      <Navbar.Text>
        <a style={{fontSize:12, color:'grey'}} href="#login">Login</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>


  <Row style={{marginLeft:0}}>
   
   <Col style={{padding:0}}>
    <Row>
      <div className="col-12 p-5" style={{backgroundColor:'#e39818'}}>
        <p style={{color:'white'}}>Are you a <span style={{color:'black', fontWeight:'bold'}}>BEAUTY</span> professional Or <span style={{color:'black', fontWeight:'bold'}}>BARBER</span>?</p>
        <p style={{color:'white', fontSize:8}}>#1 Appointment booking software for independant professionals</p>
        <div>
          <Button style={{color:'white', backgroundColor:'#ffcc28', fontSize:10, fontWeight:'bold'}} variant="warning">SET UP MY BUSINESS</Button>{' '}
        </div>
        <p style={{color:'white', fontSize:7, marginTop:10}}>30 day free trial. No card required.</p>
      </div>
      
      <div className='text-center col-12 p-4' style={{backgroundColor:'black'}}>
        <p style={{color:'#e39818', fontSize:10, fontWeight:'bold'}}>APPOINTMENT</p>
        <Row>
          <div className="col-6">
            <p style={{fontSize:12, color:'#ffcc28'}}> <IoMdGlasses size={30}/>  Glasses</p>
          </div>
          <div className="col-6">
            <p style={{fontSize:12, color:'grey'}}> <IoMdGlasses size={30}/>  Glasses</p>
          </div>
        </Row>  
        <Row>
          <div className="col-6">
            <p style={{fontSize:12, color:'grey'}}> <IoMdGlasses size={30}/>  Glasses</p>
          </div>
          <div className="col-6">
            <p style={{fontSize:12, color:'grey'}}> <IoMdGlasses size={30}/>  Glasses</p>
          </div>
        </Row>  
        <Row>
          <div className="col-6">
            <p style={{fontSize:12, color:'grey'}}> <IoMdGlasses size={30}/>  Glasses</p>
          </div>
          <div className="col-6">
            <p style={{fontSize:12, color:'grey'}}> <IoMdGlasses size={30}/>  Glasses</p>
          </div>
        </Row> 
        <Row>
          <div className="col-12">
          <p style={{color:'white', fontSize:12}}> <IoMdSearch size={20} color='#ffcc28'/> Lorem ipsum, Lorem</p>
          </div>
        </Row>
        <Row>
          <div className="col-12">
          <p style={{color:'white', fontSize:12}}> <IoIosPin size={20} color='#ffcc28'/> Lorem ipsum, Lorem</p>
          </div>
        </Row>
        
        <div>
        <Button style={{color:'white', backgroundColor:'#ffcc28', fontSize:15, fontWeight:'bold'}} variant="warning" block>S  E  A  R  C  H</Button>{' '}
        </div>
        
      </div>
    </Row>
    </Col>

   <Col md={10} style={{padding:0}}>
      <Carousel>
        <Carousel.Item>
          <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' style={{height:614, width:'100%'}}/>
        </Carousel.Item>
      </Carousel>
   </Col>

  </Row>

  <section>
    <div className='text-center col-12 p-4'>
      <h3 style={{color:'#ffca2b', fontWeight:'bold'}}>How it Works</h3>
      <div>
        
      </div>
    </div>
  </section>

    </>
  );
}

export default App;