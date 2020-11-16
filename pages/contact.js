import React,{useState} from 'react'
import {Container, Form, Button} from 'react-bootstrap'


function contact() {


    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const  handleChange = (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
          [name]: value
      })
  }
    const handleSubmit = (event) =>{
      event.preventDefault();

      console.log(event.target)

      console.log(`
        Email: ${email},
        Nome: ${nome}
        Menssagem: ${message}
      `)
    }
    return (
      <div>
                <h1 className="border-dark d-flex justify-content-center mb-3">Contato</h1>
                <Container className="" style={{paddingBottom: '200px'}}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={nome} onChange={e => setNome(e.target.value)} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="3" value={message} onChange={e => setMessage(e.target.value)} />
                        </Form.Group>


                        <Button className="d-inline-block" variant="primary" type="submit">
                            Send
                        </Button>


                        {/* {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>} */}
                    </Form>
                </Container>
            </div>
    )
  }
  
  export default contact