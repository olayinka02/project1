import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Form, Button, Figure  } from 'react-bootstrap';
import imgg from './image/imgg.svg'



class App extends Component {
  render(){
  return (
    <div className="background">
         <center>
      <div className="formBody">
      <Container>
      <Row>
      <Col className="formBodyx">
            <h2 className="letTalk">Let's talk</h2>
            <p className="info">
            shiloh 2020 God han done encounter,
            I bless the name of God for the program , 
            He has done great things in my life 
            </p>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={3} className="textarea" placeholder="Comment" />
          </Form.Group>
          
          <center>
          <Button variant="outline-info">send message</Button>
          </center>
         
        </Form>
      </Col>
      <Col className="formBodyxx">
        <Figure><center>
          <Figure.Image
           style={{marginLeft:10,}}
            width={191}
            height={210}
            alt="171x180"
            src={imgg}
          /></center>
          <Figure.Caption className="figcap">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>
      </Figure><br/><br/>

      <p className="figcap" ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="rgb(116, 176, 200)" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg> No 3 Aku city,Anthena base (IV) Off Royaldream Mararaba, Abuja.</p>

<p className="figcap"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-text-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
</svg> oluwasegunyinka.samuel@gmail.com</p>

<p  className="figcap"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-inbound-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"/>
</svg> +234-8101831001</p>

<p  className="figcap"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-inbound-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"/>
</svg> +234-7035764622</p>

    
    </Col>
  </Row></Container>
      </div>
      </center>
    </div>
  );
}}

export default App;
