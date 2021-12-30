import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Sidebar from './sidebar';

import logo from './logo/sidebar-logo.png';
import volunteer from './logo/volunteerIcon.svg';
import like from './logo/likeIcon.svg';
import deleteIcon from './logo/icon-delete.svg';
import editIcon from './logo/icon-edit.svg';
// import detailsIcon from './logo/icon-view-details.svg';
import { CategoryModal } from './modal/categoryModal';
import swal from 'sweetalert';

export default class Product extends Component {

    auth = JSON.parse(localStorage.getItem('auth'))

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            providers: [],
            category: [],
            providerid: '',
            quantity: '',
            imageurl: '',
            categoryid: '',
            price:'',
            discount:'',
            description:'',
            img:'',
      file: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        };

    }

    state = { show: false };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <div>
                {/* <FontAwesomeIcon icon="coffee" /> */}
                <div class="wrapper">
                    <Sidebar />
                    <div class="main_content">
                        <div class="header"> <label class="span">Dashboard</label></div>

                        <div class="header-content">
                                <h3 class="header_text">Welcome back, Admin Juan Dela Cruz.</h3>
                                    <div id ="right">  
                                      <img class="logo" src={logo} />
                                    </div>  
                        </div>
                        <div class="container">
                            <div class="container_horizontal_content">
                                <p style={{color: "#505A7D"}}>Activity Performance</p>
                                <p style={{color: "#505A7D", paddingTop: "40px"}}>Total Activity Overview</p>


                                <div class="rel">
                                    <div id="first">
                                        <div class="dot">T</div>
                                    </div>

                                    <div id="second">
                                        <p>2KK Tulong sa Kapwa Kapatid!</p>
                                        <div class="progressContainer">
                                            <div class="bar html"></div>
                                        </div>
                                        <p class="percentage-text">
                                            <span style={{marginLeft: "12px"}}>95</span>%
                                        </p>
                                    </div>
                                </div>

                                <div class="rel">
                                    <div id="third">
                                        <div class="dot">C</div>
                                    </div>

                                    <div id="fourth">
                                        <p>The Cordilleran</p>
                                        <div class="progressContainer">
                                            <div class="bar html"></div>
                                        </div>
                                        <p class="percentage-text">
                                        <span style={{marginLeft: "12px"}}>95</span>%
                                        </p>
                                    </div>
                                </div>

                                <div class="rel">
                                    <div id="third">
                                        <div class="dot">O</div>
                                    </div>

                                    <div id="fourth">
                                        <p>Online Tawilis Patrolya</p>
                                        <div class="progressContainer">
                                            <div class="bar html"></div>
                                        </div>
                                        <p class="percentage-text">
                                        <span style={{marginLeft: "12px"}}>95</span>%
                                        </p>
                                    </div>
                                </div>

                                <p style={{color: "#505A7D", paddingTop: "26px"}}>Activity Comparative Report</p>
                            
                                <table class="product_table">
                                    <thead>
                                        <tr>
                                            <th>Date<i class="fa fa-sort-down"></i></th>
                                            <th>Volunteer<i class="fa fa-sort-down"></i></th>
                                            <th>Product<i class="fa fa-sort-down"></i></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                            
                                    </tbody>
                                </table>
                            </div>
                            
                            <div id="container">
                                <div class="div-1">
                                    <img src={volunteer} class="icon"/>
                                    <p style={{color: "#505A7D", paddingTop: "5px", background: {volunteer}}}>Total <b>Volunteers</b></p>
                                    <h2 style={{color: "#505A7D", paddingTop: "24px", textAlign: "center", marginBottom:"20px"}}>178,286,000</h2>
                                </div>

                                <div class="div-2">
                                    <p style={{color: "red", paddingTop: "5px"}}>Live Data</p>
                                <table class="product_table">
                                    <thead>
                                        <tr>
                                            <th>Date<i class="fa fa-sort-down"></i></th>
                                            <th>Volunteer<i class="fa fa-sort-down"></i></th>
                                            <th>Product<i class="fa fa-sort-down"></i></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                            
                                    </tbody>
                                </table>
                                </div>

                                <div class="div-3">
                                <img src={like} class="icon"/>
                                     <p style={{color: "#505A7D", paddingTop: "10px"}}>Total <b>Donations</b></p>
                                    <h2 style={{color: "#505A7D", paddingTop: "24px", textAlign: "center"}}>178,286,000</h2>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

{/* <script>

var number = 95; // this is the same number you are using to change the graph.
var perc = document.querySelector(".percentage-number");
perc.innerHTML = number;

</script> */}