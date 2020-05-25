import React from 'react';
import { Link } from 'react-router-dom';
import { FooterArea } from './styled';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Logo from '../../../assets/imgs/google-play-badge.png'

const Footer = () => {
    return (
        <Container>
        <FooterArea>
            <hr className="line-footer" />
             <Row>
                <Col className="text-left ml-5">Termo de Uso <br />
                    Política de Privacidade
                </Col>
                <Col className="text-center">
                <ResponsiveEmbed aspectRatio="21by9">
                <img src={Logo} className="logo-play" />
                </ResponsiveEmbed>
                </Col>
                <Col>
                    <Link className="mr-2"><FontAwesomeIcon icon={faInstagram} size="2x" /></Link>
                    <Link className="mr-2"><FontAwesomeIcon icon={faFacebook} size="2x" /></Link>
                    <Link><FontAwesomeIcon icon={faYoutube} size="2x" /></Link>
                    <div className="mt-2">contato@netlibras.com.br</div>
                </Col>
            </Row>
        </FooterArea>
        </Container>
    );
}

export default Footer;