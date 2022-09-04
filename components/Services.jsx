import Image from 'next/image';
import React from 'react';
import { Container, Row, Col, Button } from "reactstrap";

import Service1 from '../static/slike-vedras/service1.jpg';
import Service2 from '../static/slike-vedras/service2.jpg';


const Services = () => {
return (
    <section className="section bg-light" id="services">
      < >
        <Row className="newContainer" xs={1}sm={1} md={2} style={{height: '100vh', width: '100vw' }}> 
            
            <Col>
            <Image src={Service1} alt="service1" layout="responsive" width="20px" height="20px"/>
            </Col>

            <Col style={{textAlign: 'left', flexDirection:'column', justifyContent: 'center'}}>
            <div style={{paddingLeft: '12.5%', paddingRight: '12.5%', color: 'white', fontSize: '3rem', fontWeight:'800'}}>            Želite vašim klijentima i zaposlenicima pružiti potpuno čist prostor? Kontaktirajte nas odmah, neka vaš prostor bude #covidfree!</div>

            </Col>
        </Row>
        <Row className="newContainer" xs={1} sm={1} md={2} style={{height: '100vh', width: '100vw' }}>
            <Col  style={{textAlign: 'left', flexDirection:'column', justifyContent: 'center'}}>
                <div style={{paddingLeft: '12.5%', paddingRight: '12.5%', fontWeight:'800', color: 'white'}}>
            <h3>
                Naše tehničko osoblje spremno je u najkraćem mogućem roku izvršiti uslugu koja uključuje:
            </h3>
            <ul>
                <li>dopremu UV-dezinfekcijskog robota</li>
                <li>mapiranje prostorija predviđenih za dezinfekciju</li>
                <li>kontrolu rada tijekom dezinfekcije</li>
                <li>otpremu UV-dezinfekcijskog robota</li>
            </ul>

            <Button>Preuzmi Brosuru</Button>
            </div>
            </Col>
            <Col>
            <Image src={Service2} alt="service1" layout="responsive" width="20px" height="20px"/>
            </Col>
        </Row>
      </>
    </section>
  );
}
export default Services;