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
import ImportFileINSS from "views/pages/files/ImportINSS.js";


//ROTAS CLIENTES
import Clients from "views/pages/clients/Clients";
import EditClient from "views/pages/clients/EditClient";
import ViewClient from "views/pages/clients/ViewClient";
import DeleteClient from "views/pages/clients/DeleteClient";
//FIM ROTAS CLIENTES

//ROTAS CLIENTES INSS
import InssClients  from "views/pages/inss/InssClients";
import ViewInssClient from "views/pages/inss/ViewInssClient";
import EditInssClient from "views/pages/inss/EditInssClient";
import DeleteInssClient from "views/pages/inss/DeleteInssClient";
//FIM ROTA CLIENTES INSS


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

//DASHBOARD ALL USERS ADMIN
import DashboardAllUsers from "views/pages/allUsers/DashboardAllUsers";
import CreateAllUser from "views/pages/allUsers/CreateAllUserProfile";
import EditAllUser from "views/pages/allUsers/EditAllUserProfile";
import ViewAllUser from "views/pages/allUsers/AllUserProfile";
import DeleteAllUserProfile from "views/pages/allUsers/DeleteAllUserProfile";
import AddressAllUserProfile from "views/pages/allUsers/AddressAllUserProfile";
//FIM DASHBOARD ADMIN





const dashboardRoutes = [

  {
    path: "/dashboard",
    name: "Administração",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
    level:["Gerente", "Administrador"]
  },
  {
    path: "/all/users",
    name: "Usúarios Geral",
    icon: "nc-icon nc-circle-09",
    component: DashboardAllUsers,
    layout: "/admin",
    level:["Administrador"]
  },
  {
    path:"/all/user/edit/:id",
    layout:"/admin",
    component:EditAllUser,
    level:  ["Administrador"]
  },
  {
    path:"/all/user/view/:id",
    layout:"/admin",
    component: ViewAllUser,
    level:  ["Administrador"]
  },
  {
    path:"/all/user/delete/:id",
    layout:"/admin",
    component: DeleteAllUserProfile,
    level:  ["Administrador"]
  },
  {
    path:"/all/user/create",
    layout:"/admin",
    component: CreateAllUser,
    level:  ["Administrador"]
  },
  {
    path:"/all/user/address/create",
    layout:"/admin",
    component: AddressAllUserProfile,
    level:  ["Administrador"]
  },
  

  //ROTAS DE EMPRESA
  {
    path: "/enterprises/dashboard",   
    component:DashboardEnterprise,
    icon: "nc-icon nc-chart-pie-35",
    layout: "/admin",
    name:" Empresas",
    level:  ["Administrador"]
  },  
  {
    path: "/enterprises/create",   
    component:CreateEnterprise,
    layout: "/admin",
    level:  ["Administrador"]
  },
  {
    path: "/enterprises/address/create",   
    component:AddressEnterprise,
    layout: "/admin",
    level:  ["Administrador"]
  },
  {
    path: "/enterprises/edit/:id",   
    component:EditEnterprise,
    layout: "/admin",
    level:  ["Administrador"]
  },
  {
    path: "/enterprises/view/:id",   
    component:EnterpriseProfile,
    layout: "/admin",
    level:  ["Administrador"]
  },
  {
    path: "/enterprises/delete/:id",   
    component:DeleteEditEnterprise,
    layout: "/admin",
    level:  ["Administrador"]
  },
  //FINAL DE ROTAS EMPRESAS

  //Rotas de USUARIOS
  {
    path: "/user",
    name: "Usuários",
    icon: "nc-icon nc-circle-09",
    component: DashboardUser,
    layout: "/admin",
    level:["Gerente", "Administrador"]

  },
  {
    path: "/users/create",
    component:CreateUserProfile,
    layout: "/admin",
    level:["Gerente", "Administrador"]
  },  

  {
    path: "/users/edit/:id",
    component: EditUserProfile,
    layout: "/admin",
    level:["Gerente", "Administrador"]
  },
  {
    path: "/users/address/create",
    component:AddressUserProfile,
    layout: "/admin",
    level:["Gerente", "Administrador"]
  },
  {
    path: "/users/view/:id",   
    component: UserProfile,
    layout: "/admin",
    level:["Gerente", "Administrador"]
  },{
    path: "/users/delete/:id",
    component: DeleteUserProfile,
    layout: "/admin",
    level:["Gerente", "Administrador"]
  },
  //FIM ROTAS DE USUÁRIOS
  {
    path: "/importfile",
    component: ImportFile,
    layout: "/admin",
    icon: "nc-icon nc-paper-2",
    name: "Importar F.A",
    level:["Padrão", "Gerente","Administrador"]
  },
  {
    path:"/inss/importfile",
    component:ImportFileINSS,
    layout:"/admin",
    icon: "nc-icon nc-paper-2",
    name: "Importar INSS",
    level:["Padrão", "Gerente","Administrador"]
  },
  //ROTAS DE CLIENTES
  {
    path: "/client",
    name: "Clientes F.A",
    icon: "nc-icon nc-notes",
    component: Clients,
    layout: "/admin",
    level:["Padrão", "Gerente","Administrador"], 
    
   },
   {
    path:"/clients/edit/:id",
    component: EditClient,
    layout: "/admin",
    level: ["Padrão", "Gerente","Administrador"], 
   },
   {
    path:"/clients/view/:id",
    component: ViewClient,
    layout: "/admin",
    level: ["Padrão", "Gerente","Administrador"], 
   },
   {
    path:"/clients/delete/:id",
    component: DeleteClient,
    layout: "/admin",
    level:["Padrão", "Gerente","Administrador"], 
   },   //FIM ROTA CLIENTES
  
      //ROTAS CLIENTES INSS
    {
      path:"/inss/clients",
      component: InssClients,
      icon: "nc-icon nc-notes",
      name:"INSS CLIENTES",
      layout:"/admin",
      level:["Padrão", "Gerente","Administrador"],
    },
    {
      path:"/inss/view/:id",
      component: ViewInssClient,    
      layout:"/admin",
      level:["Padrão", "Gerente","Administrador"],
    },
    {
      path:"/inss/edit/:id",
      component: EditInssClient,    
      layout:"/admin",
      level:["Padrão", "Gerente","Administrador"],
    },
    {
      path:"/inss/delete/:id",
      component: DeleteInssClient,    
      layout:"/admin",
      level:["Padrão", "Gerente","Administrador"],
    },
   //FIM ROTAS CLIENTES INSS
];

export default dashboardRoutes;
