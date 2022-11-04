import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import {Link, useParams} from 'react-router-dom'
import {useHistory} from'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import $ from 'jquery'; 
import { useEffect, useState } from 'react'

function DashboardEnterprise() {

  ////////////////////////////////
  let token =localStorage.getItem('token');
  const navigate = useHistory();
  const [dados, setDados] = useState([]);
  const [users, setUsers] = useState([]);
 
 //Valida se o token do usuário  é valido
  useEffect(()=>{
     if(!token){
         navigate.push("/");
      }else{
              //Opções de Cabeçalho da resquest
              const options ={
                 method: "GET",
                 mode: "cors",
                 cache: 'default',
                 headers:{
                     'Authorization': `Bearer ${localStorage.getItem('token')}`,
                     'Content-Type': 'application/json',
                 }
             }
           
             //Request para a API
             fetch('http://191.101.78.186:5000/enterprise/list',options)
             .then( response => response.json())
     
             .then(data => {
                
                setDados(data)
             })
             .catch(erro => console.log('Error:', erro.message));
 
 
           
      }
  },[]);
 
 
  
 
 
 
  useEffect(()=>{
     //É Executada para retornar total de usuarios Cadastrados no sistema
     fetch('http://191.101.78.186:5000/user/list',{
         method: "GET",
         mode: "cors",
         cache: 'default',
         headers:{
             'Authorization': `Bearer ${localStorage.getItem('token')}`,
             'Content-Type': 'application/json',
         }
       })
       .then( response => response.json())
 
       .then(data => {
          
          setUsers(data)
       })
       .catch(erro => console.log('Error:', erro.message))
  },[])
 
  //Percorre todo o array de dados retornado pela requisição
  const rows =  dados.map((element, index)=>{
     return(
             <tr key={index}>
               
             <td key={element.id_enterprise}>{element.cnpj}</td>
             <td>{element.name_fantasy}</td>
             <td>{element.social_reason}</td>
             <td >{element.email}</td>
             <td>
             <a href={'/admin/enterprises/edit/' + element.id_enterprise}  className="btn btn-primary" id="btn-enterprise-edit" >EDITAR</a>|
             <a href={'/admin/enterprises/view/' + element.id_enterprise} className="btn btn-warning" id="btn-enterprise-warning">VER</a>|
             <a  href={"/admin/enterprises/delete/" + element.id_enterprise} className="btn btn-danger" id="btn-enterprise-danger" >DELETAR</a></td>
            
             </tr>
  )
 })
 const created = localStorage.getItem('criou');
 useEffect(() => {
   //É Executada quando requisição POST deEmpresa é bem executada
  if(created){
   setTimeout(() => {
     const Toast = Swal.mixin({
       toast: true,
       position: 'top-end',
       showConfirmButton: false,
       timer: 3000,
       timerProgressBar: true,
       didOpen: (toast) => {
         toast.addEventListener('adrress', Swal.stopTimer)
         toast.addEventListener('adrress', Swal.resumeTimer)
       }
     })
     
     Toast.fire({
       icon: 'success',
       title: 'Empresa Cadastrado com Sucesso!'
     })
     localStorage.removeItem('criou');
     localStorage.deleteItem('criou');
 
    }, 2000)
  }
 
 },[])
 
 const endereco = localStorage.getItem('adrress');
 useEffect(() => {
   //É Executada quando requisição POST de Endereço é bem executada
  if(endereco){
   setTimeout(() => {
     const Toast = Swal.mixin({
       toast: true,
       position: 'top-end',
       showConfirmButton: false,
       timer: 3000,
       timerProgressBar: true,
       didOpen: (toast) => {
         toast.addEventListener('adrress', Swal.stopTimer)
         toast.addEventListener('adrress', Swal.resumeTimer)
       }
     })
     
     Toast.fire({
       icon: 'success',
       title: 'Endereço Cadastrado com Sucesso!'
     })
     localStorage.removeItem('adrress');
     localStorage.deleteItem('adrress');
 
    }, 2000)
  }
 
 },[])
 
 //Se array de dados for maior que 0 renderiza o jquery dataTables
 if(rows.length > 0) {
      $(()=>{
         $('#mytable').DataTable();
      })
 
 }
 
 let exclud = localStorage.getItem('excluir');
 useEffect(() => {
 //É Executada quando a requisição de DELETAR é bem executada
   if(exclud){
     setTimeout(() => {
     const Toast = Swal.mixin({
       toast: true,
       position: 'top-end',
       showConfirmButton: false,
       timer: 3000,
       timerProgressBar: true,
       didOpen: (toast) => {
         toast.addEventListener('mouseenter', Swal.stopTimer)
         toast.addEventListener('mouseleave', Swal.resumeTimer)
       }
     })
     
     Toast.fire({
       icon: 'success',
       title: 'Operação realizada com Sucesso!'
     })
     localStorage.removeItem('excluir');
     localStorage.deleteItem('excluir');
 
    }, 2000)
   }
  },[])
 
  let atualizar = localStorage.getItem('atualizou');
  useEffect(() => {
  //É Executada quando a requisição de update é bem executada
    if(atualizar){
      setTimeout(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Empresa atualizada com Sucesso!'
      })
      localStorage.removeItem('atualizou');
      localStorage.deleteItem('atualizou');
  
     }, 2000)
    }
     
    
  
  
   },[])
 
   let error = localStorage.getItem('error');
  useEffect(() => {
  //É Executada se houver error na requisição de Delete
    if(error){
      setTimeout(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Usuários e Clientes estão Vinculados a está empresa!'
      })
      localStorage.removeItem('error');
      localStorage.deleteItem('error');
  
     }, 2000)
    }
     
    
  
  
   },[])
  ////////////////////////////////
  return (
    <>
      <Container fluid>
        <Row>
      
          <Col lg="3" sm="6">
          <a href="/admin/enterprises/create">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                 
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-istanbul text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Empresas</p>
                      <Card.Title as="h5">ADD</Card.Title>
                    </div>
                  </Col>
                 
                </Row>
              </Card.Body>
            
            </Card>
            </a>
          </Col>
       
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Usuários</p>
                      <Card.Title as="h5">TOTAL:{users.length}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-istanbul text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Empresas</p>
                      <Card.Title as="h5">TOTAL:{dados.length}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
           
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <a href="/admin/enterprises/address/create">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-paper-2 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Endereços</p>

                      <Card.Title as="h5">ADD</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
      
            </Card>
            </a>
          </Col>
        </Row>
     
        <Row>
        <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Empresas Cadastradas</Card.Title>
                <p className="card-category">
                  Dados Cadastrados no Sistema
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped" id="mytable">
                  <thead>
                    <tr>
                      <th className="border-0">CNPJ</th>
                      <th className="border-0">Razão Social</th>
                      <th className="border-0">Nome Fantasia</th>
                      <th className="border-0">E-mail</th>
                      <th className="border-0">Opções</th>
                    </tr>
                  </thead>
                  <tbody>
                  {rows}
                   
                  
                 
                
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default DashboardEnterprise;
