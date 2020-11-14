import '../styles/globals.css'
import Header from '../components/Header/Header.js'
import Footer from '../components/Footer/Footer.js'

import Container from 'react-bootstrap/Container'

import 'bootstrap/dist/css/bootstrap.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function MyApp({ Component, pageProps }) {
  return (
    <Container className="p-0" fluid={true}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </Container>
  )
}

export default MyApp
