import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MaleDefaultImage from '../css/img/male_default.jpg';
import axios from 'axios';
import Error from '../user/Error';
import cookie from 'js-cookie';
import {connect} from 'react-redux';


 class CreateQuestions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // subject_id:'',
            id:props.id,
            name:props.name,
            subject_name:'',
            subject_code:''
            
            

        }
    }
    
    
    handleForm = (e) => {
        e.preventDefault();
        const data = {
            // id:this.state.id,
            user_id:this.state.id,
            user_name:this.state.name,
            subject_name:this.state.subject_name,
            subject_code:this.state.subject_code
        }
        console.log(data);

        axios.post("http://localhost:8000/api/register_subject", data)
        .then(res => {
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
                    {/* <h1>{this.state.id}</h1> */}
                    <div className="text-center">
                        <div className="text-center jumbotron jumbotron-fluid">
                        <form className="text-center" method="POST" onSubmit={this.handleForm}>
                                    <h4><h1>Create Questions </h1><br/>
                                    </h4>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className=" col-md-6 mb-3 search_filter_inputs">
                                            <select className="custom-select" name="subject_name" id=""   required>
                                                <option defaultValue>Subject....</option>
                                                <option value="network">Network</option>
                                                <option value="database">Database</option>
                                                <option value="datastructure">DataStructure</option>
                                                <option value="programing">Programing</option>
                                                <option value="cybersecurity">Cyber Security</option>
                                            </select>
                                        {/* </div>
                                        <div className="col-md-6 mb-3 search_filter_inputs"> */}
                                            {/* <input type="text" className="form-control" id="" name="id" onChange={this.handleInput} required /> */}
                                            <label htmlFor="validationServer01">Enter Question:</label>
                                            <textarea type="textarea" className="form-control" id="validationServer01" name="subject_name" onChange={this.handleInput} required />                                        
                                            
                                        </div>   
                                            
                                                {/* <input type="hidden" className="form-control" id="validationServer01" name="user_id" onChange={this.handleInput} value={this.state.id} required />
                                                <input type="hidden" className="form-control" id="validationServer01" name="user_name" onChange={this.handleInput} value={this.state.name} required />
                                                                                */}
                                        
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
        name:state.auth.user.name,
        
    };
}

export default connect(mapStateToProps, null)(CreateQuestions);
