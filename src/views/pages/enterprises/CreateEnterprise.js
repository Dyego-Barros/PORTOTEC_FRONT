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

function CreateEnterprise() {
/////////////////////////////
const mySwal = withReactContent(Swal)

const token =localStorage.getItem('token');
const navigate = useHistory();
const[cnpj,setCnpj] = useState();
const[reason, setReason]= useState();
const[fantasy, setFantasy] = useState();
const [phone, setPhone]= useState();
const [email, setEmail]= useState();
const url = `http://localhost:5000/enterprise/create`



useEffect(()=>{
    if(!token){
        navigate.push("/");
    }else{
     

    }
},[])

function Cadastrar(e){

    const create ={
        "cnpj": cnpj,
        "social_reason":reason,
        "name_fantasy":fantasy,
        "phone":phone,
        "email":email,
    }
    const create2 = JSON.stringify(create);
    const options={
        method: "POST",
        mode: 'cors',
        cache: 'default',
        body: create2,
        headers:{
            'Authorization': `token ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        }
    }
    const erros =[]
    if(create.cnpj === undefined){
       erros.push("Campo cnpj é inválido! ")
    }
    if(create.social_reason === undefined){
        erros.push("Campo razão social é inválido! ")
     }
     if(create.name_fantasy === undefined){
        erros.push("Campo nome fantasia é inválido! ")
     }
     if(create.phone === undefined){
        erros.push("Campo telefone é inválido! ")
     }
     if(create.email === undefined){
        erros.push(`Campo email é inválido!`)
     }
     if(erros.length > 0){

       
      console.log( erros);
           
        mySwal.fire({
            title: 'Error ' ,
            text:`${erros + '\n'} `,
            icon: 'error',
            confirmButtonText: 'OK'
          })
     } else{
        fetch(url, options)
        .then((response) =>{
            if(response.ok){
                let create = "criou";
                localStorage.setItem("criou", create);
               navigate.push("/admin/enterprises/dashboard")
            }
        })
        .catch((error)=>{
            mySwal.fire({
                title: 'Error ' ,
                text: 'Falha ao tentar Criar Usuário!',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
              e.preventDefault();
        })
       
       

     }
  
     e.preventDefault();
}
/////////////////////////////



  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Cadastrar Empresa</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form method="POST" onSubmit={Cadastrar}>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>CNPJ</label>
                        <Form.Control
                         
                          
                          placeholder="xxxx.xxxx.xxx/xxx-x"
                          type="text"
                          onChange={(e)=>setCnpj(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                 
                    <Col className="pl-1" md="7">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Razão Social 
                        </label>
                        <Form.Control
                          placeholder="Razão Social"
                          type="text"
                          onChange={(e)=>setReason(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Nome Fantasia</label>
                        <Form.Control
                         
                          placeholder="Nome Fantasia"
                          type="text"
                          onChange={(e)=>setFantasy(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Telefone</label>
                        <Form.Control
                          
                          placeholder="(11)9xxxx-xxxx"
                          type="text"
                          onChange={(e)=>setPhone(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>E-mail</label>
                        <Form.Control
                         
                          placeholder="E-mail"
                          type="email"
                          onChange={(e)=>setEmail(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                
                
                  <Button
                    className="btn-fill btn-block pull-right"
                    type="submit"
                    variant="info"
                  >
                   Cadastrar
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

export default CreateEnterprise;
