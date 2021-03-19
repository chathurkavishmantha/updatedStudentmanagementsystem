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



class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {

            id:props.id,
            name:props.name,
            email:props.email,
            address:props.address,
            gender:props.gender,
            admition_date:props.admition_date,
            gurdian_number:props.gurdian_number,
            city:props.city,
            gurdian_name:props.gurdian_name,
            father_name:props.father_name,
            father_occupation:props.father_occupation,
            father_nic:props.father_nic,
            mother_name:props.mother_name,
            mother_occupation:props.mother_occupation,
            mother_nic:props.mother_nic,
            teacher_details:[],
            notice_details:[],
            term1:'',
            term2:'',


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

        // axios.get('http://127.0.0.1:8000/api/teacher_details/'+ this.props.match.params.id)
        // .then(response=>{
        //     this.setState({
        //         teacher_details:response.data
        //         // console.log(response.data);
        //     });
        // });


        axios.get('http://127.0.0.1:8000/api/all_notice_details/')
        .then(response=>{
            this.setState({
                notice_details:response.data
            });
        });

        axios.get('http://127.0.0.1:8000/api/all_subject_details/')
        .then(response=>{
            this.setState({
                teacher_details:response.data
            });
        });

        
    }

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})
    }

    




    render(){

        const {teacher_details,notice_details,term1,term2 } = this.state;

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
                                        <a className="nav-link text-white" id="v-pills-construction-tab" data-toggle="pill" href="#v-pills-construction" role="tab" aria-controls="v-pills-construction" aria-selected="true">Teachers</a>
                                    </li>
                                    <li className="nav-item butn_styles">
                                        <a className="nav-link text-white" id="v-pills-completed-projects-tab" data-toggle="pill" href="#v-pills-completed-projects" role="tab" aria-controls="v-pills-projects" aria-selected="true">none</a>
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
                                    <h2><img className="dashboard_logo_image" src={DashboardLogo} alt="" /> Profile</h2>
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
                                                        <input type="text" className="form-control" id="inputAddress"  name="address" onChange={this.handleInput} value={this.props.address} placeholder="Address" />
                                                    </div>
                                                    <div className="form-group col-md-6 profile_inputs">
                                                        <label htmlFor="inputAddress">Gender :</label>
                                                        <input type="text" className="form-control" id="inputAddress"  name="gender" onChange={this.handleInput} value={this.props.gender} placeholder="Address" />
                                                    </div>
                                                </div>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6 profile_inputs">
                                                            <label htmlFor="inputName">Admition Date :</label>
                                                            <input type="text" className="form-control" id="inputPassword" name="admition_date" onChange={this.handleInput} value={this.props.admition_date} />
                                                        </div>
                                                        <div className="form-group col-md-6 profile_inputs">
                                                            <label htmlFor="inputEmail">Gurdian Number :</label>
                                                            <input type="text" className="form-control" id="inputPassword" name="gurdian_number" onChange={this.handleInput} value={this.props.gurdian_number} />
                                                            
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="fform-group col-md-6 profile_inputs">
                                                            <label htmlFor="inputAddress">City :</label>
                                                            <input type="text" className="form-control"   name="" onChange={this.handleInput} value={this.props.city}  />
                                                        </div>
                                                        <div className="form-group col-md-6 profile_inputs">
                                                            <label htmlFor="inputAddress">Gurdian Name :</label>
                                                            <input type="text" className="form-control"  name="" onChange={this.handleInput} value={this.props.gurdian_name}/>
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="fform-group col-md-6 profile_inputs">
                                                            <label htmlFor="inputAddress">Father Name :</label>
                                                            <input type="text" className="form-control"   name="" onChange={this.handleInput} value={this.props.father_name}  />
                                                        </div>
                                                        <div className="form-group col-md-6 profile_inputs">
                                                            <label htmlFor="inputAddress">Father Occupation :</label>
                                                            <input type="text" className="form-control"  name="" onChange={this.handleInput} value={this.props.father_occupation}/>
                                                        </div>
                                                        <div className="fform-group col-md-6 profile_inputs">
                                                            <label htmlFor="inputAddress">Father Nic :</label>
                                                            <input type="text" className="form-control"   name="" onChange={this.handleInput} value={this.props.father_nic}  />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="fform-group col-md-6 profile_inputs">
                                                            <label htmlFor="inputAddress">Mother Name :</label>
                                                            <input type="text" className="form-control"   name="" onChange={this.handleInput} value={this.props.mother_name}  />
                                                        </div>
                                                        <div className="form-group col-md-6 profile_inputs">
                                                            <label htmlFor="inputAddress">Mother Occupation :</label>
                                                            <input type="text" className="form-control"  name="" onChange={this.handleInput} value={this.props.mother_occupation}/>
                                                        </div>
                                                        <div className="fform-group col-md-6 profile_inputs">
                                                            <label htmlFor="inputAddress">Mother Nic :</label>
                                                            <input type="text" className="form-control"   name="" onChange={this.handleInput} value={this.props.mother_nic}  />
                                                        </div>
                                                    </div>
                                                    {/* <div className="text-center">
                                                        <button className="btn btn-default fire_gradient buttn_submit" type="submit">Update Info</button>
                                                    </div> */}
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
                                    <h2><img className="dashboard_logo_image" src={Teachers} alt="" /> Teachers</h2>
                                    <hr/>
                                    <div>
                                        {/* <Link className="btn btn-lg btn-outline-success" to="/#"><FaPlus/> Add a project</Link> */}
                                    </div>
                                    <br/>
                                    <div>
                                        <table className="table table-hover text-center">
                                            <thead>
                                                <tr>
                                                {/* <th scope="col">Teacher Name</th> */}
                                                <th scope="col">Subject</th>
                                                <th scope="col">Subject Code</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                    this.state.teacher_details.map(teacher=>{
                                                        return(
                                                                <tr>
                                                                    <th scope="col">{teacher.subject_name}</th>
                                                                    <th scope="col">{teacher.subject_code}</th>
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
        admition_date:state.auth.user.admition_date,
        gurdian_number:state.auth.user.gurdian_number,
        city:state.auth.user.city,
        gurdian_name:state.auth.user.gurdian_name,
        father_name:state.auth.user.father_name,
        father_occupation:state.auth.user.father_occupation,
        father_nic:state.auth.user.father_nic,
        mother_name:state.auth.user.mother_name,
        mother_occupation:state.auth.user.mother_occupation,
        mother_nic:state.auth.user.mother_nic

        

    };
};

export default connect(mapStateToProps, null)(UserProfile);
