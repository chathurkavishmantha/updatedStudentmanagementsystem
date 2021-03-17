import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MaleDefaultImage from '../css/img/male_default.jpg';
import axios from 'axios';
import cookie from 'js-cookie';
import {connect} from 'react-redux';

// create architecture project
 class AddLectureMatireal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:props.id,
            // architect_id:'',
            name:'',
            plan_type:'',
            sqfeet:'',            
            Architectural_Style:'',
            no_Bed_Room_Attach:'',
            no_Bed_Room_Non_Attach:'',
            no_Bath_Room_Attach:'',
            no_Bath_Room_Non_Attach:'',
            no_Kitchen:'',
            no_Garage:'',
            no_Covered_Porch:'',
            no_LivingRoom:'',
            no_Veranda:'',
            no_MudRoom:'',
            no_Laundry:'',
            no_GreatRoom:'',

            no_floors:'',
            no_rooms:'',
            no_doors:'',
            no_windows:'',
            wall_material:'',
            celing_material:'',
            floor_material:'',
            roof_material:'',
            img:''

        }
    }
    
    handleForm = (e) => {
        e.preventDefault();
        const data = {
            id:this.state.id,

            name:this.state.name,
            plan_type:this.state.plan_type,
            sqfeet:this.state.sqfeet,
            Architectural_Style:this.state.Architectural_Style,
            no_Bed_Room_Attach:this.state.no_Bed_Room_Attach,
            no_Bed_Room_Non_Attach:this.state.no_Bed_Room_Non_Attach,
            no_Bath_Room_Attach:this.state.no_Bath_Room_Attach,
            no_Bath_Room_Non_Attach:this.state.no_Bath_Room_Non_Attach,
            no_Kitchen:this.state.no_Kitchen,
            no_Garage:this.state.no_Garage,
            no_Covered_Porch:this.state.no_Covered_Porch,
            no_LivingRoom:this.state.no_LivingRoom,
            no_GreatRoom:this.state.no_GreatRoom,
            no_Veranda:this.state.no_Veranda,
            no_MudRoom:this.state.no_MudRoom,
            no_Laundry:this.state.no_Laundry,

            no_floors:this.state.no_floors,
            no_rooms:this.state.no_rooms,
            no_doors:this.state.no_doors,
            no_windows:this.state.no_windows,
            wall_material:this.state.wall_material,
            celing_material:this.state.celing_material,
            floor_material:this.state.floor_material,
            roof_material:this.state.roof_material,
            img:this.state.img
        }
        console.log(data);

        axios.post("http://localhost:8000/api/store", data)
        .then(res => {
            // cookie.set('token', res.data.access_token);
            // this.props.setLogin(res.data.user);
            console.log(res.data);
            this.props.history.push('/Userprofile');
            
        })
        .catch(e => this.setState({errors: e.response.data.errors}))

       

        // axios.get('http://127.0.0.1:8000/api/Userprofile')
        // .then(response=>{
        //     this.setState({
        //         architect_id:response.data.id
        //     });
        // });
        
        
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
                    <div className="text-center">
                        <div className="text-center jumbotron jumbotron-fluid">
                        <form className="text-center" method="POST" onSubmit={this.handleForm}>
                                    <h4><h1>Add New Module </h1><br/>
                                    </h4>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Module Number :</label>
                                            <input type="hidden" className="form-control" id="" name="id" onChange={this.handleInput} value={this.state.id} required />
                                            <input type="text" className="form-control" id="validationServer01" name="name" onChange={this.handleInput} required />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Module Name :</label>
                                            <input type="text" className="form-control" id="validationServer01" name="plan_type" onChange={this.handleInput} required />
                                        </div>                                       
                                        
                                    </div>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Module Description :</label>
                                            <input type="hidden" className="form-control" id="" name="id" onChange={this.handleInput} value={this.state.id} required />
                                            <input type="text" className="form-control" id="validationServer01" name="name" onChange={this.handleInput} required />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Upload date :</label>
                                            <input type="text" className="form-control" id="validationServer01" name="plan_type" onChange={this.handleInput} required />
                                        </div>                                       
                                        
                                    </div>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                        <label htmlFor="validationServer01">Upload file :</label>
                                        <input type="file" />
                                        </div>                                      
                                        
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
        
    };
}

export default connect(mapStateToProps, null)(AddLectureMatireal);
