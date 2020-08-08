import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import Perfil1 from '../../assets/imgs/perfil01.jpg'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

const Profiles = () => {
    return (
        <Container>
            <h2 className="text-white text-center mb-4 mt-3">Quem está assistindo?</h2>
          <Row md={4}>
      <Col xs={6}>
      <Card>
  <Card.Body>
  <ResponsiveEmbed bsPrefix="embed-responsive">
 <img src={Perfil1} alt="perfil" />
 </ResponsiveEmbed>
  </Card.Body>
</Card>
<div className="text-white text-center mt-2">Nome</div>
    </Col>
    <Col xs={6}>
    <Card>
  <Card.Body>
  <ResponsiveEmbed bsPrefix="embed-responsive">
 <img src={Perfil1} alt="perfil" />
 </ResponsiveEmbed>
  </Card.Body>
</Card>
<div className="text-white text-center mt-2">Nome</div>
    </Col>
    <Col xs={6}>
    <Card>
  <Card.Body>
  <ResponsiveEmbed bsPrefix="embed-responsive">
 <img src={Perfil1} alt="perfil" />
 </ResponsiveEmbed>
  </Card.Body>
</Card>
<div className="text-white text-center mt-2">Nome</div>
    </Col>
    <Col xs={6}>
    <Card>
  <Card.Body>
  <ResponsiveEmbed bsPrefix="embed-responsive">
 <img src={Perfil1} alt="perfil" />
 </ResponsiveEmbed>
  </Card.Body>
</Card>
<div className="text-white text-center mt-2">Nome</div>
    </Col>
    </Row>

</Container>


      
    );
}

export default Profiles;