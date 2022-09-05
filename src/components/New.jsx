import Image from 'next/image';
import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Masine from '../static/slike-vedras/offer.png';
import Animation from './Animation';

const New = () => {
return (

    <section className="section newContainer" id="new">
      <Container >
        <Row xs={1} md={2}>
        <Animation>
            <Col style={{color: "white"}}>
                <h3 style={{fontWeight: '800'}}>Novo u nasoj ponudi!</h3>
                <p>Robotska dezinfekcija i sterilizacija prostora s primjenom u:</p>
                <ul style={{fontWeight: '800'}}>
                    <li>Turizmu (hoteli, apartmani, kuće za odmor, mobilne kućice...)</li>
                    <li>Industriji (tvornice, skladišta, pogoni...)</li>
                    <li>Javnim mjestima (domovi zdravlja, vrtići, škole, fakulteti, uredi, zračne luke, kolodvori, fitness dvorane, šoping centri...)</li>
                </ul>
                <p>Roboti konstruirani za čišćenje operacijskih sala i laboratorija, sada dezinficiraju vaše poslovne i privatne prostore.</p>
                <a href="https://uvd.blue-ocean-robotics.com/" style={{fontWeight: '800'}}>Vise Detalja o UVD Robots</a>
            </Col>
            </Animation>
            <Animation>
            <Col>
                <Image src={Masine} alt="Slika uredjaja" />
            </Col>
            </Animation>
        </Row>
         
      </Container>
    </section>
  );
}
export default New;