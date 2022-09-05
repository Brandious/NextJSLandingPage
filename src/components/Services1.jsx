
import Image from 'next/image';
import React from 'react';
import { Row, Col } from "reactstrap";
import Animation from './Animation';

import Service1 from '../static/slike-vedras/service1.jpg';
import Service2 from '../static/slike-vedras/service2.jpg';


const FeatureBox = (props) => {


    return (
        <>
            {
                props.features.map((feature, key) =>
                    (feature.id % 2 !== 0) ?
                        <Row sm={1} md={2} key={key} className={"section1 d-flex align-items-center flex-sm-column-reverse flex-md-row justify-content-around"} >
                            <Animation>
                                <Col>
                                    <Image src={feature.img} layout="responsive" width="100vw" height="100vh" alt="" className="image1" />

                                </Col>
                            </Animation>
                            <Animation>
                                <Col>
                                    <div className="mt-5 mt-sm-0 mb-4 text-align-center">

                                        <h2 className="text-white font-weight-normal mb-3 pt-3">{feature.title}</h2>
                                        <div className="text-muted mb-3 f-15">{(typeof feature.desc === 'object') ?
                                            <ul>
                                                {feature.desc.map((el, i) =>
                                                    <li key={i}>{el}</li>
                                                )}                </ul>


                                            : feature.desc}</div>
                                        {feature.link !== '' ? <a href={feature.link} className="f-16 text-warning">Preuzmi Brosuru <span className="right-icon ml-2">&#8594;</span></a> : ""}
                                    </div>
                                </Col>
                            </Animation>
                        </Row>
                        :
                        <Row key={key} sm={1} md={2} className="section1 align-items-center">
                            <Col className="align-items-center justify-content-center text-align-center" >
                                <Animation>
                                    <h3 className="text-white font-weight-normal mb-3 pt-3">{feature.title}</h3>
                                    <div className="text-white mb-3 f-15">{(typeof feature.desc === 'object') ?
                                        <ul>
                                            {feature.desc.map((el, i) =>
                                                <li key={i}>{el}</li>
                                            )}                </ul>


                                        : feature.desc}</div>
                                    {feature.link !== '' ? <a href={feature.link} className="f-16 text-white">Preuzmi Brosuru <span className="right-icon ml-2">&#8594;</span></a> : ""}
                                </Animation>
                            </Col>
                            <Col>
                                <Animation>
                                    <Image src={feature.img} layout="responsive" width="100vw" height="100vh" alt="" className="img-fluid image1" />
                                </Animation>

                            </Col>
                        </Row>
                )
            }
        </>
    );
}
const Feature = () => {
    const features = [
        { id: 1, img: Service1.src, title: "Želite vašim klijentima i zaposlenicima pružiti potpuno čist prostor? Kontaktirajte nas odmah, neka vaš prostor bude #covidfree!", desc: "", link: "" },
        {
            id: 2, img: Service2.src, title: "Naše tehničko osoblje spremno je u najkraćem mogućem roku izvršiti uslugu koja uključuje:", desc: ["dopremu UV-dezinfekcijskog robota",
                "mapiranje prostorija predviđenih za dezinfekciju",
                "kontrolu rada tijekom dezinfekcije",
                "otpremu UV-dezinfekcijskog robota"], link: "/"
        }
    ];
    return (

        <section className="newContainer" id="services">

            <FeatureBox features={features} />

        </section>

    );
}
export default Feature;