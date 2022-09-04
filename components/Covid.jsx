import Image from 'next/image';
import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Masine from '../static/slike-vedras/offer.png';
import Animation from './Animation';
const About = () => {
return (
  <Animation>
    <section className="section bg-light" id="covidfree">
      <Container >
        <Row xs={1} md={2}>
            <Col className="shadow" style={{paddingBottom: '1.2rem'}}>
                <Image src={Masine} alt="Slika uredjaja" layout="responsive" />
            </Col>
           
           
            <Col className="shadow" style={{textAlign: 'left', display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
            <div style={{paddingLeft: '12.5%', paddingRight: '12.5%', paddingTop: '12.5%'}}>
            <h3 >#covidfree</h3>
            <p >Primjenom Ultraljubičastog svjetla, (ultravioletnog, UV-c), UVD-robot uništava strukturu DNA u svim mikroorganizmima.
            </p>
            <p >Pružamo uslugu čišćenja velikih i malih prostora, uz pomoć robota, koji u najkraćem mogućem roku i autonomno dezinficiraju zatvorene prostore gdje sigurnost i “osjećaj čistoće” mora biti na prvom mjestu.
            </p>
            </div> 
           
            </Col>
           
        </Row>
         
      </Container>
    </section>
    </Animation>
  );
}
export default About;