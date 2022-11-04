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

function AddressEnterprise() {
/////////////////////////////
  //Chama a sweetalert2 para exibir as MSG de Error
  const mySwal = withReactContent(Swal);
  //Pega o token da Aplicação
  const token = localStorage.getItem('token');
  //Faz redirecionamento caso token seja invalido
  const navigate = useHistory();
  //Obtem lista de empresas
  const [enterprises, setEnterprises] = useState([]);
  useEffect(()=>{
      if(!token){
          navigate.push("/");
      }else{
          const options= {
              method: 'GET',
              mode: 'cors',
              cache: 'default',
              headers:{
                  'Authorization': `Bearer ${localStorage.getItem('token')}`,
                  'Content-Type': 'application/json',
              }
          }

          fetch('http://191.101.78.186:5000/enterprise/list', options)
          .then(response => response.json())
          .then((data)=>{
              setEnterprises(data);
             
          })
          .catch((error)=>{
            
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
                      title: error
                    })

              
             
          })
      }
  },[])

  const [cep, setcep]= useState();
  const [resultCep, setresultCep]= useState();
  function getCep(){

      if(cep === undefined|| cep === null){
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
              title: 'Cep é Obrigatório'
            })
      }

      const options={
          method: 'GET',
          mode: 'cors',
          cache: 'default',
          headers:{
              'Content-Type': 'application/json',
          }
      }
      if(cep != undefined|| cep != null){
          fetch(`https://viacep.com.br/ws/${cep}/json/`, options)
          .then(response=> response.json())
          .then((data)=>{
              setresultCep(data)
          })
          .catch((error)=>{
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
                  title: 'Cep Inválido'
                })
          })

      }
     
  }
  
 
  
  const enterprise = enterprises.map((element, index)=>{
      return(
          <>
          <option key={index}> {element.id_enterprise} -{element.name_fantasy}</option>
          </>
      )
  });

   const [logradouro, setLogradouro]= useState();
   const [bairro, setBairro]= useState();
   const [cidade, setCidade]= useState();
   const [numero, setNumero]= useState();
   const [estado, setEstado]= useState();
   const [complemento, setComplemento]= useState();
   const [empresa, setEmpresa]= useState();

  
  function insertAdrress(e){

      
      if(cep === undefined|| cep === null){
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
              title: 'Cep é Obrigatório'
            })
            e.preventDefault();
      }

   else if(empresa === "Selecione Empresa"|| empresa === null || empresa === undefined){
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
              title: 'Selecione a Empresa para este Endereço'
            })
            e.preventDefault();
      }

    else   if(numero === ""|| numero === null || numero === undefined){
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
              title: 'Campo numero é obrigatório!'
            })
            e.preventDefault();
      }
     else if(complemento === ""|| complemento === null || complemento === undefined){
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
            title: 'Campo complemento é obrigatório!'
          })
          e.preventDefault();
    }

    
  const idempresa = empresa.split("-");

console.log(idempresa);
      const address = {
          address: resultCep.logradouro,
          number: numero,
          district:resultCep.bairro,
          city: resultCep.localidade,
          state: resultCep.uf,
          complement: complemento,
          identerprise: idempresa[0]
      }

      const options={
          method: 'POST',
          mode:'cors',
          cache:'default',
          body: JSON.stringify(address),
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json'
          }

      }
      fetch('http://191.101.78.186:5000/address_enterprise/create', options)
      .then((response)=>{
          if(response.ok){
              let endereco = "endereco criado com sucesso!"
              localStorage.setItem('adrress',  endereco);
              navigate.push("/admin/enterprises/dashboard");

          }
          
          e.preventDefault();
      })
      .catch((error) => {
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
              title: 'Error ao cadastrar Endereço'
            })
            console.log(error);
           

      })
     console.log(address)
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
                <Card.Title as="h4">Endereço Empresa</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form method="POST" onSubmit={insertAdrress}>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>CEP</label>
                        <Form.Control
                         
                         name="cep"
                          placeholder="00000-00"
                          type="text"
                          onChange={(e)=>setcep(e.target.value)}

                          onBlur={getCep}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                 
                    <Col className="pl-1" md="7">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Logradouro
                        </label>
                        <Form.Control
                        name="logradouro"
                          placeholder="Razão Social"
                          type="text"
                          Value={ resultCep? resultCep.logradouro: ''} onChange={ (e)=>setLogradouro(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Bairro</label>
                        <Form.Control
                         name="bairro"
                          placeholder="Nome Fantasia"
                          type="text"
                          Value={resultCep ? resultCep.bairro:''} onChange={(e)=>setBairro(e.target.Value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Cidade</label>
                        <Form.Control
                          name="localidade"
                          placeholder="(11)9xxxx-xxxx"
                          type="text"
                          Value={resultCep ? resultCep.localidade:''} onChange={(e)=>setCidade(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>               
                  <Row>
                    <Col md="6">
                      <Form.Group>
                        <label>Estado</label>
                        <Form.Control
                         name="uf"
                          placeholder="Estado"
                          type="text"
                          Value={resultCep?resultCep.uf:''} onChange={(e)=>setEstado(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md="6">
                      <Form.Group>
                        <label>complemento</label>
                        <Form.Control
                         name="complement"
                          placeholder="Bloco, APT, CASA"
                          type="text"
                          onChange={(e)=>setComplemento(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <Form.Group>
                        <label>Número</label>
                        <Form.Control
                         name="number"
                          placeholder="Nº 100"
                          type="text"
                          onChange={(e)=>setNumero(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md="6">
                      <Form.Group>
                        <label>Empresas</label>
                      <select className="form-control" id="empresa"  onChange={(e)=>setEmpresa(e.target.value)}>
                        <option selected="selected">Selecione a Empresa</option>
                        {enterprise}
                      </select>
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

export default AddressEnterprise;
