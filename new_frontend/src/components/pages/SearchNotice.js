import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import ReactStars from 'react-rating-stars-component';
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa';
import userLogo from '../css/img/male_default.jpg';
import CarouselImage03 from '../css/img/Carousel/carousel_img_3.png';



function searchForSqvalue(term){
    return function(x){
        return x.no_Bed_Room_Attach.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}
function searchForattachbathroom(term2){
    return function(x){
        return x.no_Bath_Room_Attach.toLowerCase().includes(term2.toLowerCase()) || !term2;
    }
}
function searchForgarage(term3){
    return function(x){
        return x.no_Garage.toLowerCase().includes(term3.toLowerCase()) || !term3;
    }
}
function searchForKitchen(term4){
    return function(x){
        return x.no_Kitchen.toLowerCase().includes(term4.toLowerCase()) || !term4;
    }
}
function searchForType(term8){
    return function(x){
        return x.plan_type.toLowerCase().includes(term8.toLowerCase()) || !term8;
    }
}
function searchForID(term10){
    return function(x){
        return x.plan_type.toLowerCase().includes(term10.toLowerCase()) || !term10;
    }
}


//recomend system

function searchForreligion(term5){
    return function(x){
        return x.reigion.toLowerCase().includes(term5.toLowerCase()) || !term5;
    }
}
function searchForrating(term6){
    return function(x){
        return x.rating.toLowerCase().includes(term6.toLowerCase()) || !term6;
    }
}
function searchForexperience_rate(term7){
    return function(x){
        return x.experience_rate.toLowerCase().includes(term7.toLowerCase()) || !term7;
    }
}


class SearchNotice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            architect:[],
            Recomemed_architect:[],
            term:'',
            term2:'',
            term3:'',
            term4:'',
            term5:'',
            term6:'',
            term7:'',
            term8:'',
            term10:''

            
            
        }

        this.searchHandler = this.searchHandler.bind(this);
        this.searchHandler2 = this.searchHandler2.bind(this);
        this.searchHandler3 = this.searchHandler3.bind(this);
        this.searchHandler4 = this.searchHandler4.bind(this);
        this.searchHandler5 = this.searchHandler5.bind(this);
        this.searchHandler6 = this.searchHandler6.bind(this);
        this.searchHandler7 = this.searchHandler7.bind(this);
        this.searchHandler8 = this.searchHandler8.bind(this);
        this.searchHandler9 = this.searchHandler9.bind(this);
        
    }

    searchHandler(event){
        this.setState({term:event.target.value })
    }
    searchHandler2(event2){
        this.setState({term2:event2.target.value })
    }
    searchHandler3(event3){
        this.setState({term3:event3.target.value })
    }
    searchHandler4(event4){
        this.setState({term4:event4.target.value })
    }
    searchHandler5(event5){
        this.setState({term5:event5.target.value })
    }
    searchHandler6(event6){
        this.setState({term6:event6.target.value })
    }
    searchHandler7(event7){
        this.setState({term7:event7.target.value })
    }
    searchHandler8(event8){
        this.setState({term8:event8.target.value })
    }
    searchHandler9(event9){
        this.setState({term10:event9.target.value })
    }

    componentDidMount() 
    {
        axios.get('http://127.0.0.1:8000/api/show_all_projects')
        .then(response=>{
            this.setState({
                architect:response.data
            });
        });

        // axios.get('http://127.0.0.1:8000/api/architecture_search_model2/')
        // .then(response=>{
        //     this.setState({
        //         Recomemed_architect:response.data
        //     });
        // });

        axios.get('http://127.0.0.1:8000/api/show_all_architects/')
        .then(response=>{
            this.setState({
                Recomemed_architect:response.data
            });
        });

        
    }

    render() {

        const {term ,term2,term3,term4,term5,term6,term7,term8,term10, architect, Recomemed_architect,} = this.state;

        return (
            <main className="main-nopaddingUp">
            
                <div id="search" className="tab-pane ">
                <div className=" text-center">
                   <br/> <h4>Search Notices</h4>
                <hr/>
                    <div className="container form-group">
                        <form>
                            <div className="row">
                                <div className=" col-md-6 mb-3 search_filter_inputs">
                                    <select className="custom-select" name="no_Bed_Room_Attach" id="" onChange={this.searchHandler} value={term} required>
                                            <option defaultValue>Subject....</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                    </select>
                                </div>
                                <div className=" col-md-6 mb-3 search_filter_inputs">
                                    <select className="custom-select" name="no_Garage" id="" onChange={this.searchHandler3} value={term3} required>
                                            <option defaultValue>Year....</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className=" col-md-6 mb-3 search_filter_inputs">
                                    <select className="custom-select" name="no_Garage" id="" onChange={this.searchHandler3} value={term3} required>
                                            <option defaultValue>Year....</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                    </select>
                                </div>
                            </div> */}
                        </form>
                    </div>
                    <hr/>
                    
                    <div className="text-center jumbotron jumbotron-fluid">


                            <div className="row text-center">
                            {
                                architect
                                .filter(searchForSqvalue(term))
                                .filter(searchForattachbathroom(term2))
                                .filter(searchForgarage(term3))
                                .filter(searchForKitchen(term4))
                                .filter(searchForType(term8))
                                .filter(searchForID(term10))
                                    .map( archi => 
                                
                                        <div className="user_card" key={archi.id}>
                                            <div className="user_card-header">
                                                <div className="animated_wave-bg">
                                                    <div className="animated_wave-01"></div>
                                                    <div className="animated_wave-02"></div>
                                                    <div className="animated_wave-03"></div>
                                                </div>
                        
                                                <div className="user_profile_pic-content">
                                                    <img className="user_profile_pic" src={CarouselImage03} alt=""/>
                                                </div>
                                            </div>
                        
                                            <div className="user_card-content">
                                                <div className="user_name">
                                                    <h5>Architect name :{archi.name}</h5>
                                                    <h5>Plane name :{archi.plan_type}</h5>
                                                    <h5>Master Bed :{archi.no_Bed_Room_Attach}</h5>
                                                    <h5>Kitchen : {archi.no_Kitchen}</h5>
                                                    <h5>Attach BathRooms : {archi.no_Bath_Room_Attach}</h5>
                                                    <h5>Garage: {archi.no_Garage}</h5>
                                                    {/* <h5>Project Number :{archi.projid}</h5> */}

                                                </div>
                                                {/* <Link to={'/arc_prductdetails'} className="btn btn-success">View</Link> */}
                                                <Link to={`/arc_prductdetails/ ${archi.projid}`} className="btn btn-success">View</Link>

                                                
                                            </div>
                                        </div>

                                    )
                                
                            }
                            </div>

                        </div>
                        <hr/>
                    </div>
                    </div>
            </main>
        )
    }
}

export default SearchNotice
