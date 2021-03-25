import React, { Component } from 'react';
import axios from 'axios';
// import SuccessReviewAlert from '../Review/SuccessReviewAlert';
// import ErrorReviewAlert from '../Review/ErrorReviewAlert';
import {FaEye, FaPlusCircle} from 'react-icons/fa';
import DefaultUserImage from '../css/img/male_default.jpg';
import '../css/custom.css';
import MaleDefaultImage from '../css/img/male_default.jpg';
// import ReactStars from 'react-rating-stars-component';
import DashboardLogo from '../css/img/HomeConstruction_Main_logo.png';
import {Link} from 'react-router-dom';
import {FaStar, FaTasks, FaUser, FaPlus} from 'react-icons/fa';
import { connect } from 'react-redux';
import ProfilePic from '../css/img/profiledetails.gif';
import Student_logo from '../css/img/student_logo.jpg';
import prodct1 from '../css/img/arrow-icegif.gif';
import Teachers from '../css/img/teacher.jpg';
import prodct3 from '../css/img/prodct/product3.jpg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'



function searchSubjectName(term1){
    return function(x){
        return x.subject_name.toLowerCase().includes(term1.toLowerCase()) || !term1;
    }
}
function searchStudyYear(term2){
    return function(x){
        return x.study_year.toLowerCase().includes(term2.toLowerCase()) || !term2;
    }
}



class TeacherProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:props.id,
            email:props.email,
            name:props.name,
            mobile_no:props.mobile_no,
            subject_details:[],
            module_details:[],
            notice_details:[],
            new_subject_details:[],
            schedul_details:[],
            term1:'',
            term2:'',
            module_name:''

        }
            this.searchHandler1 = this.searchHandler1.bind(this);
            this.searchHandler2 = this.searchHandler2.bind(this);
            
            
        }
    
    searchHandler1(event1){
        this.setState({term1:event1.target.value })
    }
    searchHandler2(event2){
        this.setState({term2:event2.target.value })
    }

    componentDidMount() 
    {

        axios.get('http://127.0.0.1:8000/api/subject_details/'+ this.props.id)
        .then(response=>{
            this.setState({
                subject_details:response.data
                // console.log(response.data);
            });
        });

        //take data to update  
        axios.get('http://127.0.0.1:8000/api/new_subject_details/'+ this.props.match.params.id)
        .then(response=>{
            this.setState({
                new_subject_details:response.data
            });
        });      


        axios.get('http://127.0.0.1:8000/api/module_details/' + this.props.id)
        .then(response=>{
            this.setState({
                module_details:response.data
                // console.log(response.data);
            });
        });

        axios.get('http://127.0.0.1:8000/api/notice_details/'+ this.props.id)
        .then(response=>{
            this.setState({
                notice_details:response.data
            });
        });

        axios.get('http://127.0.0.1:8000/api/schedule_class_details/' + this.props.id)
        .then(response=>{
            this.setState({
                schedul_details:response.data
            });
        });

        

        

        


        
    }

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})
    }

    
    getDetails = (e) => {
        e.preventDefault()
        this.props.history.push({
          pathname: '/edit_lecture_matireal',
          state: {
            Subject: this.state.subject_details,
          }
        });
      }
    

    onDelete(subject_id){
        axios.delete('http://127.0.0.1:8000/api/delete_subject/'+ subject_id)
        .then(response=>{
            var data = this.state.subject_details;

            for(var i=0; i< data.length; i++){
                if(data[i].subject_id = subject_id)
                {
                    data.splice(i,1);
                    this.setState({data:data})
                }
            }
        });
    }

    onDeleteMoudule(module_id){
        axios.delete('http://127.0.0.1:8000/api/delete_module/'+ module_id)
        .then(response=>{
            var data = this.state.module_details;

            for(var i=0; i< data.length; i++){
                if(data[i].module_id = module_id)
                {
                    data.splice(i,1);
                    this.setState({data:data})
                }
            }
        });
    }

    onDeleteSchedule(class_schedule_id){
        axios.delete('http://127.0.0.1:8000/api/delete_shedule/'+ class_schedule_id)
        .then(response=>{
            var data = this.state.schedul_details;

            for(var i=0; i< data.length; i++){
                if(data[i].class_schedule_id = class_schedule_id)
                {
                    data.splice(i,1);
                    this.setState({data:data})
                }
            }
        });
    }

    onDeleteNotice(notice_id){
        axios.delete('http://127.0.0.1:8000/api/delete_notice/'+ notice_id)
        .then(response=>{
            var data = this.state.notice_details;

            for(var i=0; i< data.length; i++){
                if(data[i].notice_id = notice_id)
                {
                    data.splice(i,1);
                    this.setState({data:data})
                }
            }
        });
    }




    render(){
        const {module_details,notice_details,term1,term2 } = this.state;
        // const {term ,term2,term3,term4,term5,term6,term7,term8,term10, architect, Recomemed_architect,} = this.state;



        return(
            <div>
                <main className="main-nopaddingUp">
                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-md-2 d-none d-md-block sidebar_gradient sidebar">
                            <div className="sidebar-sticky sideBar">
                                <ul className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <li className="text-center side-user-img">
                                        <img src={Student_logo} className="side-bar-user-img" alt="" />
                                    </li>
                                    <li className="butn_styles nav-item">
                                        <a className="nav-link text-white active" id="v-pills-dashboard-tab" data-toggle="pill" href="#v-pills-dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">Dashboard</a>
                                    </li>
                                    <li className="nav-item butn_styles">
                                        <a className="nav-link text-white" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="true">Profile</a>
                                    </li>
                                    <li className="nav-item butn_styles">
                                        <a className="nav-link text-white" id="v-pills-construction-tab" data-toggle="pill" href="#v-pills-construction" role="tab" aria-controls="v-pills-construction" aria-selected="true">Manage Subjects</a>
                                    </li>
                                    <li className="nav-item butn_styles">
                                        {/* <a className="nav-link text-white" id="v-pills-subject" data-toggle="pill" href="#v-pills-subject" role="tab" aria-controls="v-pills-subjects" aria-selected="true">Subjects</a> */}
                                        <a className="nav-link text-white" id="v-pills-completed-projects-tab" data-toggle="pill" href="#v-pills-completed-projects" role="tab" aria-controls="v-pills-projects" aria-selected="true">Manage Modules</a>
                                    </li>
                                    <li className="nav-item butn_styles">
                                        <a className="nav-link text-white" id="v-pills-completed-schedule-tab" data-toggle="pill" href="#v-pills-completed-schedule" role="tab" aria-controls="v-pills-module" aria-selected="true">Manage Class Schedules</a>
                                    </li>
                                    <li className="nav-item butn_styles">
                                        <a className="nav-link text-white" id="v-pills-completed-Notices-tab" data-toggle="pill" href="#v-pills-completed-Notices" role="tab" aria-controls="v-pills-Notices" aria-selected="true">Manage Notices</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        

                        <section role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
                                    <h2><br/> <h5 className="alert alert-danger  d-flex justify-content-center fade-in ">&nbsp;Wellcome {this.props.name}</h5></h2>
                                    <hr className="shadow-lg" />

                                    <div id="search" className="tab-pane ">
                                        <div className=" text-center">
                                            <br/> <h4>Search Notices</h4>
                                            <hr/>
                                            <div className="container form-group">
                                                <form>
                                                    <div className="row">
                                                        <div className=" col-md-6 mb-3 search_filter_inputs">
                                                            <select className="custom-select" name="subject_name" id="" onChange={this.searchHandler1} value={term1} required>
                                                                    <option defaultValue>Subject....</option>
                                                                    <option value="network">Network</option>
                                                                    <option value="database">Database</option>
                                                                    <option value="datastructure">DataStructure</option>
                                                                    <option value="programing">Programing</option>
                                                                    <option value="cybersecurity">Cyber Security</option>
                                                            </select>
                                                        </div>
                                                        <div className=" col-md-6 mb-3 search_filter_inputs">
                                                            <select className="custom-select" name="study_year" id="" onChange={this.searchHandler2} value={term2} required>
                                                                    <option defaultValue>Year....</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <hr/>
                                            
                                            <h2>Notices</h2>
                                   

                                            <div className="container">
                                            
                                                    <div className="text-center jumbotron jumbotron">

                                                        <h1>Main Notices</h1><br/>
                                                        {
                                                            notice_details
                                                            .filter(searchSubjectName(term1))
                                                            .filter(searchStudyYear(term2))
                                                                .map( notice => 

                                                                        <div className="row">
                                                                            <div class="col-sm">
                                                                                <div className="sp-wrap" key={notice.notice_id}>
                                                                                    <a href=""><img className="carousel-img5" src={prodct1} alt="" /></a>
                                                                                    <div>
                                                                                        <h4>{notice.subject_name}</h4>
                                                                                        <h5>{notice.notice_date}</h5>
                                                                                        <p>{notice.about_notice}</p>
                                                                                        <p>{notice.study_year}</p>
                                                                                    </div>
                                                                                    
                                                                                </div>
                                                                                <br/>                                                                    
                                                                                
                                                                            </div>                                                                   
                                                                            
                                                                        </div>
                                                                )
                                                
                                                                }
                                                        
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <hr/>
                                        </div><br/>
                                    
                                    <hr/>
                                    
                                </div>
                                           



                                    
                                    
                                    
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <h2><img className="dashboard_logo_image" src={Teachers} alt="" /> Profile</h2>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-lg-6 order-md-1">
                                            <h4>Account Details</h4>
                                            <hr/>
                                            <form onSubmit={this.handleForm}>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6 profile_inputs">
                                                        <label htmlFor="inputName">Name :</label>
                                                        <input type="text" className="form-control" id="inputPassword" name="name" onChange={this.handleInput} value={this.props.name} />
                                                    </div>
                                                    <div className="form-group col-md-6 profile_inputs">
                                                        <label htmlFor="inputEmail">Email :</label>
                                                        <input type="email" className="form-control"  name="email" onChange={this.handleInput} value={this.props.email}/>
                                                    </div>
                                                    <br/>
                                                </div>
                                                <div className="form-row">
                                                    <div className="fform-group col-md-6 profile_inputs">
                                                        <label htmlFor="inputAddress">Address :</label>
                                                        <input type="text" className="form-control" id="inputAddress"  name="address" onChange={this.handleInput} value={this.props.address}  />
                                                    </div>
                                                    <div className="form-group col-md-6 profile_inputs">
                                                        <label htmlFor="inputAddress">Gender :</label>
                                                        <input type="text" className="form-control" id="inputAddress"  name="gender" onChange={this.handleInput} value={this.props.gender} />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="fform-group col-md-6 profile_inputs">
                                                        <label htmlFor="inputAddress">Mobile Number :</label>
                                                        <input type="text" className="form-control" id="inputAddress"  name="" onChange={this.handleInput} value={this.props.mobile_no}  />
                                                    </div>
                                                </div>
                                                </form>
                                            </div>
                                            <div className="col-md-6 order-md-"> 
                                            <img className="loginPage_img_01"  src={ProfilePic} alt=""></img>   
                                                {/* <div className="profile_box">
                                                    <br/>
                                                    <div className="profile_picture text-center mb-3">
                                                        <img className="profile_image shadow" src={MaleDefaultImage} alt="" />
                                                    </div>
                                                    <div className="mt-10 profile_details text-center">
                                                        <h4></h4>
                                                        <h5></h5>
                                                        <div className="ml-10 text-center">
                                                            <input className="text-center" type="file" />
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        <hr/>
                                </div>

                                <div className="tab-pane fade" id="v-pills-construction" role="tabpanel" aria-labelledby="v-pills-construction-tab">
                                    
                                    
                                    {/* <div className="tab-pane fade" id="v-pills-completed-projects" role="tabpanel" aria-labelledby="v-pills-completed-projects-tab"> */}
                                    <h2><img className="dashboard_logo_image" src={Teachers} alt="" /> Subjects</h2>
                                    <hr/>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm">
                                                <Link className="btn btn-lg btn-outline-success" to="/register_new_subject"><FaPlus/> Register For New Subject</Link>

                                            </div>
                                            
                                        </div><br/>
                                    </div><hr/>
                                    <br/>
                                    <div>
                                    <table className="table">
                                            <thead className="thead-dark">
                                                <tr>
                                                {/* <th scope="col">Teacher Name</th> */}
                                                <th scope="col">Subject</th>
                                                <th scope="col">Subject Code</th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                    this.state.subject_details.map(teacher=>{
                                                        return(
                                                                <tr>
                                                                    <th scope="col">{teacher.subject_name}</th>
                                                                    <th scope="col">{teacher.subject_code}</th>
                                                                    <th scope="col"><Link to={`/update_subject/edit/${teacher.subject_id}`} className="btn btn-warning">Edit</Link></th>
                                                                    <th scope="col"><a  onClick={this.onDelete.bind(this,teacher.subject_id)}className="btn btn-danger">Delete</a></th>

                                                                    {/* <th scope="col">{teacher.gender}</th>
                                                                    <th scope="col">{teacher.gurdian_number}</th> */}
                                                                </tr>
                                                            )
                                                    })
                                                }    
                                            </tbody>
                                        </table>
                                    </div>
                                
                                    <div>
                                        
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="v-pills-completed-projects" role="tabpanel" aria-labelledby="v-pills-completed-projects-tab">
                                    <h2><img className="dashboard_logo_image" src={Teachers} alt="" /> Modules</h2>

                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm">
                                                <Link className="btn btn-lg btn-outline-success" to="/add_lecture_matireal"><FaPlus/> Add new Module</Link>
                                                
                                            </div>
                                            
                                        </div><br/>
                                    </div>
                                    
                                    <hr/>

                                    {/* <div className="tab-pane fade" id="v-pills-completed-projects" role="tabpanel" aria-labelledby="v-pills-completed-projects-tab"> */}
                                    <h2><img className="dashboard_logo_image" src={Teachers} alt="" /> Available Modules</h2>
                                    <hr/>
                                    <div>
                                        {/* <Link className="btn btn-lg btn-outline-success" to="/#"><FaPlus/> Add a project</Link> */}
                                    </div>
                                    <br/>
                                    <div>
                                        
                                        <div className="container">
                                            <div className="row">
                                                
                                                <div className="text-center jumbotron jumbotron">


                                                    <div className="row text-center">
                                                    {
                                                    module_details
                                                    
                                                        .map( module => 
                                                            <div className="user_card"   key={module.id}>
                                                                    <div className="user_card-header">
                                                                        <div className="animated_wave-bg">
                                                                            <div className="animated_wave-01"></div>
                                                                            <div className="animated_wave-02"></div>
                                                                            <div className="animated_wave-03"></div>
                                                                        </div>
                                                
                                                                        <div className="user_profile_pic-content">
                                                                            <img className="user_profile_pic" src={Teachers} alt=""/>
                                                                        </div>
                                                                    </div>
                                                
                                                                    <div className="user_card-content">
                                                                        <div className="user_name">
                                                                            <h6>Module Name : {module.module_name} </h6>
                                                                            <h6>Module Number: {module.module_no}</h6>
                                                                            <h6>Description : {module.module_description}</h6>
                                                                            <h6>Date : {module.module_upload_date}</h6>
                                                                            {/* <h6>File : <a>{module.module_upload_file}</a></h6> */}
                                                                            
                                                                        </div>
                                                                        <Link to={`/update_subject/edit/${module.module_id}`} className="btn btn-warning">Edit</Link>
                                                                        <a href="/#" className="btn btn-success">Download</a>
                                                                        <a onClick = {this.onDeleteMoudule.bind(this,module.module_id)}className="btn btn-danger">Delete</a>

                                                                        {/* <Link to={`/arc_prductdetails/ `} className="btn btn-success">View</Link> */}
                                                                    </div>
                                                                </div>

                                                        )
                                                    
                                                    }
                                                </div>

                                            </div>

                                            
                                        </div>
                                    </div>
                                    
                                    </div>
                                </div>

                                <div className="tab-pane fade show" id="v-pills-completed-schedule" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
                                    <h2><img className="dashboard_logo_image" src={Teachers} alt="" /> Class Room Schedule</h2>

                                    <div class="container">
                                        
                                        <div class="row">
                                            <div class="col-sm">
                                                <Link className="btn btn-lg btn-outline-success" to="/add_class_schedul"><FaPlus/> Add Class Schedul</Link>
                                                
                                            </div>
                                            
                                        </div>
                                        <hr/>
                                    </div>
                                    <div>
                                    <table className="table">
                                            <thead className="thead-dark">
                                                <tr>
                                                {/* <th scope="col">Teacher Name</th> */}
                                                <th scope="col">Subject Code</th>
                                                <th scope="col">Study Year</th>
                                                <th scope="col">Class Room</th>
                                                <th scope="col">Time</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Start Date</th>
                                                <th scope="col">End Date</th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                    this.state.schedul_details.map(shedule=>{
                                                        return(
                                                                <tr>
                                                                    <th scope="col">{shedule.subject_code}</th>
                                                                    <th scope="col">{shedule.study_year}</th>
                                                                    <th scope="col">{shedule.class_room_id}</th>
                                                                    <th scope="col">{shedule.time_id}</th>
                                                                    <th scope="col">{shedule.status}</th>
                                                                    <th scope="col">{shedule.start_date}</th>
                                                                    <th scope="col">{shedule.end_date}</th>
                                                                    <th scope="col"><Link to={`/update_subject/edit/${shedule.class_schedule_id}`} className="btn btn-warning">Edit</Link></th>
                                                                    <th scope="col"><a  onClick={this.onDeleteSchedule.bind(this,shedule.class_schedule_id)}className="btn btn-danger">Delete</a></th>

                                                                    {/* <th scope="col">{teacher.gender}</th>
                                                                    <th scope="col">{teacher.gurdian_number}</th> */}
                                                                </tr>
                                                            )
                                                    })
                                                }    
                                            </tbody>
                                        </table>
                                    </div>

                                    
                                    
                                </div>

                                <div className="tab-pane fade show " id="v-pills-completed-Notices" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
                                    <h2><img className="dashboard_logo_image" src={Teachers} alt="" /> Notices</h2>

                                    <div class="container">
                                        
                                        <div class="row">
                                            
                                        <div class="col-sm">
                                                <Link className="btn btn-lg btn-outline-success" to="/add_notice"><FaPlus/> Add Notice</Link>
                                                
                                            </div>
                                            
                                        </div>
                                        <hr/>
                                    </div>
                                    <div>
                                    <table className="table">
                                            <thead className="thead-dark">
                                                <tr>
                                                {/* <th scope="col">Teacher Name</th> */}
                                                <th scope="col">Subject Name</th>
                                                <th scope="col">Notice Date</th>
                                                <th scope="col">About Notice</th>
                                                <th scope="col">Study Year</th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                    this.state.notice_details.map(notice=>{
                                                        return(
                                                                <tr>
                                                                    <th scope="col">{notice.subject_name}</th>
                                                                    <th scope="col">{notice.notice_date}</th>
                                                                    <th scope="col">{notice.about_notice}</th>
                                                                    <th scope="col">{notice.study_year}</th>
                                                                    <th scope="col"><Link to={`/update_subject/edit/${notice.notice_id}`} className="btn btn-warning">Edit</Link></th>
                                                                    <th scope="col"><a  onClick={this.onDeleteNotice.bind(this,notice.notice_id)}className="btn btn-danger">Delete</a></th>

                                                                </tr>
                                                            )
                                                    })
                                                }    
                                            </tbody>
                                        </table>
                                    </div>

                                    
                                    
                                </div>


                                
                                
                            </div>
                        </section>
                            
                        
                    </div>
                </div>
            </main>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        id:state.auth.user.id,        
        name:state.auth.user.name,
        email:state.auth.user.email,
        address:state.auth.user.address,
        gender:state.auth.user.gender,        
        mobile_no:state.auth.user.mobile_no,

        

    };
};

export default connect(mapStateToProps, null)(TeacherProfile);
