import React, { Component } from 'react'

import logo from './logo/sidebar-logo.png';
import assetIcon from './logo/icon-asset.svg';
import assetIconBlack from './logo/icon-asset-black.svg';
import forgetpass from './logo/forgetpass.svg';
import pedingIconRed from './logo/pending-orders-red.svg';


import adsAndPartners from './logo/icon-adspartners.svg';
import content from './logo/icon-content.svg';
import dashboardIc from './logo/icon-dashboard.svg';
import donation from './logo/icon-donations.svg';
import volunteer from './logo/icon-users.svg';

import activeDashboard from './logo/icon-active-dashboard.svg';
import activeVolunteer from './logo/icon-active-volunteer.svg';
import activeContent from './logo/icon-active-content.svg';
import activeDonations from './logo/icon-active-donations.svg';
import activeAds from './logo/icon-active-ads.svg';

import sampleIcon from './logo/sampleIcon.png';

import { accordionData } from './utils/content';


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
        const dashboard = window.location.pathname.match(/^\/dashboard/) ? "active" : "";
        const actvolunteer = window.location.pathname.match(/^\/volunteer/) ? "active" : "";
        const actdonation = window.location.pathname.match(/^\/donation/) ? "active" : "";
        const actadsAndPartners = window.location.pathname.match(/^\/adspartners/) ? "active" : "";
    
        const assets = (window.location.pathname.match(/^\/product/) || window.location.pathname.match(/^\/category/)|| window.location.pathname.match(/^\/suppliers/)) ? "" : "block";
        const product = window.location.pathname.match(/^\/product/) ? "active-child" : "";
        const category = window.location.pathname.match(/^\/category/) ? "active-child" : "";
        const suppliers = window.location.pathname.match(/^\/suppliers/) ? "active-child" : "";

        const asset_maintenace = (window.location.pathname.match(/^\/product/) || window.location.pathname.match(/^\/category/)|| window.location.pathname.match(/^\/suppliers/)) ? "active" : "";

        //active text color

        const asset_txt_color = (window.location.pathname.match(/^\/product/) || window.location.pathname.match(/^\/category/)|| window.location.pathname.match(/^\/suppliers/)) ? "active-txt-color" : "";
        const pendingOrders_txt_color = window.location.pathname.match(/^\/pendingorder/) ? "active-txt-color" : "";

        //active image
        const dashboard_img = window.location.pathname.match(/^\/dashboard/) ? activeDashboard : dashboardIc;
        const volunteer_img = window.location.pathname.match(/^\/volunteer/) ? activeVolunteer : volunteer;
        const content_img = window.location.pathname.match(/^\/volunteer/) ? activeVolunteer : volunteer;
        const donations_img = window.location.pathname.match(/^\/donation/) ? activeDonations : donation;
        const ads_img = window.location.pathname.match(/^\/adspartners/) ? activeAds : adsAndPartners;
        
        return (
            <div>
                <div class="sidebar">
                    <img class="logo" src={logo} />
                   
                    <ul class ="menu-horizontal" style={{paddingTop: "40px"}}>
                        <li id="sales" className={dashboard}>
                            <img src={dashboard_img} class="icon-image" id="salesimg"/>
                            <Link to="dashboard" class="salesTitle" > Dashboard
                            </Link>
                        </li>

                        <li id="sales" className={actvolunteer}>
                            <img src={volunteer_img} class="icon-image" id="salesimg"/>
                            <Link to="volunteer" class="salesTitle" > Volunteers
                            </Link>
                        </li>

                        <li id="sales" className={asset_maintenace}>
                        <img src={content} class="icon-image" id="salesimg"/>
                            <Link to="product" className={"salesTitle " + asset_txt_color} > Content Management
                            </Link>
                        </li>
                        <li id="product"  className={assets + " " + product}>
                            <img class="icon-image" id="salesimg"/>
                            <Link to="product" class="salesTitle" > Activities
                            </Link>
                        </li>
                        <li id="product" className = {assets + " " + category} >
                            <img class="icon-image" id="salesimg"/>
                            <Link to="category" class="salesTitle" > News
                            </Link>
                        </li>

                        <li id="sales" className={actdonation}>
                            <img src={donations_img} class="icon-image" id="salesimg"/>
                            <Link to="donations" class="salesTitle" > Donations
                            </Link>
                        </li>
                        <li id="sales" className={actadsAndPartners}>
                            <img src={ads_img} class="icon-image" id="salesimg"/>
                            <Link to="adspartners" class="salesTitle" > Ads and Partners
                            </Link>
                        </li>

                        {/* <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div> */}
                        <div class="wrapperSidebar">
                                    <div id="sideBarIcon">
                                    <img src={sampleIcon} class="icon"></img>
                                    </div>

                                    <div id="sidebarName">
                                        <p class="adminName">Juan Dela Cruz</p>
                                        <p class="logout">Log out</p>
                                    </div>
                                </div>
                    </ul>
                </div>
            </div>
        );
    }
}

export default sidebar;

