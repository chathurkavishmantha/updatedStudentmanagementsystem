import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MaleDefaultImage from '../css/img/male_default.jpg';
import axios from 'axios';
import Error from '../user/Error';
import cookie from 'js-cookie';
import {connect} from 'react-redux';


 class CreateExam extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // subject_id:'',
            id:props.id,
            exam_name:'',
            subject_name:'',   
            get_exam_data:[]        
            

        }
    }
    
    
    handleForm = (e) => {
        e.preventDefault();
        const data = {
            // id:this.state.id,
            user_id:this.state.id,
            exam_name:this.state.exam_name,
            subject_name:this.state.subject_name
        }
        console.log(data);

        axios.post("http://localhost:8000/api/add_exams", data)
        .then(res => {
            console.log(res.data);
            this.props.history.push('/add_exam');
            
        })
        .catch(e => this.setState({errors: e.response.data.errors}))

        axios.get('http://127.0.0.1:8000/api/get_exams_all_data/'+  this.props.match.params.id)
        .then(response=>{
            this.setState({
                get_exam_data:response.data
            });
        });
       
        
    };

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})
    }

    projectdetailsSend = (e) => {
        e.preventDefault()
        this.props.history.push({
          pathname: '/add_categories',
          state: {
            SystemUser: this.state.get_exam_data,
          }
        });
      }



    render() {
        return (
            <main className="main-expand">
                <div>
                    {/* <h1>{this.state.id}</h1> */}
                    <div className="text-center">
                        <div className="text-center jumbotron jumbotron-fluid">
                        <form className="text-center" method="POST" onSubmit={this.handleForm}>
                                    <h4><h1>Create New Exam </h1><br/>
                                    </h4>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                            <input type="hidden" className="form-control" id="validationServer01" name="user_id" onChange={this.handleInput} value={this.state.id} required />
                                            <label htmlFor="validationServer01">Exam Name :</label>
                                            <input type="text" className="form-control" id="validationServer01" name="exam_name" onChange={this.handleInput} required />                                        
                                            
                                            <label htmlFor="validationServer01">Subject Name:</label>
                                            <input type="text" className="form-control" id="validationServer01" name="subject_name" onChange={this.handleInput} required />
                                        
                                        
                                        </div>   
                                            
                                                {/* <input type="hidden" className="form-control" id="validationServer01" name="user_id" onChange={this.handleInput} value={this.state.id} required />
                                                <input type="hidden" className="form-control" id="validationServer01" name="user_name" onChange={this.handleInput} value={this.state.name} required />
                                                                                */}
                                        
                                    </div>
                                    
                                    


                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-primary " type="submit">Submit</button>
                                        
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-default fire_gradient buttn_submit" onClick={this.projectdetailsSend}>Add Category</button>
                                        
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

export default connect(mapStateToProps, null)(CreateExam);
