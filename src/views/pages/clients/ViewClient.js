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





function ViewClient() {

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

      fetch(`http://localhost:5000/clients/list/client/${id}`, options)
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
                          Tipo
                        </label>
                        <Form.Control
                            defaultValue={element.tipo != undefined ? element.tipo :"Não cadastrado"}
                           
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Posto</label>
                        <Form.Control
                          defaultValue={element.posto != undefined ? element.posto :"Não cadastrado"}
                         
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>SUB_OM</label>
                        <Form.Control
                           defaultValue={element.sub_om !=undefined ? element.sub_om :"Não cadastrado"}
                          
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>ORDEM</label>
                        <Form.Control
                           defaultValue={element.ordem != undefined ? element.ordem :"Não cadastrado"}
                          
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>UPAG</label>
                        <Form.Control
                          defaultValue={element.upag != undefined ? element.upag:"Não cadastrado"}
                         
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>VALOR</label>
                        <Form.Control
                           defaultValue={element.valor != undefined ? element.valor :"Não cadastrado"}
                          
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>PRAZO</label>
                        <Form.Control
                           defaultValue={element.prazo != undefined ? element.prazo: "Não cadastrado"}
                          
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <Form.Group>
                        <label>BANCO</label>
                        <Form.Control
                           defaultValue={element.banco != undefined ? element.banco: "Não cadastrado"}
                          
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md="6">
                      <Form.Group>
                        <label>NASCIMENTO</label>
                        <Form.Control
                           defaultValue={element.data_nascimento != undefined ? element.data_nascimento: "Não cadastrado"}
                          
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
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
                           defaultValue={element.cidade != undefined ? element.cidade :"Não cadastrado"}
                           
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
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>NÚMERO</label>
                        <Form.Control
                           defaultValue={element.numero != undefined ? element.numero:"Não cadastrado"}
                          
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>COMPLEMENTO</label>
                        <Form.Control
                           defaultValue={element.complemento != undefined ? element.complemento:"Não cadastrado"}
                          
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
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
                           defaultValue={element.fixo1 != undefined ? element.fixo1:"Não cadastrado"}
                          
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>TEL-2</label>
                        <Form.Control
                           defaultValue={element.fixo2 != undefined ? element.fixo2 : "Não cadastrado"}
                           
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>TEL-3</label>
                        <Form.Control
                           defaultValue={element.fixo3 !=undefined ? element.fixo3 :"Não cadastrado"}
                          
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
                           defaultValue={element.cel1 != undefined? element.cel1 :"Não cadastrado"}
                          
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>CEL-2</label>
                        <Form.Control
                           defaultValue={element.cel2 != undefined ? element.cel2 :"Não cadastrado"}
                          
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>CEL-3</label>
                        <Form.Control
                           defaultValue={element.cel3 != undefined ? element.cel3: "Não cadastrado"}
                          
                          type="TEXT"
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
     <Form>
                <Row key={index}>
               <div id="contatos">
               <Form.Group>
               <label>TELEFONE-1</label>
                   <Form.Control
                   defaultValue={element.fixo1 != undefined? element.fixo1 :"Não cadastrado"}
                   disabled
                   type="text"
                   ></Form.Control>
                  </Form.Group>
           
               <a  href={`https://api.whatsapp.com/send?1=pt_BR&phone=${element.fixo1}`}  >
                <Button id="btn-whatsapp">
                Whatsapp
                </Button>
              
                 </a>
               </div>

               </Row>
               <Row>
               <div id="contatos">
             
               <Form.Group>  
               <label>TELEFONE-2</label>               
                   <Form.Control
                    defaultValue={element.fixo2 != undefined? element.fixo2 :"Não cadastrado"}
                   disabled
                   type="text"
                   ></Form.Control>
                  </Form.Group>
              
                  <a  href={`https://api.whatsapp.com/send?1=pt_BR&phone=${element.fixo2}`}  >
                <Button id="btn-whatsapp">
                Whatsapp
                </Button>
              
                 </a>
               </div>
                </Row>
                <Row>
                <div id="contatos">
               <Form.Group>
               <label>TELEFONE-3</label>
                   <Form.Control
                    defaultValue={element.fixo3 != undefined ? element.fixo3 :"Não cadastrado"}
                   disabled
                   type="text"
                   ></Form.Control>
                  </Form.Group>
              
                  <a  href={`https://api.whatsapp.com/send?1=pt_BR&phone=${element.fixo3}`}  >
                <Button id="btn-whatsapp">
                Whatsapp
                </Button>
              
                 </a>
               </div>
                </Row>
                <Row>
                <div id="contatos">
               <Form.Group>
               <label>Celular-1</label>
                   <Form.Control
                    defaultValue={element.cel1 != undefined ? element.cel1 :"Não cadastrado"}
                   disabled
                   type="text"
                   ></Form.Control>
                  </Form.Group>
             
                  <a  href={`https://api.whatsapp.com/send?1=pt_BR&phone=${element.cel1}`}  >
                <Button id="btn-whatsapp">
                Whatsapp
                </Button>
                 </a>
               </div>
                </Row>
                <Row>
                <div id="contatos">
               <Form.Group>
               <label>Celular-1</label>
                   <Form.Control
                    defaultValue={element.cel2 != undefined ? element.cel2 :"Não cadastrado"}
                   disabled
                   type="text"
                   ></Form.Control>
                  </Form.Group>
             
                  <a  href={`https://api.whatsapp.com/send?1=pt_BR&phone=${element.cel2}`}  >
                <Button id="btn-whatsapp">
                Whatsapp
                </Button>
                 </a>
               </div>
                </Row>
                <Row>
                <div id="contatos">
               <Form.Group>
               <label>Celular-1</label>
                   <Form.Control
                    defaultValue={element.cel3 != undefined ? element.cel3 :"Não cadastrado"}
                   disabled
                   type="text"
                   ></Form.Control>
                  </Form.Group>
             
                  <a  href={`https://api.whatsapp.com/send?1=pt_BR&phone=${element.cel3}`}  >
                <Button id="btn-whatsapp">
                Whatsapp
                </Button>
                 </a>
               </div>
                </Row>
          
                </Form>

                {localStorage.setItem('id_client', element.id)}
                {localStorage.setItem('idEnterprise', element.identerprise)}

                {localStorage.setItem('id_client', element.id)}
                {localStorage.setItem('idEnterprise', element.identerprise)}

    </>
  )

})

        
  return (
    <>
      <Container fluid>
        <Row>
        <Col md="12
        
        ">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Editar Cliente</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form  >
             {results}
              
              
                
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        
     
        </Row>
      </Container>

      <Container fluid>
        <Row>   
          <Col md="12">
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

export default ViewClient;
