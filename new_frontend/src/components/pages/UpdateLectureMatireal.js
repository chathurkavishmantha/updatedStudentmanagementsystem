import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MaleDefaultImage from '../css/img/male_default.jpg';
import axios from 'axios';
import cookie from 'js-cookie';
import {connect} from 'react-redux';
import SuccessWorksDoneAlert from '../teacher/SuccessWorksAlert';
import ErrorWorksDoneAlert from '../teacher/ErrorWorksAlert';


 class UpdateLectureMatireal extends Component {

    constructor(props) {
        super(props);
        // Binding
            this.onChangeModuleName = this.onChangeModuleName.bind(this);
            this.onChangeModuleNo = this.onChangeModuleNo.bind(this);
            this.onChangeModulDescription = this.onChangeModulDescription.bind(this);
            this.onChangeModulUpdateDate = this.onChangeModulUpdateDate.bind(this);
            this.onChangeModulUploadFile = this.onChangeModulUploadFile.bind(this);
            this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            // id:'',
            subject_id:'',
            module_no:'',
            module_description:'',
            module_upload_date:'',
            module_upload_file:'',
            alert_message:'',
            module_name:''

            

        }
    }

    componentDidMount() 
    {
        // retreive module data by id
        // axios.get('http://127.0.0.1:8000/api/update_subject/edit/' + this.props.match.params.id)
        // .then(response=>{
        //     this.setState({
        //         subject_id:response.data.subject_id,
        //         module_no:response.data.module_no,
        //         module_description:response.data.module_description,
        //         module_upload_date:response.data.module_upload_date,
        //         module_upload_file:response.data.module_upload_file 
        //     })
        // })

        axios.get('http://127.0.0.1:8000/api/module_details/edit/' + this.props.match.params.module_id)
        .then(response=>{
            this.setState({
                module_no:response.data.module_no
                
            })
           //end
        })
    }
    

    onChangeModuleName(e) {
        this.setState({
            module_name:e.target.value 
        });
    }

    onChangeModuleNo(e) {
        this.setState({
            module_no:e.target.value 
        });
    }

    onChangeModulDescription(e) {
        this.setState({
            module_description:e.target.value 
        });
    }

    onChangeModulUpdateDate(e) {
        this.setState({
            module_upload_date:e.target.value 
        });
    }

    onChangeModulUploadFile(e) {
        this.setState({
            module_upload_file:e.target.value 
        });
    }
    

    // Onsubmit function
    onSubmit(e) {
        e.preventDefault();
        const data = {
            subject_id : this.state.subject_id,
            module_no : this.state.module_no,
            module_name : this.state.module_name,
            module_description : this.state.module_description,
            module_upload_date: this.state.module_upload_date,
            module_upload_file: this.state.module_upload_file
        }
        // send data to update a selected work done
        axios.put('http://127.0.0.1:8000/api/update_subject/update'+this.props.match.params.id, data)
    .then(res=>{
            this.setState({alert_message:"success"})
        }).catch(error=>{
            this.setState({alert_message:"error"})
        });
        
    }




    render() {
        return (
            <main className="main-expand">
                <div>
                    <div className="text-center">
                        <div className="text-center jumbotron jumbotron-fluid">
                        <form className="text-center"   onSubmit={this.onSubmit}>
                                    <h4><h1>Edit Module : </h1><br/>
                                    {/* <h1>Edit Module : {this.state.Subject[1].subject_name}</h1><br/> */}
                                    {/* <h1>Edit Module : {this.state.Subject[2].user_name}</h1><br/> */}
                                    {this.state.alert_message=="success"?<SuccessWorksDoneAlert message={" updated successfully...."} />:null}
                                    {this.state.alert_message=="error"?<ErrorWorksDoneAlert message={"Error occured while updating the works done !!!!"} />:null}
                                    <br/>
                                    
                                    </h4>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Module Name :</label>
                                            {/* <input type="text" className="form-control" id="" name="id" onChange={this.handleInput}  required /> */}
                                            <input type="text" className="form-control" id="validationServer01" name="module_name" value={this.state.module_name} onChange={this.onChangeModuleName} required />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Module Number :</label>
                                            <input type="text" className="form-control" id="validationServer01" name="module_no" value={this.state.module_no} onChange={this.onChangeModuleNo} required />
                                        </div>                                       
                                        
                                    </div>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Module Description :</label>
                                            {/* <input type="hidden" className="form-control" id="" name="id" onChange={this.handleInput} value={this.state.id} required /> */}
                                            <input type="text" className="form-control" id="validationServer01" name="module_description" value={this.state.module_description} onChange={this.onChangeModulDescription} required />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Upload date :</label>
                                            <input type="date" className="form-control" id="validationServer01" name="module_upload_date" value={this.state.module_upload_date} onChange={this.onChangeModulUpdateDate} required />
                                        </div>                                       
                                        
                                    </div>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                        <label htmlFor="validationServer01">Upload file :</label>
                                        <input type="file" name="module_upload_file" value={this.state.module_upload_file} onChange={this.onChangeModulUploadFile} required/>
                                        </div>                                      
                                        
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-primary " type="submit">Update</button>
                                        
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


export default UpdateLectureMatireal;
