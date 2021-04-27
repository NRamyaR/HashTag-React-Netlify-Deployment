import React from 'react';
import Register from './Components/Register'
import logo from './Assets/Img/card_5.png'


class App extends React.Component{
   
    render(){
        return(
            <React.Fragment>
                <div>
                <img src={logo} alt="" className="img-fluid" /> 
               
                </div>
                <Register/>
             <div style={{marginBottom: '200px'}}/>
        </React.Fragment>
        );
    }
} 

export default App;
