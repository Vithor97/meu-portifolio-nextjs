
import Hero from '../components/Hero/Hero.js'

export default function Home() {

  const info ={
    title: 'Be Relentless',
    subTitle: 'Project the make a difference',
    text: 'meus projetos abaixo'
    
  }

  return (
   <Hero title={info.title} subTitle={info.subTitle} text={info.text}/>
  )
}
