import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header () {

    const [isSticky, setSticky] = useState(true);

    const handleScroll = () => {
  
        if (window.pageYOffset > 140) { 
              setSticky(false)   
        }
        else{
            setSticky(true)
        }
    } 
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll); 
      return () => {
        window.removeEventListener('scroll', () => handleScroll);
      };
    }, []);

    const router = useRouter();
    return(
        
        <Navbar bg="tranparent" expand="lg" style={{backgroundColor:'#DCDCDC '}} className={isSticky ? "position-static" : "fixed-top"}>
                <Link href='/'>
                    <Navbar.Brand href="/">Vitor</Navbar.Brand>
                </Link>
                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                    <Link href="/">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Link>
                    <Link href="/about">
                        <Nav.Link href="/about">Sobre</Nav.Link>
                    </Link>
                    <Link href="/contact">
                        <Nav.Link href="/contact">Contato</Nav.Link>
                    </Link>
                    
                    </Nav>
        
                </Navbar.Collapse>
        </Navbar>
    )
} 

export default Header