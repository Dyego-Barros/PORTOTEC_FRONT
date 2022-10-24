/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

import logo from "assets/img/reactlogo.png";

function Sidebar({ color, image, routes }) {
  const location = useLocation();

  const use = JSON.parse(localStorage.getItem('user'));

  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")"
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
           
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img src={require("assets/img/reactlogo.png")} alt="..." />
            </div>
          </a>
          <a className="simple-text">
            PORTO SOLUÇÔES
          </a>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect)
         
             if(prop.name == null){
                return(
                  <>
                  </>
                )
            } else{
              if(prop.level[0] === use[0].level || prop.level[1] === use[0].level|| prop.level[2] === use[0].level){
                return (

                
              
                  <li key={key}>
                   <NavLink
                     to={prop.layout + prop.path}
                     className="nav-link"
                     activeClassName="active"
                   >
                     <i className={prop.icon} />
                     <p>{prop.name}</p>
                   </NavLink>
                 </li>
               );

              }else{
                return(
                  <>
                  </>
                )
              }
             
            }
           
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
