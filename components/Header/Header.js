import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import styles from './Header.module.css'

function Header () {

    const router = useRouter();
    return(

        <Navbar bg="tranparent" expand="lg" className='border-bottom '>
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