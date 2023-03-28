import React , {Component, useState} from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Container } from "react-bootstrap";



/*const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
    return(
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

    )
}*/



export default class Idopontfoglalas extends Component{
    render(){
        return(
            <Container>
            <form className="rgblog">
            <div className="form-bok"></div>
            <h1>Sing in</h1>
            <div className="mb-3">
                <label>Email cím</label>
                <input 
                type="email"
                className="form-control"
                placeholder="Enter email"
                />
            </div>
            <div className="mb-3">
                <label>Jelszó</label>
                <input 
                type="password"
                className="form-control"
                placeholder="Enter password" 
                />
                </div>

                <div className="mb-3">
                    <div className="custom-control-input"
                    id="customCheck1" />
                    <label className="custom-control-label" htmlFor="costumCheck1" style={{color:'red'}}>
                        Emlékez rám
                    </label>
                </div>
                <div className="d-grid">
                    <button type="button" style={{backgroundColor:'lightblue', color:'black'}}>Regisztráció</button>
                </div>
                <p className="forgot-password text-right" style={{color:'black'}}>
                    Elfelejett <a href="#">jelszó?</a>
                </p>
                    
        </form>
            </Container>
        )
    }
}