import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MaleDefaultImage from '../css/img/male_default.jpg';
import axios from 'axios';
import Error from '../user/Error';
import cookie from 'js-cookie';
import {connect} from 'react-redux';


 class ProcessExam extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // subject_id:'',
            id:props.id,
            subject_name:'',
            notice_date:'',
            study_year:'',
            about_notice:'',
            exam_data:[]
            

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


    componentDidMount(){
        //get data
       axios.get('http://127.0.0.1:8000/api/get_option_data/')
       .then(response=>{
           this.setState({
               exam_data:response.data
           });
       });
    }

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})
    }



    render() {
        const {exam_data} = this.state;
        return (
            <main className="main-expand">
                <div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-header">
                                </div>
                                {
                                   exam_data.map(exam =>{
                                     return(
                                <div class="card-body" key={exam.user_id}>

                                        <div class="row">
                                            <div class="col-12">
                                                <div class="alert alert-success" role="alert">
                                                
                                                            <div className="user_card-content">
                                                            <p>Categories Name:{exam.category_name} </p>
                                                            </div>
                                                        
                                                </div>
                                            </div>
                                        </div>

                                    <form method="POST" action="">
                                            <div class="card mb-3">
                                                <div class="card-header">
                                                <p>Question:{exam.question_description} </p>
                                                </div>
                                
                                                <div class="card-body">
                                                
                                                        <div class="card mb-3 " key={exam.user_id}>
                                                            <div class="card-header"></div>
                                        
                                                            <div class="card-body">
                                                                <input type="hidden" name="" value=""/>
                                                                
                                                                    <div class="form-check">
                                                                        <p>*{exam.option_txt}</p>                                                                          
                                                                        
                                                                    </div>
                                                   
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>

                                            

                                        
                                    </form>
                                    <div class="form-group row mb-0">
                                            <div class="col-md-6">
                                                <button type="submit" class="btn btn-primary">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                </div>
                               )
                                                        
                            })
                        }
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

export default connect(mapStateToProps, null)(ProcessExam);
