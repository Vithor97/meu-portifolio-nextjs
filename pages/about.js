import {Container, Row, Col, Image} from 'react-bootstrap'
function About() {

  
  const angular = './images/angularLogo.png'
  const react = './images/reactLogo.png'
  const firebase = './images/firebaseLogo.png'
  const java = './images/java-logo.png'
    return( 
      <Container fluid={true}  className="aboutContainer " style={{backgroundColor: '#E7E5DD '}}> 
      <Row>
        <Col sm={4} className="d-flex justify-content-center">
          <Image style={{height: '500px', width: '300px', padding: '10px', paddingTop: '15px'}}  src="/images/profile.jpg" rounded fluid/>
        </Col>

        <Col  sm={8}>
                  <h1 className="border-bottom border-dark d-flex justify-content-center">Aboute me</h1>
                  <p>Olá, meu nome é vitor. Sou um desenvolvedor de sistemas, graduado em Análise e Desenvolvimento de Sistemas pela Fatec Carapicuíba.</p>

<p>Estou sempre curioso aprendendo novas tecnologias. Atualmente aumentando os conhecimentos em React, Angular,  NextJS e NodeJS.</p>

<p>Possuo experiência em Java, Cobol, JavaScript moderno, TypeScript, NodeJs Oracle SQL, Firebase, MongoDB e MySQL; 
Ferramentas de desenvolvimento WEB como: JSF, Angular, React, React-native.
Conhecimentos em controles de versionamento: SVN e GIT</p>

<p>Quando não estou aprendendo novas coisas gosto de jogar video game, ouvir músicas, ouvir podcast, conhecer novos lugares.</p>

<p>Este site foi feito em NextJS com React.</p>

        <Row  style={{paddingTop: '145px'}}>
          <Col className="d-flex justify-content-center  m-1">
            <Image style={{height: '60px', width: '70px'}}  
            src={react}
            rounded
            />
          </Col>
          <Col className="d-flex justify-content-center  m-1">
          <Image style={{height: '60px', width: '70px'}}  
            src={angular}
            rounded
            />
          </Col>
          <Col className="d-flex justify-content-center m-1">
          <Image style={{height: '60px', width: '70px'}}  
            src={java}
            rounded
            />
          </Col>
          <Col className="d-flex justify-content-center m-1 ">
          <Image style={{height: '65px', width: '85px'}}  
            src={firebase}
            rounded
            />
          </Col>
  
        </Row>
        </Col>
        
      </Row>
     


      </Container>
    )
  }
  
  export default About