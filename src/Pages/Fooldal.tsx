import React , {Component} from "react";
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import {Container} from 'react-bootstrap'

export default class Fooldal extends Component{
    render(){
        return(
            <Container>
                <div className="textarea">
                    <h1>Üdvözöllek DJ Petrik weboldalán!</h1>
                    <p>Válassz a fenti lehetőségek közül!</p>
                </div>
                <div className="img">
                     <img src="./dj.jpg" alt="">
                     </img>
                </div>
            </Container>
            
        )
    }
}

