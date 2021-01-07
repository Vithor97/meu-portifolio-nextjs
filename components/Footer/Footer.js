import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {



    return (
        <footer className="position-static footerComp" style={{backgroundColor: '#333'}}>
            <Container fluid={true}>
                <Row className="border-top justify-content-center p-3">
                    <Col className="">
                        <div className="text-light">Vitor Miranda</div>
                    </Col>
                    <Col xs={6} className="d-flex  justify-content-center">
                        <a className="mr-2" href="https://github.com/Vithor97" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'github']} size="lg" color="black"/>
                        </a>
                        <a href="https://www.linkedin.com/in/vitor-santos-de-miranda-3a68ba124/" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" color="#2867B2"/>
                        </a>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        <div className="text-light">
                            Este site foi feito por Vitor.
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
 