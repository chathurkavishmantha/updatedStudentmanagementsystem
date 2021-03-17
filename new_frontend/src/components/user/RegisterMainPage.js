import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MainLogo from '../css/img/stuent_management_main.jpg';

import Registerstudentpage from '../user/RegisterCustomer';

class RegisterMainPage extends Component {
    render() {
        return (
            <main className="main">
                <div className="registry-box">
                    <img className="registerPage_img" src={MainLogo} alt=""></img>
                    <div>
                        <h1>Welcome to Registration </h1>
                        {/* <h3>Join with us today to be a successfull and professional personnel.</h3> */}
                    </div>
                    <hr/>
                    <div className="container">
                        <div className="row text-white container">
                            <div className="col-md-6 container">
                                <Link to="/student_register" className="btn btn-lg text-white fire_gradient shadow">Student</Link>
                                <br/>
                                <p className="text-dark container">
                                    The people who are looking forward to provide their services and make their Business success.
                                </p>
                            </div>                        
                            <div className="col-md-6 container">
                                <Link to="/teacher_register" className="btn btn-lg text-white fire_gradient shadow">Teacher</Link>
                                <br/>
                                <p className="text-dark container">
                                    The people who are looking for the services for their dream house construction and make their dream come true.
                                </p>
                            </div>                        
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default RegisterMainPage
