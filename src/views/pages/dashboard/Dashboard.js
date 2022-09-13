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
  const navigate= useHistory();

  useEffect(()=>{
    if(!token){
      navigate.push("/");
    }
  },[])
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
                      <i className="nc-icon nc-istanbul text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Empresas</p>
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
                      <Card.Title as="h5">TOTAL:</Card.Title>
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
          <Col lg="3" sm="6">
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
              {/* <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
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
                      <i className="nc-icon nc-paper-2 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Clientes</p>

                      <Card.Title as="h5">TOTAL:</Card.Title>
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
                <Card.Title as="h4">Empresas Cadastradas</Card.Title>
                <p className="card-category">
                  Dados Cadastrados no Sistema
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">CNPJ</th>
                      <th className="border-0">Razão Social</th>
                      <th className="border-0">Nome Fantasia</th>
                      <th className="border-0">E-mail</th>
                      <th className="border-0">Opções</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>
                        <a href="#" className="btn btn-primary" id="btn-enterprise-edit">EDITAR</a>|
                        <a href="#" className="btn btn-warning" id="btn-enterprise-warning">VER</a>|
                        <a href="#" className="btn btn-danger" id="btn-enterprise-danger">DELETAR</a>
                      </td>
                    </tr>
                   
                  
                 
                
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

export default Dashboard;
