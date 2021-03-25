import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MaleDefaultImage from '../css/img/male_default.jpg';
import axios from 'axios';
import cookie from 'js-cookie';
import {connect} from 'react-redux';


 class RegisterNewModule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subject_code:'',
            id:props.id,
            module_no:'',
            // Data:this.props.location.state.Data

        }
    }
    
    
    handleForm = (e) => {
        e.preventDefault();
        const data = {
            // id:this.state.id,
            subject_code:this.state.subject_code,
            user_id:this.state.id,
            module_no:this.state.module_no
        }
        console.log(data);

        axios.post("http://localhost:8000/api/student_register_module", data)
        .then(res => {
            // cookie.set('token', res.data.access_token);
            // this.props.setLogin(res.data.user);
            console.log(res.data);
            this.props.history.push('/teacher_profile');
            
        })
        .catch(e => this.setState({errors: e.response.data.errors}))

       
        
    };

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})
    }



    render() {
        return (
            <main className="main-expand">
                <div>
                    <div className="text-center">
                        <div className="text-center jumbotron jumbotron-fluid">
                        <form className="text-center" method="POST" onSubmit={this.handleForm}>
                                    <h4><h1>Register For New Module </h1><br/>
                                    </h4>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Subject Code :</label>
                                            <input type="text" className="form-control" id="validationServer01" name="subject_code" onChange={this.handleInput} required />
                                        </div>                                       
                                        
                                        <div className="col-md-3 mb-3">
                                            <input type="hidden" className="form-control" id="validationServer01" name="user_id" onChange={this.handleInput} value={this.state.id} required />
                                            

                                            <label htmlFor="validationServer01">Module No :</label>
                                            {/* <input type="text" className="form-control" id="" name="id" onChange={this.handleInput}  required /> */}
                                            <input type="text" className="form-control" id="validationServer01" name="module_no" onChange={this.handleInput} required />
                                        </div>
                                        
                                    </div>                           


                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-primary " type="submit">Submit</button>
                                        
                                    </div>
                                    
                            </form>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row col-12">
                    <div className="text-right left_btn col-4">
                    </div>
                    <div className="col-4"></div>
                </div>
            </main>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        id:state.auth.user.id,
        // subject_code:state.auth.subject.subject_code,
        
    };
}

export default connect(mapStateToProps, null)(RegisterNewModule);
