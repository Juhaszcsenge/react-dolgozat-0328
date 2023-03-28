import React, { Component } from "react";
import {
    MDBFooter,
  
  } from 'mdb-react-ui-kit';
  
   export default class Footer extends Component{
    render(){
        return (
            <MDBFooter className='bg-dark-p3 text-center text-white' style={{backgroundColor: 'black'}}>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
              © 2020 Copyright:
              <a className='text' href='https://mdbootstrap.com/'>
                MDBootstrap.com
              </a>
            </div>
          </MDBFooter>
        );
        }
}
  