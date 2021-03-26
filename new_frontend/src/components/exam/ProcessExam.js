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
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-header">
                                    <input type="text" className="form-control" id="validationServer01" name="exam_name" onChange={this.handleInput} required />
                                </div>

                                <div class="card-body">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="alert alert-success" role="alert">
                                                    sfs
                                                </div>
                                            </div>
                                        </div>

                                    <form method="POST" action="">
                                            <div class="card mb-3">
                                                <div class="card-header">
                                                    sfaf
                                                </div>
                                
                                                <div class="card-body">
                                                   
                                                        <div class="card mb-3 ">
                                                            <div class="card-header"></div>
                                        
                                                            <div class="card-body">
                                                                <input type="hidden" name="" value=""/>
                                                                
                                                                    <div class="form-check">
                                                                    <p>Please select your gender:</p>
                                                                    <input type="radio" value="Male" name="gender" /> Male
                                                                    <input type="radio" value="Female" name="gender" /> Female
                                                                    <input type="radio" value="Other" name="gender" /> Other
                                                                           
                                                                        
                                                                    </div>
                                                   
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>

                                        <div class="form-group row mb-0">
                                            <div class="col-md-6">
                                                <button type="submit" class="btn btn-primary">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
