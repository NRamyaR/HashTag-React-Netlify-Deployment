import React from 'react';
import Axios from "axios";
class Register extends React.Component{

    constructor(props) {
        super(props)
        this.state= {
            user:{
                firstName:'',
                 lastName:'',
                userName:'',
                email:'',
                password:'',
                TimeZone:'',
                terms:false
            },
            errorMsg:''
           
        }
    }
    componentDidMount(){
        Axios.get('http://134.209.148.76:2000/api/v3/sign-up/talent').then((response)=>{
            console.log(response.data);
           this.setState({
               ...this.state,
               users: response.data
               
           })

        }).catch((error)=>{
           this.setState({
            ...this.state,
               errorMsg: error.message
           })

        })
    }
    updateInput=(event)=>{
        if(event.target.type === 'checkbox')
        {
            this.setState({
            user:{
                ...this.state.user,
                [event.target.name]: event.target.checked
            }  
           }); 
        }
        else{
            this.setState({
                user:{
                    ...this.state.user,
                    [event.target.name]: event.target.value

                }
               
            });

        }
           
    };
    signUp=(event)=>{
        event.preventDefault();
        console.log(this.state);

    }
   
    render(){
        return(
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                        <p className="lead">A Market place for conversations, mentorships and performance</p>
                           <div className="card">
                               <div className='card-header bg-success text-white'>
                                   <p className="h4">Create Your Fan Account</p>
                               </div>
                                   <div className="card-body bg-light">
                                       <form onSubmit={this.signUp}>
                                       <div className="form-group">
                                       <label for="FirstName">FirstName</label>
                                               <input 
                                               name="firstName"
                                               value={this.state.user.firstName}
                                               onChange={this.updateInput}
                                               type="text" className="form-control" placeholder="firstName"/>
                                           </div>
                                           <div className="form-group">
                                           <label for="LastName">LastName</label>
                                               <input 
                                               name="lastName"
                                               value={this.state.user.lastName}
                                               onChange={this.updateInput}
                                               type="text" className="form-control" placeholder="lastName"/>
                                           </div>
                                           <div className="form-group">
                                           <label for="userName">userName</label>
                                               <input 
                                               name="userName"
                                               value={this.state.user.userName}
                                               onChange={this.updateInput}
                                               type="text" className="form-control" placeholder="userName"/>
                                           </div>
                                           <div className="form-group">
                                           <label for="email">email</label>
                                               <input 
                                               name="email"
                                                 value={this.state.user.email}
                                                 onChange={this.updateInput}
                                                 type="email" className="form-control" placeholder="email"/>
                                           </div>
                                           <div className="form-group">
                                           <label for="TimeZone">TimeZone</label>
                                               <select className="form-control" 
                                               name="TimeZone"
                                               value={this.state.designation}
                                               onChange={this.updateInput}
                                               >
                                                   <option value="">PSTBPDT-06:20AM</option>
                                               </select>
                                           </div>
                                           <div className="form-group">
                                           <label for="Password">Password</label>
                                               <input type="Password"
                                               name="password"
                                               value={this.state.user.password}
                                               onChange={this.updateInput}
                                                className="form-control" placeholder="Password"/>
                                           </div>
                                           <div className="form-check">
                                               <input type="checkbox"
                                               name="terms"
                                               onChange={this.updateInput}

                                                className="form-check-input" 
                                                
                                                id="defaultCheck1"/>
                                               <label htmlFor="defaultCheck1" className="form-check-label">
                                                  I agree to the terms and Conditions</label>
                                           </div>
                                           <div className="form-group">
                                               <input type="submit" className="btn btn-success btn-sm" value="SIGN UP"/>
                                           </div>
                                       </form>  
                                   </div> 
                           </div> 
                        </div>
                    </div>
                </div>
           </React.Fragment>
        );
    }
}
export default Register;