import React,{useState} from 'react'
import {Container, Form, Button ,Alert} from 'react-bootstrap'
import axios from 'axios'

function contact() {


    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [emailSent, setEmailSent] = useState(false)

    const [status, setStatus] = useState(0)

   const handleSubmit =  async (event) =>{
      event.preventDefault();


        try {
            const result =  await axios.post('/api/server', { nome: nome, emaill: email, message: message });

            if(result.status === 200){
                setEmailSent(true)
                setStatus(result.status)
                setNome('')
                setEmail('')
                setMessage('')
                setTimeout(()=> {
                    setEmailSent(false)
                }, 5000)
            }
        } 
        catch (e) {
            if (e.response.status === 400) {
                    // .      setEmailSent(false)
                setStatus(e.response.status)
                setTimeout(()=> {
                setStatus(0)
                }, 5000)
            } 
            
        }

    }
    return (
      <div> 
                <h1 className="border-dark d-flex justify-content-center mb-2">Contato</h1>
                <Container className="" style={{paddingBottom: '200px'}}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Nome Completo</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={nome} onChange={e => setNome(e.target.value)} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="message">Menssagem</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="3" value={message} onChange={e => setMessage(e.target.value)} />
                        </Form.Group>


                        <Button className="d-inline-block mb-2" variant="primary" type="submit">
                            Enviar
                        </Button>

                    </Form>
                    
                    {emailSent === true && status === 200 && <Alert  variant="success">Email enviado com sucesso</Alert>}
                    {emailSent === false && status > 200 && <Alert  variant="danger">Email não enviado</Alert>}
                </Container>
            </div>
    )
  }
  
  export default contact