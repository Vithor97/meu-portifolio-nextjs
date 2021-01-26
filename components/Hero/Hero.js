import React from 'react'
import { Col, Container, Row , Image} from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Hero(props) {
    return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0 ">
        <Container fluid={true} className="p-0" style={{backgroundColor: '#F9F9F9'}}>
            
        <section className="text-center border-bottom pt-5">
            <div >
                <Image style={{width: '322px', height:'322px', objectFit:'fill'}} src="https://media-exp1.licdn.com/dms/image/C4D03AQF1LN-b7Zyv6Q/profile-displayphoto-shrink_200_200/0/1581212728766?e=1617235200&v=beta&t=bTPX1gTjj5AqvHBq5Bhwvs-N0NkgSkdInFwvaWxhB4U" roundedCircle thumbnail/>
                <h1 className="display-5 font-weight-bolder">Vitor Miranda</h1>

                <p className="lead font-weight-light display-8">Software Developer</p>

                <p>
                    <Link href="/contact">
                        <a href="/contact" className="btn btn-dark my-2">Contato</a>
                    </Link>
                </p>
                <div className="justfy-content-center py-5">
                    <a className="mr-2" href="https://github.com/Vithor97" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'github']} size={"2x"} color="black"/>
                    </a>
                    <a href="https://www.linkedin.com/in/vitor-santos-de-miranda-3a68ba124/" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size={"2x"} color="#2867B2"/>
                    </a>
                </div>  
            </div>
        </section>
        </Container>
        <Container fluid={true}>
            <Row className="d-flex justify-content-center py-5 ">
                <Col md={8} sm={12}>
                    {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                    {props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3>}
                    {props.text && <h3 className="lead font-weight-light">{props.text}</h3>}
                </Col>
            </Row>
        </Container>
    </Jumbotron>
    )
}
