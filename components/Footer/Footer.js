import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'



function Footer() {



    return (
        <footer className="position-static" style={{backgroundColor: '#333'}}>
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        <div className="text-light">Vitor Miranda</div>
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
 