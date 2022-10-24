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





function EditClient() {

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



//Pega as Informações do Formulario para Editar o cliente
const[cpf, setCpf] = useState();
const [nome, setNome] = useState();
const [dtnascimento, setTipo] = useState();
const [bancopagto, setPosto] = useState();
const [salario, setSubOm] = useState();
const [esp, setOrdem] = useState();
// const [upag, setUpag] = useState();
// const [valor, setValor] = useState();
// const [prazo, setPrazo] = useState();
// const [banco, setBanco]= useState();
// const [nascimento, setNascimento] = useState();
const [endereco,setEndereco] = useState();
//const [numero, setNumero]= useState();
//const [complemento, setComplemento] = useState();
const [bairro,setBairro] = useState();
const [municipo, setCidade] = useState();
const [uf, setUf] = useState();
const [cep, setCep]= useState();
const [fone1, setFixo1]= useState();
const [fone2, setFixo2]= useState();
const [fone3, setFixo3]= useState();
const [fone4, setFIxo4]= useState();
// const [cel2, setCel2]= useState();
// const [cel3, setCel3]= useState();

 

const results = client.map((element,index) =>{

  return(
    <>
         <Row key={index} >
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>CPF</label>
                        <Form.Control 
                          defaultValue={element.cpf != undefined ? element.cpf:"Não cadastrado"}
                          onChange={(e)=>setCpf(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="5">
                      <Form.Group>
                        <label>Nome</label>
                        <Form.Control 
                        defaultValue={element.nome != undefined ? element.nome:"Não cadastrado"}
                        onChange={(e)=>setNome(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="3">
                      <Form.Group>
                        <label>
                          Nascimento
                        </label>
                        <Form.Control
                            defaultValue={element.dtnascimento != undefined ? element.dtnascimento :"Não cadastrado"}
                            onChange={(e)=>setTipo(e.target.value)}
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
                          onChange={(e)=>setPosto(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>SALARIO</label>
                        <Form.Control
                           defaultValue={element.salario !=undefined ? element.salario :"Não cadastrado"}
                           onChange={(e)=>setSubOm(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>TIPO BENEFICIO</label>
                        <Form.Control
                           defaultValue={element.esp != undefined ? element.esp :"Não cadastrado"}
                           onChange={(e)=>setOrdem(e.target.value)}
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
                          onChange={(e)=>setEndereco(e.target.value)}
                        type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label>ESTADO</label>
                        <Form.Control
                           defaultValue={element.uf != undefined ? element.uf:"Não cadastrado"}
                           onChange={(e)=>setUf(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>CIDADE</label>
                        <Form.Control
                           defaultValue={element.municipio != undefined ? element.municipio :"Não cadastrado"}
                           onChange={(e)=>setCidade(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="3">
                      <Form.Group>
                        <label>BAIRRO</label>
                        <Form.Control
                           defaultValue={element.bairro != undefined ? element.bairro :"Não cadastrado"}
                           onChange={(e)=>setBairro(e.target.value)}
                          type="TEXT"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="3">
                      <Form.Group>
                        <label>BAIRRO</label>
                        <Form.Control
                           defaultValue={element.cep != undefined ? element.cep :"Não cadastrado"}
                           onChange={(e)=>setCep(e.target.value)}
                          type="TEXT"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
              
                  <Row>
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label>TEL-1</label>
                        <Form.Control
                           defaultValue={element.fone1 != undefined ? element.fone1:"Não cadastrado"}
                           onChange={(e)=>setFixo1(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>TEL-2</label>
                        <Form.Control
                           defaultValue={element.fone2 != undefined ? element.fone2 : "Não cadastrado"}
                           onChange={(e)=>setFixo2(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="3">
                      <Form.Group>
                        <label>TEL-3</label>
                        <Form.Control
                           defaultValue={element.fone3 !=undefined ? element.fone3 :"Não cadastrado"}
                           onChange={(e)=>setFixo3(e.target.value)}
                          type="TEXT"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="3">
                      <Form.Group>
                        <label>TEL-3</label>
                        <Form.Control
                           defaultValue={element.fone4 !=undefined ? element.fone4 :"Não cadastrado"}
                           onChange={(e)=>setFixo4(e.target.value)}
                          type="TEXT"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
       
    </>
  )
});

const identerprise =localStorage.getItem('idEnterprise');
const idclient = localStorage.getItem('id_client');

function EditClient(e){

  const body ={
    cpf:cpf,
    nome: nome,
    tipo:tipo,
    posto:posto,
    sub_om:sub_om,
    ordem:ordem,
    upag:upag,
    valor:valor,
    prazo:prazo,
    banco:banco,
    data_nascimento:nascimento,
    endereco:endereco,
    numero:numero,
    complemento:complemento,
    bairro:bairro,
    cidade:cidade,
    uf:uf,
    cep:cep,
    fixo1:fixo1,
    fixo2:fixo2,
    fixo3:fixo3,
    cel1:cel1,
    cel2:cel2,
    cel3:cel3,
    identerprise:parseInt(identerprise),
  }
 
const newBody = JSON.stringify(body);
console.log(body)
  const options={
    method: 'PUT',
    mode: 'cors',
    cache: 'default',
    body:newBody,
    headers:{
      'Authorization': `Bearer ${localStorage.getItem('token')}`,   
      'Content-Type': 'application/json', 
     
      
  }
  }

  

  fetch(`http://localhost:5000/clients/update/${idclient}`, options)
  .then((response) =>{
    if(response.ok){
      const editou = "editou";
      localStorage.setItem('edit',editou)
      navigate.push("/admin/client");

    }
  })
  .catch((error) =>console.log(error));



  e.preventDefault();

}



  
        
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
                <Form method='POST' onSubmit={EditClient} >
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

export default EditClient;
