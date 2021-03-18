import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MaleDefaultImage from '../css/img/male_default.jpg';
import axios from 'axios';
import cookie from 'js-cookie';
import {connect} from 'react-redux';

// create architecture project
 class AddLectureMatireal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // id:'',
            module_name:'',
            module_no:'',
            module_description:'',
            module_upload_date:'',
            module_upload_file:''

        }
    }
    
    
    handleForm = (e) => {
        e.preventDefault();
        const data = {
            // id:this.state.id,

            module_name:this.state.module_name,
            module_no:this.state.module_no,
            module_description:this.state.module_description,
            module_upload_date:this.state.module_upload_date,
            module_upload_file:this.state.module_upload_file
        }
        console.log(data);

        axios.post("http://localhost:8000/api/addmodule", data)
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
                                    <h4><h1>Add New Module </h1><br/>
                                    </h4>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Module Name :</label>
                                            {/* <input type="text" className="form-control" id="" name="id" onChange={this.handleInput}  required /> */}
                                            <input type="text" className="form-control" id="validationServer01" name="module_name" onChange={this.handleInput} required />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Module Number :</label>
                                            <input type="text" className="form-control" id="validationServer01" name="module_no" onChange={this.handleInput} required />
                                        </div>                                       
                                        
                                    </div>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Module Description :</label>
                                            <input type="hidden" className="form-control" id="" name="id" onChange={this.handleInput} value={this.state.id} required />
                                            <input type="text" className="form-control" id="validationServer01" name="module_description" onChange={this.handleInput} required />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Upload date :</label>
                                            <input type="text" className="form-control" id="validationServer01" name="module_upload_date" onChange={this.handleInput} required />
                                        </div>                                       
                                        
                                    </div>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                        <label htmlFor="validationServer01">Upload file :</label>
                                        <input type="file" name="module_upload_file" onChange={this.handleInput} required/>
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
        // id:state.auth.user.id,
        
    };
}

export default connect(mapStateToProps, null)(AddLectureMatireal);
