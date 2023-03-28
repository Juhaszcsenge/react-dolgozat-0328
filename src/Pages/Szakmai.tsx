import React , {Component} from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Col, Container, Row } from "react-bootstrap";

export default class Szakmai extends Component{
    render(){
        return(
            <Container>
                <section>
                <Row>
          <Col md={6}>
                <img className="petrik" src="./petrik.jpg" alt="" style={{width:"500px", height:"500px"}}></img>
                </Col>
                <Col md={6}>
               
                <div className="text">
                    <h1>
                        Pro-bono bulik
                    </h1>
                    <ul>
                        <p>Csibeavató, 2021.08.31</p>
                        <p>Karácsonyi bál, 2021. 12. 22.</p>
                        <p>Farsangi mulatság, 2022. 02. 20.</p>
                    </ul>
                    <h1>
                    Professzionális bulik
                </h1>
                <ul>
                    <p>Tanárkarácsony, 2021. 12. 20.</p>
                    <p>Ballagás, 2022. 04. 30.</p>
                </ul>
                </div>
                </Col>
                </Row>
                </section>

            </Container>
        
        )
    }
}