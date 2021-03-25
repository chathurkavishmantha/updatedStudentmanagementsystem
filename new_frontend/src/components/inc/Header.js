import React, { Fragment } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
// import HeaderLogo from '../css/img/Home_Construction_logo_White.png';
import UserImage from '../css/img/male_default.jpg';
import { connect } from 'react-redux';
import cookie from 'js-cookie';
import {FaBell} from 'react-icons/fa';


//Routes
import RegisterMainPage from '../user/RegisterMainPage';
import Registerstudentpage from '../user/RegisterStudent';
import RegisterTeacherPage from '../user/RegisterTeacher';
import Login from '../user/Login';
import Home from '../pages/Home';
import UserProfile from '../user/UserProfile';
import GuestRoute from '../user/GuesRoute';
import AuthRoute from '../user/AuthRoute';
import TeacherProfile from '../user/TeacherProfile';
import AddLectureMatireal from '../pages/AddLectureMatireal';
import Test from '../pages/Test';
import RegisterForNewSubject from '../teacher/RegisterForNewSubject';
import AddNotices from '../teacher/AddNotices';
import AddClassSchedul from '../teacher/AddClassSchedul';
import UpdateLectureMatireal from '../pages/UpdateLectureMatireal';
import RegisterNewModule from '../pages/RegisterNewModule';



function Header(props) {

    const handleLogout = (e) => {
        e.preventDefault();
        cookie.remove('token');
        props.logout();
    }
    


        return (
                <header>
                        <nav className="fire_gradient navbar navbar-expand-md navbar-dark text-light shadow">
                            <div className="container">
                                {/* <Link to="/" className="navbar-brand text-white"><img className="header_image" src={HeaderLogo} alt="" /> Home Construction</Link> */}
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarResponsive">
                                        <ul className="navbar-nav ml-auto float-right text-right">
                                            <li className="nav-item">
                                                <Link className="nav-link text-white" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white" to="/about">About</Link>
                                            </li>
                                            {
                                                !props.loggedIn ? 
                                                (<Fragment>
                                                <li className="nav-item">
                                                    <Link className="nav-link text-white" to="/login">Login</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link text-white" to="/register_main">Register</Link>
                                                </li>
                                                </Fragment>)
                                                :
                                
                                                (<Fragment>
                                                    <li className="nav-item">
                                                        <Link className="nav-link text-white" to="/#" onClick={handleLogout}>Logout</Link>
                                                    </li>
                                                <li>
                                                    <Link to="/#"><FaBell className="notifi_icon"/></Link>
                                                </li>
                                                <li className="nav-item nav-user-img">
                                                    {/* <Link to="#"><img src={UserImage} className="nav-bar-user-img" alt="" /></Link> */}
                                                    <div className="dropdown dropDown_sizing">
                                                        <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <img src={UserImage} className="nav-bar-user-img" alt="" />
                                                        </button>
                                                        <div className="dropdown-menu dropDown_menu_sizing" aria-labelledby="dropdownMenu2">
                                                            <Link className="dropdown-item btn-sm text-right text-sm" type="button" to="/user_profile">Dashboard</Link>
                                                            <a className="dropdown-item btn-sm text-right" type="button" >Logout</a>
                                                        </div>
                                                    </div>
                                                </li></Fragment>)
                                            }  
                                                                                                               
                                        </ul>
                                    </div>
                            </div>
                        </nav>
                        {props.children}
                        <div>
                            <Switch>
                            
                                {/* <Route exact path="/" component={RegisterMainPage}/> */}
                                <GuestRoute exact path="/student_register" component={Registerstudentpage}/>
                                <GuestRoute exact path="/teacher_register" component={RegisterTeacherPage}/>
                                <Route exact path="/register_main" component={RegisterMainPage}/>
                                <Route exact path="/login" component={Login}/>

                                <Route exact path="/" component={Home}/>
                                <AuthRoute exact path="/student_profile" component={UserProfile}/>
                                <AuthRoute exact path="/teacher_profile" component={TeacherProfile}/>
                                <AuthRoute exact path="/add_lecture_matireal" component={AddLectureMatireal}/>

                                <AuthRoute exact path="/register_new_subject" component={RegisterForNewSubject}/>
                                <AuthRoute exact path="/add_notice" component={AddNotices}/>
                                <AuthRoute exact path="/add_class_schedul" component={AddClassSchedul}/>
                                <AuthRoute exact path="/update_subject/edit/:id" component={UpdateLectureMatireal}/>
                                <AuthRoute exact path="/student_register_module/" component={RegisterNewModule}/>



                                <AuthRoute exact path="/test" component={Test}/>



                                    
                                    

                            </Switch>
                        </div>
                </header>
           
        );
}



const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch({type: 'SET_LOGOUT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);