import Image from 'next/image';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import LogoVedras from '../static/slike-vedras/Group 4.svg';
import Animation from './Animation';

const Hero = () => {
  return (
    <section className="section position-relative hero">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={6}>
            <div className="pr-lg-5" style={{display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'center'}}>

              <Animation>
                <Image src={LogoVedras} alt="Logo" />
              </Animation>
              <hr style={{
          background: 'white',
          color: 'white',
          borderColor: 'white',
          height: '4px',
        }}/>


        <span style={{
            fontWeight: 900,
            fontSize: '2rem',
            color: 'white'
        }}>ON HOLD</span>

<Animation >
  <div className="icons">
<a href="facebook.com">
<FontAwesomeIcon icon={faFacebook} color="white"/>
</a>
<a href="facebook.com">
<FontAwesomeIcon icon={faInstagram} color="white"/>
</a>
<a href="facebook.com">
<FontAwesomeIcon icon={faLinkedin} color="white"/>
</a>
</div>
</Animation>

<div >
<a href="#about"><FontAwesomeIcon icon={faAngleDown} color="white"  className="angleDown"/></a>
</div>
            </div>
          </Col>
         
        </Row>
       
      </Container>

     
    </section>
  );
}
export default Hero;