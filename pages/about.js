import {Container, Row, Col, Image} from 'react-bootstrap'
function About() {
    return( 
      <Container fluid={true}  className="aboutContainer " style={{backgroundColor: '#E7E5DD '}}> 
      <Row>
        <Col sm={4} className="d-flex justify-content-center bg-primary " >
          <Image style={{height: '500px', width: '300px', padding: '10px', paddingTop: '15px'}}  src="/images/profile.jpg" rounded fluid/>
        </Col>

        <Col  sm={8} className=" bg-secondary">
                  <h1 className="border-bottom border-dark d-flex justify-content-center">Aboute me</h1>
                  <p>Hello, my name is Garrett. I'm a full stack engineer with experience in Angular, AngularJS, Express JS, Node JS, Oracle SQL, MongoDB, and React.</p>

        <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

        <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

        <p>My latest project, Dev Grub, is a cookbook for developers. You can check it out <a href="https://devgrub.com" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with Angular, MongoDB, Express JS, and Node JS. However, I will be rebuilding it using React in the coming months</p>

        <p>When I'm not learning something new chances are I'm creating some YouTube videos. You can find those <a href="http://www.youtube.com/c/GarrettLove1" target="_blank" rel="noopener noreferrer">here</a></p>

        <Row  className="pt-2">
          <Col className="d-flex justify-content-center bg-primary m-2">
            Imagens
          </Col>
          <Col className="d-flex justify-content-center bg-success m-2">
            Imagens
          </Col>
          <Col className="d-flex justify-content-center bg-danger  m-2 ">
            Imagens
          </Col>
          <Col className="d-flex justify-content-center bg-primary m-2 ">
            Imagens
          </Col>
  
        </Row>
        </Col>
        
      </Row>
     


      </Container>
    )
  }
  
  export default About