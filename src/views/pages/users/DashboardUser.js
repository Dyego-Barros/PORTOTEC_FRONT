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
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "datatables.net-dt/js/dataTables.dataTables"
import $ from 'jquery'; 


function DashboardUsers() {
  const mySwal = withReactContent(Swal);
  const token = localStorage.getItem('token');
  const [users, setUsers]= useState([]);
  const navigate = useHistory();

  useEffect(()=>{
    if(!token){
      navigate.push("/");
    }else{
      const options={
        method: 'GET',
        mode:'cors',
        cache:'default',
        headers:{
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        }
      }

      fetch('http://localhost:5000/user/list', options)
      .then(response=>response.json())
      .then((data)=>{
        setUsers(data)
      })
      .catch(error=>console.log(error))
    }
  },[])

  const results = users.map((element)=>{
   return(
    <>
     <tr key={element.index}>
      <td>{element.name}</td>
      <td>{element.email_user}</td>
      <td>{element.phone}</td>
      <td>{element.level}</td>
      <td>{element.name_fantasy}</td>
      <td>
        <a href={"/admin/users/edit/"+element.id_user} className="btn btn-primary" id="btn-enterprise-edit">EDITAR</a>|
        <a href={"/admin/users/view/"+element.id_user}  className="btn btn-warning" id="btn-enterprise-warning">VER</a>|
        <a href={"/admin/users/delete/"+element.id_user}   className="btn btn-danger" id="btn-enterprise-danger">DELETAR</a>|
      </td>

    </tr>
    </>
   )
  })

  //SE POST FOR VALIDO EXIBE MSG DE SUCESSO
  const created = localStorage.getItem('criou');
  useEffect(()=>{
  if(created){
    setTimeout(()=>{
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
        title: 'Usuário Cadastrado com Sucesso!'
      })
      localStorage.removeItem('criou');
      localStorage.deleteItem('criou');
    },2000);
  }
  },[])

   //SE POST DE ENDEREÇO FOR VALIDO EXIBE MSG DE SUCESSO
   const adrress = localStorage.getItem('adrress_user');
   useEffect(()=>{
   if(adrress){
     setTimeout(()=>{
       const Toast = Swal.mixin({
         toast: true,
         position: 'top-end',
         showConfirmButton: false,
         timer: 3000,
         timerProgressBar: true,
         didOpen: (toast) => {
           toast.addEventListener('adrress_user', Swal.stopTimer)
           toast.addEventListener('adrress_user', Swal.resumeTimer)
         }
       })
       
       Toast.fire({
         icon: 'success',
         title: 'Endereço de Usuário Cadastrado com Sucesso!'
       })
       localStorage.removeItem('adrress_user');
       localStorage.deleteItem('adrress_user');
     },2000);
   }
   },[])

  //DELETAR FOR SUCESSO RetORNA MSG

  const deleted = localStorage.getItem('excluir');
  useEffect(()=>{
    if(deleted){
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
          title: 'Usuário Deletado com Sucesso!'
        })
        localStorage.removeItem('excluir');
        localStorage.deleteItem('excluir');
        
      }, 2000);

    }

  },[]);


    //EDITAR FOR SUCESSO RetORNA MSG

    const updated = localStorage.getItem('update');
    useEffect(()=>{
      if(updated){
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
            title: 'Usuário Atualizado com Sucesso!'
          })
          localStorage.removeItem('update');
          localStorage.deleteItem('update');
          
        }, 2000);
  
      }
  
    },[]);

  if(results.length >0){
    $(()=>{
      $('#mytable').DataTable();
    })

  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <a href="/admin/users/create">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-circle-09 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Usuário</p>
                      <Card.Title as="h6">ADD</Card.Title>
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
                      <i className="nc-icon nc-circle-09 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Usuarios</p>
                      <Card.Title as="h6">TOTAL:</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            
            </Card>
          </Col>
         
          <Col lg="3" sm="6">
            <a href="/admin/users/address/create">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-paper-2 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Endereço</p>
                      <Card.Title as="h6">ADD</Card.Title>
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
                <Card.Title as="h4">Tabela de Usuários</Card.Title>
                <p className="card-category">
                  Dados Cadastrados no Banco de dados
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped" id="mytable">
                  <thead>
                    <tr>
                      <th className="border-0">Nome</th>
                      <th className="border-0">E-mail</th>
                      <th className="border-0">Telefone</th>
                      <th className="border-0">Level</th>
                      <th className="border-0">Empresa</th>
                      <th className="border-0">Opções</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                   {results}
                
                 
                  
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

export default DashboardUsers;
