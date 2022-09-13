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
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function CreateUser() {
    const mySwal = withReactContent(Swal);
    const token = localStorage.getItem('token');
    const navigate = useHistory();
    const [enterprise, setEnterprise]= useState([]);

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

            fetch('http://localhost:5000/enterprise/list', options)
            .then(response => response.json())
            .then((data)=>{
                setEnterprise(data)
            })
            .catch(error => alert(error))
        }

    
    },[])

    const results = enterprise.map((element)=>{
        return(
            <>
            <option>{element.id_enterprise}-{element.name_fantasy}</option>
            </>
        )
        });

        const [name, setName]= useState();
        const [cpf, setCpf]= useState();
        const [email, setEmail]= useState();
        const [phone, setPhone]= useState();
        const [password, setPassword]= useState();
        const [confirm, setConfirm]= useState();
        const [level, setLevel]= useState();
        const [identerprise, setIdenterprise]= useState();

        function InsertUser(e){
            if(name === undefined || name === null){
                const Toast = mySwal.mixin({
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
                    title: 'Nome é Obrigatório'
                  })
                  e.preventDefault();
            }
            if(cpf === undefined || cpf === null){
                const Toast = mySwal.mixin({
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
                    title: 'CPF é Obrigatório'
                  })
                  e.preventDefault();
            }

            if(email === undefined || email === null){
                const Toast = mySwal.mixin({
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
                    title: 'E-mail é Obrigatório'
                  })
                  e.preventDefault();
            }

            if(level === undefined || level === null){
                const Toast = mySwal.mixin({
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
                    title: 'Nivel é Obrigatório'
                  })
                  e.preventDefault();
            }
            if(password === undefined || password === null){
                const Toast = mySwal.mixin({
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
                    title: 'Nome é Obrigatório'
                  })
                  e.preventDefault();
            }
            if(password !== confirm || password !== confirm){
                const Toast = mySwal.mixin({
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
                    title: 'Senhas não conferem'
                  })
                  e.preventDefault();
            }

            if(identerprise === undefined || identerprise === null){
                const Toast = mySwal.mixin({
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
                    title: 'Selecione a Empresa'
                  })
                  e.preventDefault();
            }

            const newid= identerprise.split("-")
            const body ={
              name:name,
              cpf:cpf,
              email_user:email,
              phone:phone,
              level:level,
              password:password,
              identerprise:newid[0]
            }

            if(body !== undefined || body !== null){

              const options={
                method:'POST',
                mode: 'cors',
                cache: 'default',
                body: JSON.stringify(body),
                headers:{
                  'Authorization': `Bearer ${localStorage.getItem('token')}`,
                  'Content-Type': 'application/json'
                }
              }
  
            
               
              fetch('http://localhost:5000/user/create', options)
              .then((response)=>{
                if(response.ok){
                  const created = 'criou';
                  localStorage.setItem('criou', created);
                  navigate.push("/admin/user");
                }
               
                
              })
              .catch(error=>console.log(error))

            }
           
          
e.preventDefault();


        }
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
                <Form onSubmit={InsertUser} method='POST'>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Nome</label>
                        <Form.Control
                         
                          placeholder="João Da SIlva"
                          type="text"
                          onChange={(e)=>setName(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>CPF</label>
                        <Form.Control
                         
                          placeholder="xxx.xxx.xxx-xx"
                          type="text"
                          onChange={(e)=>setCpf(e.target.value)}
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
                          onChange={(e)=>setEmail(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Telefone</label>
                        <Form.Control
                          
                          placeholder="(11)9xxxx-xxxx"
                          type="text"
                          onChange={(e)=>setPhone(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Empresa</label>
                       <select className="form-control" onChange={(e)=>setIdenterprise(e.target.value)}>
                        <option defaultValue="selected">Selecione a Empresa</option>
                     {results}
                       </select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Level</label>
                        <select className="form-control" onChange={(e)=>setLevel(e.target.value)}>
                            <option defaultValue="selected">Selecione o Nível de Acesso</option>
                            <option>Administrador</option>
                            <option>Gerente</option>
                            <option>Padrão</option>
                        </select>
                       
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Senha</label>
                        <Form.Control
                          
                          placeholder="Digite a Senha"
                          type="password"
                          onChange={(e)=>setPassword(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                   
                   
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                    <Form.Group>
                        <label> Confirmar Senha</label>
                        <Form.Control
                          
                          placeholder="Digite a Senha"
                          type="password"
                          onChange={(e)=>setConfirm(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill btn-block pull-right"
                    type="submit"
                   
                 >
                   Cadastrar Usuários
                  </Button>
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

export default CreateUser;
