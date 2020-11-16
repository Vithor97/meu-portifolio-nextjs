import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import styles from './Header.module.css'

function Header () {

    const [isSticky, setSticky] = useState(true);

    const handleScroll = () => {
        console.log(window.pageYOffset )
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
        
        <Navbar bg="tranparent" expand="lg" className={isSticky ? "position-static" : "fixed-top"}>
           
                <Link href='/'>
                    <Navbar.Brand href="/">Vitor </Navbar.Brand>
                </Link>
                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                    <Link href="/">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Link>
                    <Link href="/about">
                        <Nav.Link href="/about">About</Nav.Link>
                    </Link>
                    <Link href="/contact">
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Link>
                    
                    </Nav>
        
                </Navbar.Collapse>
        </Navbar>
    )
} 

export default Header