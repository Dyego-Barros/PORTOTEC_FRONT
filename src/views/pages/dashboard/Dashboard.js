import {React, useState, useEffect} from "react";
import { useHistory } from "react-router";

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

function Dashboard() {

  const token = localStorage.getItem('token');
   const use = JSON.parse(localStorage.getItem('user'));
   const [client, setClient]= useState([]);
   const [ users, setUsers] = useState([]);  
   const [user, setUser]= useState([]);
  const navigate= useHistory();

  useEffect(()=>{
    if(!token){
      navigate.push("/");
    }
  },[])



  useEffect(()=>{
    const options={
      method:'GET',
      mode:'cors',
      Cache: 'default',
      headers:{
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type':'application/json',
      }
    }
  
      fetch(`http://localhost:5000/user/list/enterprise/${use[0].identerprise}`,options)
      .then((response) =>response.json())
      .then((data)=>{
        setUsers(data)
      })
      .catch((error)=>console.log(error))
  
  },[])

  useEffect(()=>{
    const options={
      method:'GET',
      mode:'cors',
      Cache: 'default',
      headers:{
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Content-Type':'application/json',
      }
    }

    fetch(`http://localhost:5000/clients/list/${use[0].identerprise}`,options)
    .then((response) => response.json())
    .then((data)=>{
      setClient(data)
    })
    .catch((error)=>console.log(error))
  },[])
 console.log(localStorage.getItem('token'))
 
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-notes text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Contratos</p>
                      <Card.Title as="h5">TOTAL:</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              {/* <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update Now
                </div>
              </Card.Footer> */}
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Usuários</p>
                      <Card.Title as="h5">TOTAL:{users.length}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              {/* <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last day
                </div>
              </Card.Footer> */}
            </Card>
          </Col>
          {/* <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-istanbul text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Inativas</p>
                      <Card.Title as="h5">TOTAL:</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
               <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
                </div>
              </Card.Footer> 
            </Card>
          </Col> */}
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-paper-2 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Clientes</p>

                      <Card.Title as="h5">TOTAL:{client.length}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              {/* <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update now
                </div>
              </Card.Footer> */}
            </Card>
          </Col>
        </Row>
     
        <Row>
        <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Historico de Ligações</Card.Title>
                <p className="card-category">
                 Registro de Ligações feitas no Sistema
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
               <h4 as="h4"> Função Não Disponivel</h4>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
