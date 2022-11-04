import React from "react";

import RECAPTCHA from "react-google-recaptcha";

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

import {useState, useEffect,useRef } from 'react';
import {useHistory} from'react-router-dom'

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

function Login(){

    
    const mySwal = withReactContent(Swal);
//Constantes que recembem email e senhas do formulario
    const  [userName, setUserName] = useState()
    const  [password, setPassword] = useState();

 //Objeto JSON que compoe Body da request 
    const _data = {
        "email_user":userName, 
        "password": password
    }
    const data2 = JSON.stringify(_data);


   //Constante que faz a navegação entre as páginas staticas
    const navigate = useHistory();

//Função recebe dados da request e verica se o token é valido ou não
    function showData(result){
      const login = result.login;
  
          if(login.length ==1 ){
            localStorage.setItem("token",result.token);
            localStorage.setItem("user",JSON.stringify(result.login));
            const use = JSON.parse(localStorage.getItem('user'));
            //console.log(use);

            if(use[0].level === "Administrador"){
              navigate.push("/admin/dashboard");

            }
            if(use[0].level === "Gerente"){
              navigate.push("/admin/dashboard");

            }
            if(use[0].level === "Padrão"){
              navigate.push("/admin/client");

            }
            
            
          }   
        else{
            navigate.push("/");
         }
    }

// Opções que compoe a resquest 
  const option={
    method: 'POST', 
    mode: 'cors',
    cache: 'default',
    body: data2,
    headers:{'Content-Type': 'application/json'},  
 }

 const captcha = useRef(null);
//Função que raliza a resquest pro servidor e retorna as promises
  function fazerLogin(e){ 
    if(userName === undefined || userName === null){
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
        title: 'Preencha o campo e-mail!'
      })
      e.preventDefault()
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
        title: 'Preencha o campo Senha!'
      })
        e.preventDefault()
    }



    if(!captcha.current.getValue()){
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
        title: 'Preencha o campo não sou um Robo!'
      })
        e.preventDefault()
    }


    if(userName !== undefined && password !== undefined && captcha.current.getValue()){
      fetch('http://191.101.78.186:5000/user/login', option)
      .then(response => response.json())
      .then(data =>{       
          showData(data)              
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
             title: 'E-mail ou Senha inválidos!'
           })
      } );
    e.preventDefault();
  }

  
}
  


    return(
        <>
        <Container>       
                <div id="login">
                    <div className="card" id="card-login">
                        <div className="card-header"  id="card-login-header">
                            <h5>DISCA PRA MIM</h5>
                        </div>
                        <div className="card-body">
                            <form className="form-group" method='POST' onSubmit={fazerLogin}>
                                <label className="for-control">E-mail</label>
                                <input type="email" name="email" className="form-control" placeholder="Email@usuario.com" onChange={(e)=>setUserName(e.target.value)} />
                                <label className="for-control">Senha</label>
                                <input type="password" name="password"className="form-control" placeholder="Digite a senha" onChange={(e)=>setPassword(e.target.value)} />
                                <div id="captcha">
                                  <RECAPTCHA
                                  ref={captcha}
                                  sitekey="6LcKwrsiAAAAALkJ9gPWfrXfuaPMvPNlqPILDJqc"
                                  >
                                  </RECAPTCHA>
                                </div>
                                <input type="submit" className="btn btn-block btn-success" id="btn-login" value="Login"/>
                            </form>
                        </div>
                    </div>
                </div>            
        </Container>
        </>
    )
}

export default Login;