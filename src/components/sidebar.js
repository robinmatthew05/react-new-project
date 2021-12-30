import React, { Component } from 'react'

import logo from './logo/sidebar-logo.png';
import assetIcon from './logo/icon-asset.svg';
import assetIconBlack from './logo/icon-asset-black.svg';
import pickupIcon from './logo/icon-forpickup.svg';
import pendingIcon from './logo/icon-pendingorders.svg';
import saleIcon from './logo/icon-sales.svg';
import forgetpass from './logo/forgetpass.svg';
import pedingIconRed from './logo/pending-orders-red.svg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {
    Redirect
} from "react-router-dom";
import Accordion from './Accordion';




class sidebar extends Component {

    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            localStorage.clear()
            return <Redirect to='/Auth' />
        }
    }


    logout() {
        localStorage.clear()
        // var auth = JSON.parse(localStorage.getItem('auth'))
        // auth ? <Redirect to="home" /> : null
        // return <div>{auth ? <Redirect to="login"></Redirect> : null} 

    }
    

    render() {

        const homeClass = window.location.pathname === "/" ? "active" : "";
        const sales = window.location.pathname.match(/^\/category/) ? "active" : "";
        const pendingOrders = window.location.pathname.match(/^\/pendingorder/) ? "active" : "";
        const assets = (window.location.pathname.match(/^\/product/) || window.location.pathname.match(/^\/category/)|| window.location.pathname.match(/^\/suppliers/)) ? "" : "block";
        const product = window.location.pathname.match(/^\/product/) ? "active-child" : "";
        const category = window.location.pathname.match(/^\/category/) ? "active-child" : "";
        const suppliers = window.location.pathname.match(/^\/suppliers/) ? "active-child" : "";

        const asset_maintenace = (window.location.pathname.match(/^\/product/) || window.location.pathname.match(/^\/category/)|| window.location.pathname.match(/^\/suppliers/)) ? "active" : "";

        //active text color

        const asset_txt_color = (window.location.pathname.match(/^\/product/) || window.location.pathname.match(/^\/category/)|| window.location.pathname.match(/^\/suppliers/)) ? "active-txt-color" : "";
        const pendingOrders_txt_color = window.location.pathname.match(/^\/pendingorder/) ? "active-txt-color" : "";

        //active image
        const asset_img = (window.location.pathname.match(/^\/product/) || window.location.pathname.match(/^\/category/)|| window.location.pathname.match(/^\/suppliers/)) ? assetIcon : assetIconBlack;
        const pending_orders_img = window.location.pathname.match(/^\/pendingorder/) ? pedingIconRed : pendingIcon;
        return (
            <div>
                <div class="sidebar">
                    <img class="logo" src={logo} />
                   
                    <hr id="line6" class="line"/>
                    

                    <ul class ="menu-horizontal">
                        <li id="sales" className={asset_maintenace}>
                        <img src={asset_img} class="icon-image" id="salesimg"/>
                            <Link to="product" className={"salesTitle " + asset_txt_color} > Asset Maintenance
                            </Link>
                        </li>
                        <li id="product"  className={assets + " " + product}>
                            <img class="icon-image" id="salesimg"/>
                            <Link to="product" class="salesTitle" > Products
                            </Link>
                        </li>
                        <li id="product" className = {assets + " " + category} >
                            <img class="icon-image" id="salesimg"/>
                            <Link to="category" class="salesTitle" > Category
                            </Link>
                        </li>
                        <li id="product" className = {assets + " " + suppliers}>
                            <img class="icon-image" id="salesimg"/>
                            <Link to="suppliers" class="salesTitle" > Supplier
                            </Link>
                        </li>
                        
                        <li id="sales" className={sales}>
                            <img src={saleIcon} class="icon-image" id="salesimg"/>
                            <Link to="home" class="salesTitle" > Sales
                            </Link>
                        </li>
                        <li id="pendingOrders" className={pendingOrders}>
                            <img src={pending_orders_img} class="icon-image" id="pendingimg"/>
                            <Link to="pendingorder" className={"pendingOrdersTitle " + pendingOrders_txt_color}>Pending Orders</Link>
                        </li>
                        <li id="forPickup">
                            <img src={pickupIcon} class="icon-image" id="forPickupimg" />
                            <Link to="home" class="forPickupTitle">For Pickup</Link>
                        </li>
                    </ul>


                </div>
            </div>
        );
    }
}

export default sidebar;

