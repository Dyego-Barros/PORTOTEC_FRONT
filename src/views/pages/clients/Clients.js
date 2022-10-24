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
} from "react-bootstrap";
import {useHistory} from'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loading from '../../../components/loading/Loading';




//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import $ from 'jquery'; 
import { useEffect, useState } from 'react'
function Clients() {

    ////////////////////////////////
    let token =localStorage.getItem('token');
    const user =JSON.parse(localStorage.getItem("user"));
    const navigate = useHistory();
    const [clients, setClients]= useState([]);
   // const carregou = localStorage.getItem('load');
    const [removeloading, setRemoveloading] = useState(false);

  
   
   
    const identerprise = user.map((element)=> element.identerprise);

    
 //Valida token do usuário   
 useEffect(()=>{

  if(!token){
    navigate.push("/")
  }else{

    // if(!carregou){
    //   setRemoveloading(false);
    //  }else{
    //   setRemoveloading(true);
    //  }

    setTimeout(() => {
  
      const options={
        method: "GET",
        mode: 'cors',
        Cache:'default',
        headers:{
          'Authorization': `Berarer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json',
        }
      }
    
    fetch(`http://localhost:5000/clients/list/${identerprise[0]}`, options)
    .then(response => response.json())
    .then((data)=>{
      setClients(data)
      setRemoveloading(true)
      //const loading= 'carregou';
     // localStorage.setItem('load',loading);
    })
    .catch(error =>console.log(error))
      
    }, 5000);


  }
 },[])  


 const edit = localStorage.getItem('edit');
 useEffect(() => {
   //É Executada quando requisição POST de Cliente é bem executada
  if(edit){
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
       title: 'Cliente Editado com Sucesso!'
     })
     localStorage.removeItem('edit');
     localStorage.deleteItem('edit');
 
    }, 7000)
  }
 
 },[])
 const excluir = localStorage.getItem('excluir');
 useEffect(() => {
   //É Executada quando requisição POST de Cliente é bem executada
  if(excluir){
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
       title: 'Cliente Excluido com Sucesso!'
     })
     localStorage.removeItem('excluir');
     localStorage.deleteItem('excluir');
 
    }, 7000)
  }
 
 },[])


 const error = localStorage.getItem('error');
 useEffect(() => {
   //É Executada quando requisição POST de Cliente é bem executada
  if(error){
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
       icon: 'error',
       title: 'Cliente não foi Excluido!'
     })
     localStorage.removeItem('error');
     localStorage.deleteItem('error');
 
    }, 7000)
  }
 
 },[])


 if(!removeloading){
  return(
    <>
     <Loading />
    </>
  )
 
 }




 //Se array de dados for maior que 0 renderiza o jquery dataTables
 if(clients.length > 0){
  $(()=>{
    $('#mytable').DataTable();
})

}
  return (
    <>
      <Container fluid>
        <Row>
       
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Tabela de Clientes</Card.Title>
                <p className="card-category">
                  Dados cadastrados no Banco de dados
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table  className="table-hover table-striped" id="mytable">
                  <thead>
                    <tr>
                      <th className="border">Nome</th>
                      <th className="border">CPF</th>
                      <th className="border">POSTO</th>
                      <th className="border">SUB_OM</th>
                      <th className="border">PRAZO</th>
                      <th className="border">OPÇÔES</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                  
                  
                 {
                   clients.length > 0 && 
                   clients.map((element,index)=>{
                    return(
                      <>
                      <tr key={index}>
                        <td>{element.nome}</td>
                        <td>{element.cpf}</td>
                        <td>{element.posto}</td>
                        <td>{element.sub_om}</td>
                        <td>{element.prazo}</td>
                        <td>
                               <a href={'/admin/clients/edit/' + element.id}  className="btn btn-primary" id="btn-enterprise-edit" >EDITAR</a>|
                               <a href={'/admin/clients/view/' + element.id} className="btn btn-warning" id="btn-enterprise-warning">VER</a>|
                               <a  href={"/admin/clients/delete/" + element.id} className="btn btn-danger" id="btn-enterprise-danger" >DELETAR</a></td>
                      </tr>
                      
                      </>
                    )
                   })   


                
                 }
              
               
                  
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

export default Clients;
