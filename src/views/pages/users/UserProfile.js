import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";

import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ViewUser() {
    const mySwal = withReactContent(Swal);
    const token = localStorage.getItem('token');
    const navigate = useHistory();
    const [users, setUsers]= useState([]);
    const {id} = useParams();

    useEffect(()=>{
     
        if(!token){
            navigate.push("/");

        }else{

            const options={
                method: 'GET',
                mode: 'cors',
                cache: 'default',
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                }
            }

            fetch(`http://localhost:5000/user/list/${id}`, options)
            .then(response => response.json())
            .then((data)=>{

              if(data.length <=0){
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
                  title: 'Endereço não cadastrado para este usuario!'
                })

              }else{

                setUsers(data)
              }
                
            })
            .catch(error => console.log(error))
        }

    
    },[])

    const [name, setName]= useState();
    const [cpf, setCpf]= useState();
    const [email, setEmail]= useState();
    const [phone, setPhone]= useState();
    const [password, setPassword]= useState();      
    const [level, setLevel]= useState();
   

//Pega dados de endereço da empresa no Formulario para Atualizar no banco de dados    
    const [address, setAddress]= useState();
    const [district, setDistrict]= useState();
    const [city, setCity]= useState();
    const [state, setState]= useState();
    const [complement, setComplement]= useState();
    const [number, setNumber]= useState();    
  

    const results = users.map((element)=>{
        return(
            <>
            <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Nome</label>
                        <Form.Control
                         
                       
                          type="text"
                          defaultValue={element.name} onChange={(e)=>setName(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>CPF</label>
                        <Form.Control
                          
                          
                          type="text"
                          defaultValue={element.cpf} onChange={(e)=>setCpf(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          E-mail 
                        </label>
                        <Form.Control
                         placeholder="Email"
                          type="email"
                          defaultValue={element.email_user} onChange={(e)=>setEmail(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Telefone</label>
                        <Form.Control
                                                   
                          type="text"
                          defaultValue={element.phone} onChange={(e)=>setPhone(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>                        
                        <label>Empresa</label>
                        <Form.Control
                       disabled="disabled"
                        type="text"
                        defaultValue={element.name_fantasy}
                        >

                        </Form.Control>                     
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Level</label>
                        <Form.Control
                      
                         type="text"   
                         defaultValue={element.level} onChange={(e)=>setLevel(e.target.value)}
                        >
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Senha</label>
                        <Form.Control
                          
                        
                          type="password"
                          defaultValue={element.password} onChange={(e)=>setPassword(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                   
                   
                  </Row>
                  <Row>                  
                 
                    <Col className="pl-1" md="7">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Logradouro
                        </label>
                        <Form.Control
                         
                       
                          type="text"
                          defaultValue={element.address} onChange={ (e)=>setAddress(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Bairro</label>
                        <Form.Control
                         name="bairro"
                        
                          type="text"
                          defaultValue={element.district} onChange={(e)=>setDistrict(e.target.Value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>

               

                    <Col md="6">
                      <Form.Group>
                        <label>Estado</label>
                        <Form.Control
                      
                         
                          type="text"
                          defaultValue={element.state} onChange={(e)=>setState(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                 
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Cidade</label>
                        <Form.Control
                         
                        
                          type="text"
                          defaultValue={element.city} onChange={(e)=>setCity(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>               
                  <Row>
                  <Col md="6">
                      <Form.Group>
                        <label>Número</label>
                        <Form.Control
                        
                          
                          type="text"
                          defaultValue={element.number} onChange={(e)=>setNumber(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  
                    <Col md="6">
                      <Form.Group>
                        <label>complemento</label>
                        <Form.Control
                        
                          
                          type="text"
                          defaultValue={element.complement} onChange={(e)=>setComplement(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                 {localStorage.setItem('identerprise', element.identerprise)}
                 {localStorage.setItem('iduser', element.iduser)}
                 {localStorage.setItem('id', element.id)}
                  </Row>
           
            </>
        )
        });

     
        
   
        
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Cadastrar Usuario</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form   >
                  {results}
                 
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
     
        </Row>
      </Container>
    </>
  );
}

export default ViewUser;
