import React from 'react'
import { Col, Container, Row , Image} from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Hero(props) {
    return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true} className="p-0">
            
        <section className="text-center border-bottom mt-5">
            <div >
                <Image src="https://i.ibb.co/gFfDZtK/jhonatan-copy.jpg" roundedCircle thumbnail/>
                <h1 className="display-5 font-weight-bolder">Vitor Miranda</h1>

                <p className="lead font-weight-light display-8">Software Developer</p>

                <p>
                    <a href="#contato" className="btn btn-dark my-2">Contato</a>
                </p>
                <div className="justfy-content-center py-5">

                    <a className="mr-2" href="https://github.com/Vithor97" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'github']} size="lg" color="black"/>
                    </a>
                    <a href="https://www.linkedin.com/in/vitor-santos-de-miranda-3a68ba124/" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" color="#2867B2"/>
                    </a>
                </div>  
            </div>
        </section>
        </Container>
        <Container fluid={true}>
            <Row className="justfy-content-center ">
                <Col md={8} sm={12}>
                    {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                    {props.subTitle && <h1 className="display-4 font-weight-light">{props.subTitle}</h1>}
                    {props.text && <h1 className="lead font-weight-light">{props.text}</h1>}
                </Col>
            </Row>
        </Container>
    </Jumbotron>
    )
}
