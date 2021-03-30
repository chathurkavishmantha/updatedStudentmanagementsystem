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

            // id:props.id,
            category_id:'',
            question_description:'',      
            

        }
    }
    
    
    handleForm = (e) => {
        e.preventDefault();
        const data = {

            // user_id:this.state.id,
            category_id:this.state.category_id,
            question_description:this.state.question_description

        }
        console.log(data);

        axios.post("http://localhost:8000/api/add_questions", data)
        .then(res => {
            console.log(res.data);
            this.props.history.push('/teacher_profile');
            
        })
        

       
        
    };

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})
    }



    render() {
        // const {get_exam_data} = this.state;
        return (
            <main className="main-expand">
                <div>
                    {/* <h1>{this.state.id}</h1> */}
                    <div className="text-center">
                        <div className="text-center jumbotron jumbotron-fluid">
                        <form className="text-center" method="POST" onSubmit={this.handleForm}>
                                    <h4><h1>Create New Question </h1><br/>
                                    
                                    </h4>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                                                                                          
                                                        <label htmlFor="validationServer01">Category ID :</label>
                                                        <input type="number" className="form-control" id="validationServer01" name="category_id" onChange={this.handleInput} placeholder="Please enter your category question ID" required />                                        
                                                        
                                                        <label htmlFor="validationServer01">New Question:</label>
                                                        <textarea type="text" className="form-control" id="validationServer01" name="question_description" onChange={this.handleInput} placeholder="Enter Your Questiom Here.." required />
                                        
                                                   
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
