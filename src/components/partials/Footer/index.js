import React from 'react';
import { Link } from 'react-router-dom';
import { FooterArea } from './styled';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../../assets/imgs/google-play-badge.png'

const Footer = () => {
    return (
        <Container fluid>
        <FooterArea>
            <hr className="line-footer" />
             <Row>
                <Col className="text-left ml-5">Termo de Uso <br />
                    Política de Privacidade
                </Col>
                <Col className="text-center">               
                <img src={Logo} className="logo-play" alt="Logo play" />      
                </Col>
                <Col>
                    <Link to="/" className="mr-2"><FontAwesomeIcon icon={faInstagram} size="2x" /></Link>
                    <Link to="/" className="mr-2"><FontAwesomeIcon icon={faFacebook} size="2x" /></Link>
                    <Link to="/"><FontAwesomeIcon icon={faYoutube} size="2x" /></Link>
                    <div className="mt-2">contato@netlibras.com.br</div>
                </Col>
            </Row>
        </FooterArea>
        <footer className="d-flex justify-content-center text-white mt-3">
Todos os direitos reservados | Desenvolvido por Milani Designer
</footer>
        </Container>
    );
}

export default Footer;