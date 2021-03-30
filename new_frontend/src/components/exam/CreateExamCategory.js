import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MaleDefaultImage from '../css/img/male_default.jpg';
import axios from 'axios';
import Error from '../user/Error';
import cookie from 'js-cookie';
import {connect} from 'react-redux';


 class CreateExamCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // subject_id:'',
            id:props.id,
            category_name:'',
            subject_name:'', 
            // get_exam_data:[],    
            // SystemUser:this.props.location.state.SystemUser      
            

        }
    }
    
    
    handleForm = (e) => {
        e.preventDefault();
        const data = {

            user_id:this.state.id,
            category_name:this.state.category_name,
            subject_name:this.state.subject_name

        }
        console.log(data);

        axios.post("http://localhost:8000/api/add_categories", data)
        .then(res => {
            console.log(res.data);
            this.props.history.push('/add_categories');
            
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
                                    <h4><h1>Create New Category </h1><br/>
                                    </h4>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                                        <input type="hidden" className="form-control" id="validationServer01" name="user_id" onChange={this.handleInput} value="" required />
                                            
                                                   
                                                        <label htmlFor="validationServer01">Category Name :</label>
                                                        <input type="text" className="form-control" id="validationServer01" name="category_name" onChange={this.handleInput} required />                                        
                                                        
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

export default connect(mapStateToProps, null)(CreateExamCategory);
