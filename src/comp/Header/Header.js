import React from 'react';
import { Navbar, Form,  Button, Nav } from 'react-bootstrap';
import pic from './pic.png';
import style from './navbar.module.css';

function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img className={style.logo} src={pic} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav  className={style.container}>
                   
                    <Form.Control className={style.input1} size="lg" type="text" placeholder="Pakistan" />
                    <Form.Control className={style.input2} size="lg" type="text" placeholder="Find Cars, Mobile Phones and More..." />
                    <Button className={style.btn} variant="primary">&#128269;</Button>
                    </Nav>

                    <Form className={style.left} inline>

                    <Button className={style.navbarLogin} variant="link">Login</Button>
                    <Button className={style.sellBtn} variant="danger">+SELL</Button>
                        
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Header;