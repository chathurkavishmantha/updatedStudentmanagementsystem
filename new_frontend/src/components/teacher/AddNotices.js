import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MaleDefaultImage from '../css/img/male_default.jpg';
import axios from 'axios';
import Error from '../user/Error';
import cookie from 'js-cookie';
import {connect} from 'react-redux';


 class AddNotices extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // subject_id:'',
            id:props.id,
            subject_name:'',
            notice_date:'',
            study_year:'',
            about_notice:''
            

        }
    }
    
    
    handleForm = (e) => {
        e.preventDefault();
        const data = {
            // id:this.state.id,
            user_id:this.state.id,
            subject_name:this.state.subject_name,
            notice_date:this.state.notice_date,
            study_year:this.state.study_year,
            about_notice:this.state.about_notice
        }
        console.log(data);

        axios.post("http://localhost:8000/api/add_notice", data)
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
                                    <h4><h1>Add Notice</h1><br/>
                                    </h4>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                        {/* <input type="text" className="form-control" id="" name="id" onChange={this.handleInput} required /> */}
                                            <label htmlFor="validationServer01">Subject Name :</label>
                                            {/* <input type="text" className="form-control" id="" name="id" onChange={this.handleInput}  required /> */}
                                            <input type="text" className="form-control" id="validationServer01" name="subject_name" onChange={this.handleInput} required />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Notice Date:</label>
                                            <input type="date" className="form-control" id="validationServer01" name="notice_date" onChange={this.handleInput} required />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">About the notices:</label>
                                            <input type="text" className="form-control" id="validationServer01" name="about_notice" onChange={this.handleInput} required />
                                        </div>   
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Add relavent Year :</label>
                                            <input type="text" className="form-control" id="validationServer01" name="study_year" onChange={this.handleInput} required />
                                        </div> 
                                            {/* <label htmlFor="validationServer01">id:</label> */}
                                            <input type="hidden" className="form-control" id="validationServer01" name="user_id" onChange={this.handleInput} value={this.state.id} required />
                                                                       
                                        
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
        
    };
}

export default connect(mapStateToProps, null)(AddNotices);
