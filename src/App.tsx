import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Component/Header';
import { Routes, Route } from 'react-router-dom';
import Fooldal from './Pages/Fooldal';
import Idopontfoglalas from './Pages/Idopontfoglalas'
import Szakmai from './Pages/Szakmai'
import './App.css';
import Footer from './Component/Footer';


class App extends React.Component{

  render() {
  return  <div>
    <>
    
    <Header />
    <Routes>
           <Route path='/' element={<Fooldal></Fooldal>}></Route>
            <Route path='/tapasztalat' element={<Szakmai></Szakmai>}></Route>
           
            

            <Route path='/idopont' element={<Idopontfoglalas></Idopontfoglalas>}></Route>
        </Routes> 
    </>
   
    <Footer />
  </div>
  
}
}


export default App;
