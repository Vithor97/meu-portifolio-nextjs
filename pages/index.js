
import Hero from '../components/Hero/Hero.js'
import Carousel from '../components/Card/Carousel.js'
import MyImage from '../components/myImage'

export default function Home() {

  const info ={
    title: 'Be Relentless',
    subTitle: 'Project the make a difference',
    text: 'meus projetos abaixo'
    
  }
  return (

    <div>
      <Hero title={info.title} subTitle={info.subTitle} text={info.text}/>
      <Carousel/>
    </div>
   

  
  )
}
