import React, {useState} from 'react'
import { Col, Container, Row , Image, Crd, Button} from 'react-bootstrap'
import Card from './Card'
// import devgrub from '/devgrub.png'
// import evverest from '/evverest.png'
// import youtube from '/youtube.png'

function Carousel() {

    const devgrub = './images/devgrub.png'
    const evverest = './images/evverest.png'
    const youtube = './images/youtube.png'

    const [itens, setItens] = useState([
        {
            id: 0,
            title: 'Dev Grub',
            subTitle: 'The cookbook for developers',
            imgSrc: devgrub,
            link: 'https://devgrub.com',
            selected: false
        },
        {
            id: 1,
            title: 'Garrett Love',
            subTitle: 'YouTube channel',
            imgSrc: youtube,
            link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
            selected: false
        },
        {
            id: 2,
            title: 'Evverest',
            subTitle: 'A social network for developers',
            imgSrc: evverest,
            link: 'https://github.com/garrettlove8/evverest',
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
