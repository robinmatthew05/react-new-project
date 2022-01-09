import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Sidebar from './sidebar';

import logo from './logo/sidebar-logo.png';
import volunteer from './logo/volunteerIcon.svg';
import like from './logo/likeIcon.svg';
// import detailsIcon from './logo/icon-view-details.svg';
import { CategoryModal } from './modal/categoryModal';
import swal from 'sweetalert';

export default class AdsandPartners extends Component {

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
                        <div class="header"> <label class="span">Ads and Partners</label></div>

                        <div class="container">


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