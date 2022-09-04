import Image from 'next/image';
import React from 'react';
import { Container, Row, Col } from "reactstrap";
import UvdLogo from '../static/slike-vedras/uvd1.png'
import BostonLogo from '../static/slike-vedras/bmc1.png'
import Strojevi from '../static/slike-vedras/strojevi.png';

import Animation from './Animation';
const About = () => {
return (

  
    <section className="section bg-light" id="about">
      <Container>
      <Animation>
        <Row className="justify-content-center align-items-center" xs={1} md={6} >
          <Col lg={6} md={6}>
            <div className="title text-center">
              <h3 className="font-weight-normal text-dark">About <span className="text-primary">Us</span></h3>
              <p className="text-muted " style={{textAlign: 'left'}}>U jeku trenutne situacije sa Covid19, naša je “event” branša potpuno zaustavljena. Zaista teško predviđamo početak velikih okupljanja i zabava kave priliče ljetu na kakvog smo navikli. Unatoč privremenoj stanci cijele event industrije, Vedras ne želi stajati po strani i čekati da se ova pandemija sama od sebe završi, već smo kao što to uvijek činimo, krenuli u nove pothvate i pobjede. Ovoga puta predstavljamo nešto sasvim novo, nešto što nije povezano sa našim uobičajenim poslovanjem. Predstavljamo nešto što će nam pomoći u borbi protiv ove pandemije i učiniti da se svi što prije vratimo normalnom životu.</p>
            </div>
          </Col>

          <Col lg={6} md={6}>
            <div>
                <Image src={Strojevi} alt="Strojevi" layout="responsive"/>
                <div className="textWithBackground" style={{display: 'flex', alignItems: 'center'}}>
                    <p className="textForBackground">UBIJA 99,99% MIKROORGANIZAMA </p>
                </div>
            </div>
          </Col>
        </Row>
        </Animation>
        <Animation>
        <Row md={3} sm={1} lg={3} style={{display: 'flex', alignItems: 'center', paddingTop: '4rem', justifyContent: "space-around"}}>
          
              <Col md={3}>
               <Image src={UvdLogo} alt="uvdLogo"/>
              </Col>
              <Col md={3}>
                <Image src={BostonLogo} alt="Boston logo"/>
              </Col>
              <Col md={3}>
              Vedras d.o.o. Vas ovim putem želi informirati o dostupnosti autonomnog UV-dezinfekcijskog robota tvrtke Blue Ocean Robotics.
              </Col>
            </Row>
            </Animation>
      </Container>
    </section>

  );
}
export default About;