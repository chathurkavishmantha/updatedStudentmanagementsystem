import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MaleDefaultImage from '../css/img/male_default.jpg';
import axios from 'axios';
import Error from '../user/Error';
import cookie from 'js-cookie';
import {connect} from 'react-redux';


 class CreateOptions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // subject_id:'',
            id:props.id,
            option_txt:'',
            option_point:'',
            question_id:'',
            category_id:''
            
            

        }
    }
    
    
    handleForm = (e) => {
        e.preventDefault();
        const data = {
            // id:this.state.id,
            option_txt:this.state.option_txt,
            option_point:this.state.option_point,
            question_id:this.state.question_id,
            category_id:this.state.category_id,
        }
        console.log(data);

        axios.post("http://localhost:8000/api/add_option", data)
        .then(res => {
            console.log(res.data);
            this.props.history.push('/add_option');
            
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
                        <div className="container">
                                <form className="text-center" method="POST" onSubmit={this.handleForm}>
                                    <h4><h1>Create Option Answers </h1><br/>
                                    </h4>
                                                    <table className="table">
                                                        <thead className="thead-dark">
                                                            <tr>
                                                            <th scope="col">Option Text</th>
                                                            <th scope="col">Points</th>
                                                            <th scope="col">Question ID</th>
                                                            <th scope="col">Category ID</th>
                                                            {/* <th scope="col"><a href="javascript:;" className="btn btn-info addrow"> + </a></th> */}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                                 <tr>
                                                                    <th scope="col"><textarea type="text" className="form-control" id="validationServer01" name="option_txt" onChange={this.handleInput} required /></th>
                                                                    <td>
                                                                        <select name="option_point" id="" className="form-control" onChange={this.handleInput} required>
                                                                            <option defaultValue>Choose...</option>
                                                                            <option value="0" >0</option>
                                                                            <option value="1" >1</option>
                                                                            
                                                                        </select>
                                                                    </td>
                                                                    
                                                                    <td>
                                                                        <select name="question_id" id="1" className="form-control" onChange={this.handleInput} required>
                                                                            <option defaultValue>Choose...</option>
                                                                            <option value="1" >1</option>
                                                                            <option value="2" >2</option>
                                                                            <option value="3" >3</option>
                                                                            <option value="4" >4</option>
                                                                            <option value="4" >5</option>
                                                                            <option value="4" >6</option>
                                                                            <option value="4" >7</option>
                                                                            <option value="4" >8</option>
                                                                            <option value="4" >9</option>
                                                                            <option value="4" >10</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <select name="category_id" id="2" className="form-control" onChange={this.handleInput} required>
                                                                            <option defaultValue>Choose...</option>
                                                                            <option value="1" >1</option>
                                                                            <option value="2" >2</option>
                                                                            <option value="3" >3</option>
                                                                            <option value="4" >4</option>
                                                                            <option value="4" >5</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-center">
                                                                            <button className="btn btn-primary " type="submit">Submit</button>
                                                                        </div>
                                                                    </td>   
                                                                </tr>

                                                                <tr>
                                                                    <th scope="col"><textarea type="text" className="form-control" id="validationServer01" name="option_txt" onChange={this.handleInput} /></th>
                                                                    <td>
                                                                        <select name="option_point" id="" className="form-control" onChange={this.handleInput} >
                                                                            <option defaultValue>Choose...</option>
                                                                            <option value="0" >0</option>
                                                                            <option value="1" >1</option>
                                                                        </select>
                                                                    </td>
                                                                    
                                                                    <td>
                                                                        <select name="question_id" id="2" className="form-control"onChange={this.handleInput} >
                                                                            <option defaultValue>Choose...</option>
                                                                            <option value="1" >1</option>
                                                                            <option value="2" >2</option>
                                                                            <option value="3" >3</option>
                                                                            <option value="4" >4</option>
                                                                            <option value="4" >5</option>
                                                                            <option value="4" >6</option>
                                                                            <option value="4" >7</option>
                                                                            <option value="4" >8</option>
                                                                            <option value="4" >9</option>
                                                                            <option value="4" >10</option>
                                                                        </select>
                                                                    </td>  
                                                                    <td>
                                                                        <select name="category_id" id="2" className="form-control" onChange={this.handleInput} required>
                                                                            <option defaultValue>Choose...</option>
                                                                            <option value="1" >1</option>
                                                                            <option value="2" >2</option>
                                                                            <option value="3" >3</option>
                                                                            <option value="4" >4</option>
                                                                            <option value="4" >5</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-center">
                                                                            <button className="btn btn-primary " type="submit">Submit</button>
                                                                        </div>
                                                                    </td> 
                                                                </tr>

                                                                <tr>
                                                                    <th scope="col"><textarea type="text" className="form-control" id="validationServer01" name="option_txt" onChange={this.handleInput}  /></th>
                                                                    <td>
                                                                        <select name="option_point" id="" className="form-control" onChange={this.handleInput} >
                                                                            <option defaultValue>Choose...</option>
                                                                            <option value="0" >0</option>
                                                                            <option value="1" >1</option>

                                                                        </select>
                                                                    </td>
                                                                    
                                                                    <td>
                                                                        <select name="question_id" id="3" className="form-control" onChange={this.handleInput} >
                                                                            <option defaultValue>Choose...</option>
                                                                            <option value="1" >1</option>
                                                                            <option value="2" >2</option>
                                                                            <option value="3" >3</option>
                                                                            <option value="4" >4</option>
                                                                            <option value="4" >5</option>
                                                                            <option value="4" >6</option>
                                                                            <option value="4" >7</option>
                                                                            <option value="4" >8</option>
                                                                            <option value="4" >9</option>
                                                                            <option value="4" >10</option>
                                                                        </select>
                                                                    </td>   
                                                                    <td>
                                                                        <select name="category_id" id="2" className="form-control" onChange={this.handleInput} required>
                                                                            <option defaultValue>Choose...</option>
                                                                            <option value="1" >1</option>
                                                                            <option value="2" >2</option>
                                                                            <option value="3" >3</option>
                                                                            <option value="4" >4</option>
                                                                            <option value="4" >5</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-center">
                                                                            <button className="btn btn-primary " type="submit">Submit</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <th scope="col"><textarea type="text" className="form-control" id="validationServer01" name="option_txt" onChange={this.handleInput}  /></th>
                                                                    <td>
                                                                        <select name="option_point" id="" className="form-control" onChange={this.handleInput} >
                                                                            <option defaultValue>Choose...</option>
                                                                            <option value="0" >0</option>
                                                                            <option value="1" >1</option>
                                                                        </select>
                                                                    </td>
                                                                    
                                                                    <td>
                                                                        <select name="question_id" id="4" className="form-control"onChange={this.handleInput} >
                                                                            <option defaultValue>Choose...</option>
                                                                            <option value="1" >1</option>
                                                                            <option value="2" >2</option>
                                                                            <option value="3" >3</option>
                                                                            <option value="4" >4</option>
                                                                            <option value="4" >5</option>
                                                                            <option value="4" >6</option>
                                                                            <option value="4" >7</option>
                                                                            <option value="4" >8</option>
                                                                            <option value="4" >9</option>
                                                                            <option value="4" >10</option>
                                                                        </select>
                                                                    </td>  
                                                                    <td>
                                                                        <select name="category_id" id="2" className="form-control" onChange={this.handleInput} required>
                                                                            <option defaultValue>Choose...</option>
                                                                            <option value="1" >1</option>
                                                                            <option value="2" >2</option>
                                                                            <option value="3" >3</option>
                                                                            <option value="4" >4</option>
                                                                            <option value="4" >5</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-center">
                                                                            <button className="btn btn-primary " type="submit">Submit</button>
                                                                        </div>
                                                                    </td> 
                                                                </tr>

                                                                

                                                                
                                                                
                                                        </tbody>
                                                    </table>
                                    
                                    
                                    


                                    
                                    
                            </form>
                            </div>
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

export default connect(mapStateToProps, null)(CreateOptions);
