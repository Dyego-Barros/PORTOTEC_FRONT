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





function ViewInssClient() {

  const token = localStorage.getItem('token');
  const {id} = useParams();
  const navigate = useHistory();
  const [client, setClient] = useState([]);


  useEffect(()=>{
    if(!token){
      navigate.push("/")
    }else{

      const options={
        method:'GET',
        mode:'cors',
        cache:'default',
        headers:{
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        }
      }

      fetch(`http://localhost:5000/inss/list/${id}`, options)
      .then( (response)=>response.json())
      .then((data) =>{
        setClient(data);
      })
      .catch(error => console.log(error))
    }
  },[])





 

const results = client.map((element,index) =>{

  return(
    <>
         <Row key={index} >
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>CPF</label>
                        <Form.Control 
                          defaultValue={element.cpf != undefined ? element.cpf:"Não cadastrado"}
                          
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="5">
                      <Form.Group>
                        <label>Nome</label>
                        <Form.Control 
                        defaultValue={element.nome != undefined ? element.nome:"Não cadastrado"}
                       
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="3">
                      <Form.Group>
                        <label>
                         DATA DE NASCIMENTO
                        </label>
                        <Form.Control
                            defaultValue={element.dtnascimento != undefined ? element.dtnascimento :"Não cadastrado"}
                           
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>BANCO</label>
                        <Form.Control
                          defaultValue={element.bancopagto != undefined ? element.bancopagto :"Não cadastrado"}
                         
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>SALARIO</label>
                        <Form.Control
                           defaultValue={element.salario !=undefined ? element.salario :"Não cadastrado"}
                          
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>TIPO DE BENEFICIO</label>
                        <Form.Control
                           defaultValue={element.esp != undefined ? element.esp :"Não cadastrado"}
                          
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                 
                  
                 
                  </Row>
                 
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>ENDEREÇO</label>
                        <Form.Control
                          defaultValue={element.endereco != undefined ? element.endereco:"Não cadastrado"}
                          
                        type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>ESTADO</label>
                        <Form.Control
                           defaultValue={element.uf != undefined ? element.uf:"Não cadastrado"}
                           
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>CIDADE</label>
                        <Form.Control
                           defaultValue={element.municipio != undefined ? element.municipio :"Não cadastrado"}
                           
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>BAIRRO</label>
                        <Form.Control
                           defaultValue={element.bairro != undefined ? element.bairro :"Não cadastrado"}
                           
                          type="TEXT"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
             
                  
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>CEP</label>
                        <Form.Control
                           defaultValue={element.cep != undefined ? element.cep:"Não cadastrado"}
                           
                          type="TEXT"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>TEL-1</label>
                        <Form.Control
                           defaultValue={element.fone1 != undefined ? element.fone1:"Não cadastrado"}
                          
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>TEL-2</label>
                        <Form.Control
                           defaultValue={element.fone2 != undefined ? element.fone2 : "Não cadastrado"}
                           
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>TEL-3</label>
                        <Form.Control
                           defaultValue={element.fone3 !=undefined ? element.fone3 :"Não cadastrado"}
                          
                          type="TEXT"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>CEL-1</label>
                        <Form.Control
                           defaultValue={element.fone4 != undefined? element.fone4 :"Não cadastrado"}
                          
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                 
                  
                  </Row>

    </>
  )
});

const contacts = client.map((element,index)=>{
  return(
    <>

<Row key={index}>
               <div id="contatos">
               <Form.Group>
               <label>TELEFONE-1</label>
                   <Form.Control
                   defaultValue={element.fone1 != undefined? element.fone1 :"Não cadastrado"}
                   disabled
                   type="text"
                   ></Form.Control>
                  </Form.Group>
           
               <Button className="btn-fill btn-success pull-right" id="btn-contatos">
                Whatsapp
                 </Button>
               </div>

               </Row>
               <Row>
               <div id="contatos">
             
               <Form.Group>  
               <label>TELEFONE-2</label>               
                   <Form.Control
                    defaultValue={element.fone2 != undefined? element.fone2 :"Não cadastrado"}
                   disabled
                   type="text"
                   ></Form.Control>
                  </Form.Group>
              
               <Button className="btn-fill btn-success pull-right" id="btn-contatos"
               >
                Whatsapp
                 </Button>
               </div>
                </Row>
                <Row>
                <div id="contatos">
               <Form.Group>
               <label>TELEFONE-3</label>
                   <Form.Control
                    defaultValue={element.fone3 != undefined ? element.fone3 :"Não cadastrado"}
                   disabled
                   type="text"
                   ></Form.Control>
                  </Form.Group>
              
               <Button className="btn-fill btn-success pull-right" id="btn-contatos">
                Whatsapp
                 </Button>
               </div>
                </Row>
                <Row>
                <div id="contatos">
               <Form.Group>
               <label>TELEFONE-4</label>
                   <Form.Control
                    defaultValue={element.fone4 != undefined ? element.fone4 :"Não cadastrado"}
                   disabled
                   type="text"
                   ></Form.Control>
                  </Form.Group>
             
               <Button className="btn-fill btn-success pull-right">
                Whatsapp
                 </Button>
               </div>
                
                </Row>
          
              

                {localStorage.setItem('id_client', element.id)}
                {localStorage.setItem('idEnterprise', element.identerprise)}

    </>
  )

})

        
  return (
    <>
      <Container fluid>
        <Row>
        <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Editar Cliente</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form  >
             {results}
              
              
                  <Button
                    className="btn-fill btn-block pull-right"
                    type="submit"
                    variant="info"
                    
                  >
                    EDITAR CLIENTE
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
              <h4 className="justify-center" id="contact">CONTATOS CLIENTES</h4>
              </div>
              <Card.Body>
                {contacts}
              </Card.Body>
              <hr></hr>
             
            </Card>
          </Col>
     
        </Row>
      </Container>
    </>
  );
}

export default ViewInssClient;
