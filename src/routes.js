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
import Dashboard from "views/pages/dashboard/Dashboard";
import ImportFile from "views/pages/files/ImportFile.js";


//ROTAS CLIENTES
import Clients from "views/pages/clients/Clients";
//FIM ROTAS CLIENTES


//ROTAS DE USUARIOS
import DashboardUser from "views/pages/users/DashboardUser.js"
import UserProfile from "views/pages/users/UserProfile.js";
import CreateUserProfile from "views/pages/users/CreateUserProfile";
import EditUserProfile from "views/pages/users/EditUserProfile";
import DeleteUserProfile from "views/pages/users/DeleteUserProfile";
import AddressUserProfile from "views/pages/users/AddressUserProfile";
//FIM ROTAS DE USUARIOS

//EMPRESAS
import DashboardEnterprise from "views/pages/enterprises/DashboardEnterprise";
import CreateEnterprise from "views/pages/enterprises/CreateEnterprise";
import EditEnterprise from "views/pages/enterprises/EditEnterprise";
import DeleteEditEnterprise from "views/pages/enterprises/DeleteEnterprise";
import EnterpriseProfile from "views/pages/enterprises/EnterpriseProfile";
import AddressEnterprise from "views/pages/enterprises/AddressEnterprise";
//FIM EMPRESAS

import Icons from "views/Icons.js";

const dashboardRoutes = [

  {
    path: "/dashboard",
    name: "Administração",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  

  //ROTAS DE EMPRESA
  {
    path: "/enterprises/dashboard",   
    component:DashboardEnterprise,
    layout: "/admin"
  },  
  {
    path: "/enterprises/create",   
    component:CreateEnterprise,
    layout: "/admin"
  },
  {
    path: "/enterprises/address/create",   
    component:AddressEnterprise,
    layout: "/admin"
  },
  {
    path: "/enterprises/edit/:id",   
    component:EditEnterprise,
    layout: "/admin"
  },
  {
    path: "/enterprises/view/:id",   
    component:EnterpriseProfile,
    layout: "/admin"
  },
  {
    path: "/enterprises/delete/:id",   
    component:DeleteEditEnterprise,
    layout: "/admin"
  },
  //FINAL DE ROTAS EMPRESAS
  //Rotas de USUARIOS
  {
    path: "/user",
    name: "Usuários",
    icon: "nc-icon nc-circle-09",
    component: DashboardUser,
    layout: "/admin"
  },
  {
    path: "/users/create",
    component:CreateUserProfile,
    layout: "/admin"
  },  

  {
    path: "/users/edit/:id",
    component: EditUserProfile,
    layout: "/admin"
  },
  {
    path: "/users/address/create",
    component:AddressUserProfile,
    layout: "/admin"
  },
  {
    path: "/users/view/:id",   
    component: UserProfile,
    layout: "/admin"
  },{
    path: "/users/delete/:id",
    component: DeleteUserProfile,
    layout: "/admin"
  },
  //FIM ROTAS DE USUÁRIOS
  {
    path: "/importfile",
    component: ImportFile,
    layout: "/admin",
    icon: "nc-icon nc-paper-2",
    name: "Importar PLanilha"
  },
  //ROTAS DE CLIENTES
  {
    path: "/clients",
    name: "Clientes",
    icon: "nc-icon nc-notes",
    component: Clients,
    layout: "/admin"
   },
   //FIM ROTA CLIENTES

  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin"
  },


];

export default dashboardRoutes;
