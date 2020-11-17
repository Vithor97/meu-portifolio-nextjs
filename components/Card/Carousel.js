import React, {useState} from 'react'
import { Col, Container, Row , Image, Crd, Button} from 'react-bootstrap'
import Card from './Card'

function Carousel() {

    const airbnband = './images/airbnband.png'
    const whatsClone = './images/whatsClone.png'
    const alurapic = './images/alurapic.png'

    const [itens, setItens] = useState([
        {
            id: 0,
            title: 'AirBnBand - React e Firebase',
            subTitle: 'App para contratação de atrações musicais',
            imgSrc: airbnband,
            link: 'https://github.com/Vithor97/AirBnBand',
            selected: false
        },
        {
            id: 1,
            title: 'WhatsApp Clone',
            subTitle: 'Clone do Whatsapp WEB feito em react',
            imgSrc: whatsClone,
            link: 'https://github.com/Vithor97/whatsappClone-react',
            selected: false
        },
        {
            id: 2,
            title: 'AluraPic',
            subTitle: 'Projeto em angular - Cópia do instagram',
            imgSrc: alurapic,
            link: 'https://github.com/Vithor97/AluraPic',
            selected: false
        },

        
    ])

    const handleCardClick = (id, card) => {
        let items = [...itens];
    
        items[id].selected = items[id].selected ? false : true;
    
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });
    
        setItens(items)
      }
    
    
    const makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => handleCardClick(item.id, e))} key={item.id} />
        })
    }

    return (
        <Container fluid={true}>
            <Row className="justify-content-around pb-5">
                {makeItems(itens)}
               {/* {itens.map(item =>{
                   return (
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.imgSrc} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        {item.subTitle}
                      </Card.Text>
                      <Button variant="primary" onClick={(e) => {
                        e.preventDefault();
                        window.open(item.link, '_blank');
                        }}>Go somewhere
                    </Button>
                    </Card.Body>
                  </Card>
                   )
               })} */}
                
            </Row>
        </Container>
    )
}

export default Carousel
