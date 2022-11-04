
import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";

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
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ImportFileINSS() {

const token = localStorage.getItem("token");
const mySwal = withReactContent(Swal);
const use = JSON.parse(localStorage.getItem("user"));
const [users, setName]= useState([]);
const [file, setFile] = useState();
const navigate = useHistory();
 

  useEffect(()=>{
      if(!token){
        navigate.push("/");
      }else{
        setName(use)
       
      }

     
      
  },[])

 const id= users.map((element)=>element.identerprise)

  function Upload(e){
const formdata= new FormData();
formdata.append("file", JSON.stringify(file.name));
formdata.append("file", file);

e.preventDefault();
console.log(formdata.get("file"));
e.preventDefault();

    const options={
      method: 'POST',
      mode: 'cors',
      cache: 'default',
      body:formdata,
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
       
    }
    }

    fetch(`http://191.101.78.186:5000/inss/upload/file/${id[0]}`,options)
    .then((response)=>{   
      if(response.status ===201){
        console.log(response);
        const importou= " importou";
        localStorage.setItem('import', importou)
        navigate.push("/admin/client");

      }else if (response.status === 400){
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
          title: 'Error ao Importar Planilha'
        })

      }

    })
    .catch((error)=> {
     console.log(error);
    });
  e.preventDefault();
  
  }
  return (
    <>
      <Container fluid>
        <Row>
       
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">IMPORTAR PLANILHA INSS</Card.Title>
          
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Form onSubmit={Upload} encType="multipart/form-data"  >
                  <Form.Group>
                    <label>Selecionar Arquivo</label>
                    <Form.Control
                    type="file"
                    name="file"
                    onChange={(e)=>setFile(e.target.files[0])}
                    >

                    </Form.Control>
                  
                    <Button 
                    type="submit" 
                    id="btn-file" 
                    className="btn-fill  pull-right"
                    variant="info"
                   
                    >
                      Enviar
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ImportFileINSS;
