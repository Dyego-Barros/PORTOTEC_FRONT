import React from "react";import 
{ useHistory, useParams} from'react-router-dom'
import { useEffect, useState } from 'react';

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


function EnterpriseProfile() {
  ///////////////////////////////////////////////
  const [dados, setDados] = useState([]);
   

  const {id }= useParams();
  const url =`http://191.101.78.186:5000/enterprise/list/${id}`;
  const token = localStorage.getItem('token');
  const navigate = useHistory();

  useEffect((e)=>{

    
      if(!token){
          navigate("/")

      }else{
          
          const options ={
              method: "GET",
              mode: "cors",
              cache: 'default',
              headers:{
                  'Authorization': `Bearer ${localStorage.getItem('token')}`,
                  'Content-Type': 'application/json',
              }
          }
         

          fetch( url, options)
          .then((response) =>response.json())
          .then((data) =>{ 
              setDados(data)
          })
          .catch((error) =>{ console.log(error)});
      }
  },[])


//Recebe Valores do Formulario para Editar os dados da Empresa no banco de dados
  const [cnpj, setCnpj]= useState();
  const [reason, setReason]= useState();
  const [fantasy, setFantasy]= useState();
  const [phone, setPhone]= useState();
  const [email, setEmail]= useState();
//Pega dados de endereço da empresa no Formulario para Atualizar no banco de dados    
  const [address, setAddress]= useState();
  const [district, setDistrict]= useState();
  const [city, setCity]= useState();
  const [state, setState]= useState();
  const [complement, setComplement]= useState();
  const [number, setNumber]= useState();
  const [sip, setSip]= useState();
  const [apikey, setApiKey]= useState();
  const[identerprise, setIdenterprise]= useState()
  

//  const resultid = dados;

//  const idresult = resultid.map((element)=>{
//             setIdenterprise(element.id);
//  })
 const resultDados = dados.map((element)=>{
  //setIdupdate(element.id)
  
      return(
          <>
         
         <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>CNPJ</label>
                        <Form.Control
                         
                          placeholder="Company"
                          type="text"
                          defaultValue={element.cnpj} onChange={(e) => setCnpj(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Razão Social</label>
                        <Form.Control
                          
                          placeholder="Username"
                          type="text"
                          defaultValue={element.social_reason} onChange={(e) => setReason(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          E-mail 
                        </label>
                        <Form.Control
                        defaultValue={element.email} onChange={(e) =>setEmail(e.target.value)}
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Nome Fantasia</label>
                        <Form.Control
                         defaultValue={element.name_fantasy} onChange={(e) => setFantasy(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Telefone</label>
                        <Form.Control
                          defaultValue={element.phone} onChange={(e)=> setPhone(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>SIP</label>
                        <Form.Control
                         defaultValue={element.sip} onChange={(e) => setSip(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>API KEY</label>
                        <Form.Control
                          defaultValue={element.apikey} onChange={(e)=> setApiKey(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>





                  <Row>
                    <Col md="4">
                      <Form.Group>
                        <label>Logradouro</label>
                        <Form.Control
                        
                        defaultValue={element.address} onChange={(e)=>setAddress(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md="4">
                      <Form.Group>
                        <label>Complemento</label>
                        <Form.Control
                        
                        defaultValue={element.complement} onChange={(e)=>setComplement(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md="4">
                      <Form.Group>
                        <label>Número</label>
                        <Form.Control
                        
                        defaultValue={element.number} onChange={(e)=>setNumber(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Cidade</label>
                        <Form.Control
                        
                        defaultValue={element.city} onChange={(e)=>setCity(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Estado</label>
                        <Form.Control
                          defaultValue={element.state} onChange={(e)=>setState(e.target.value)}
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Bairro</label>
                        <Form.Control
                          defaultValue={element.district} onChange={(e)=>setDistrict(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
         {localStorage.setItem('id', element.id)}
          </>
      )

   
      

  })
  
  const url2 = `http://191.101.78.186:5000/address_enterprise/update/${localStorage.getItem('id')}`;

console.log(url2)
  

 function Editar(e){
  const update ={
      "id": id,
      "cnpj": cnpj,
      "name_fantasy": fantasy,
      "social_reason": reason,
      "phone":phone,
      "email": email

  }
  const update2 = JSON.stringify(update)
  const url = `http://191.101.78.186:5000/enterprise/update/${id}`

  const options={
      method: "PUT",
      mode: "cors",
      cache: 'default',
      body: update2,
      headers:{
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
      },
      
  }

  const updateAddress ={       
      "address": address,
      "number": number,
      "district": district,
      "city":city,
      "complement": complement,
      "state": state,
      "identerprise":id

  }

  const options2={
      method: "PUT",
      mode: "cors",
      cache: 'default',
      body: JSON.stringify(updateAddress),
      headers:{
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
      },
      
  }
  


  if(update !== undefined && updateAddress !== undefined){

     

     fetch(url2, options2)
     .then(response => console.log(response))
     .catch(err => console.error(err));

      fetch(url, options)
      .then((response)=>{
          if(response.ok){
              let update2 = 'Atualizou';
              localStorage.setItem('atualizou', update2);
              navigate.push("/admin/enterprises/dashboard");
          }
      }).catch((error)=>{
          alert("Error:" + error);
      })
      console.log(update, updateAddress);
      e.preventDefault();

  }
}
  ///////////////////////////////////////////////
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Editar Empresa</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form method='POST' onSubmit={Editar}>
           { resultDados}
                  <Row>
                    <Col md="12">
                 
                    </Col>
                  </Row>
                
                 
                </Form>
              </Card.Body>
            </Card>
          </Col>

     
        </Row>
      </Container>
    </>
  );
}

export default EnterpriseProfile;
