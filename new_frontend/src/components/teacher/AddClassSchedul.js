import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MaleDefaultImage from '../css/img/male_default.jpg';
import axios from 'axios';
import Error from '../user/Error';
import cookie from 'js-cookie';
import {connect} from 'react-redux';
import { BsStopwatchFill } from "react-icons/fa";

 class AddClassSchedul extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // subject_id:'',
            // id:props.id,
            id:props.id,
            subject_code:'',
            study_year:'',
            class_room_id:'',
            date_id:'',
            time_id:'',
            status:'',
            start_date:'',
            end_date:''
            

        }
    }
    
    
    handleForm = (e) => {
        e.preventDefault();
        const data = {
            // id:this.state.id,
            user_id:this.state.id,
            // user_id:this.state.id,
            subject_code:this.state.subject_code,
            study_year:this.state.study_year,
            class_room_id:this.state.class_room_id,
            date_id:this.state.date_id,
            time_id:this.state.time_id,
            status:this.state.status,
            start_date:this.state.start_date,
            end_date:this.state.end_date


        }
        console.log(data);

        axios.post("http://localhost:8000/api/add_class_schedul", data)
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
                                    <h4><h1>Add Class Schedul</h1><br/>
                                    </h4>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                        <input type="hidden" className="form-control" id="validationServer01" name="user_id" onChange={this.handleInput} value={this.state.id} required />
                                        
                                        {/* <input type="text" className="form-control" id="" name="id" onChange={this.handleInput} required /> */}
                                            <label htmlFor="validationServer01">Subject Code :</label>
                                            {/* <input type="text" className="form-control" id="" name="id" onChange={this.handleInput}  required /> */}
                                            <input type="text" className="form-control" id="validationServer01" name="subject_code" onChange={this.handleInput} required />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Study Year:</label>
                                            <input type="text" className="form-control" id="validationServer01" name="study_year" onChange={this.handleInput} required />
                                        </div>                           
                                        
                                    </div>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                        {/* <input type="text" className="form-control" id="" name="id" onChange={this.handleInput} required /> */}
                                            <label htmlFor="validationServer01">Class Room ID :</label>
                                            {/* <input type="text" className="form-control" id="" name="id" onChange={this.handleInput}  required /> */}
                                            <input type="text" className="form-control" id="validationServer01" name="class_room_id" onChange={this.handleInput} required />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Date ID:</label>
                                            <input type="text" className="form-control" id="validationServer01" name="date_id" onChange={this.handleInput} required />
                                        </div>                           
                                        
                                    </div>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                        {/* <input type="text" className="form-control" id="" name="id" onChange={this.handleInput} required /> */}
                                            <label htmlFor="validationServer01">Time ID :</label>
                                            {/* <input type="text" className="form-control" id="" name="id" onChange={this.handleInput}  required /> */}
                                            <input type="text" className="form-control" id="validationServer01" name="time_id" onChange={this.handleInput} required />
                                        </div>
                                        <div className=" col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Status :</label>
                                            <select className="custom-select"   name="status" id="inputGroupSelect01" onChange={this.handleInput}  required>
                                            <option defaultValue>Choose...</option>
                                            <option value="New">New </option>
                                            <option value="Changed">Changed </option>
                                            </select>
                                        </div>                           
                                        
                                    </div>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                        {/* <input type="text" className="form-control" id="" name="id" onChange={this.handleInput} required /> */}
                                            <label htmlFor="validationServer01">Start Date :</label>
                                            {/* <input type="text" className="form-control" id="" name="id" onChange={this.handleInput}  required /> */}
                                            <input type="date" className="form-control" id="validationServer01" name="start_date" onChange={this.handleInput} required />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">End Date:</label>
                                            <input type="date" className="form-control" id="validationServer01" name="end_date" onChange={this.handleInput} required />
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
            </main>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        id:state.auth.user.id,
        
    };
}

export default connect(mapStateToProps, null)(AddClassSchedul);
