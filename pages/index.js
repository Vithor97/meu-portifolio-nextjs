
import Hero from '../components/Hero/Hero.js'
import Carousel from '../components/Card/Carousel.js'
import MyImage from '../components/myImage'

export default function Home() {

  const info ={
    title: 'Projetos',
    subTitle: '',
    text: 'Alguns projetos abaixo: '
    
  }
  return (

    <div>
      <Hero title={info.title} subTitle={info.subTitle} text={info.text}/>
      <Carousel/>
    </div>
   

  
  )
}
