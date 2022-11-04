import { useEffect } from 'react';
import {useHistory, useParams} from'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



function DeleteEnterprise(){

    const mySwal = withReactContent(Swal);
    let token =localStorage.getItem('token');
    const {id} = useParams();
    const navigate = useHistory();

    useEffect(()=>{


        if(!token){
            navigate.push("/")
        }else{
            mySwal.fire({
                title: 'Certeza que Deseja Excluir Está Empresa?',
                text: "Está Ação não pode ser Desfeita. Todos os Usuários e Clientes serão excluidos",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, deletar!'
              }).then((result) => {
                if (result.isConfirmed) {
                    const options={
                        method: 'DELETE',
                        mode: 'cors',
                        cache: 'default',
                        headers:{
                            'Authorization': `Bearer ${localStorage.getItem('token')}`,
                            'Content-Type': 'application/json'
                        }
                    }
                    fetch(`http://191.101.78.186:5000/enterprise/delete/${id}`, options)
                    .then((response)=>{
                        if(response.ok){
                            console.log(response);
                            let deletou = 'excluida com sucesso!'
                            localStorage.setItem('excluir', deletou);
                            navigate.push("/admin/enterprises/dashboard");
            
                        }else if(!response.ok){
                            let error = 'error';
                            localStorage.setItem('error', error);
                            navigate.push("/admin/enterprises/dashboard");

                        }

                    } )
                  
                 
                }else{
                    navigate.push("/admin/enterprises/dashboard");
                }
              })
    
        }
      


       
    


    },[])

   
return(
    <>
    </>
)
}

export default DeleteEnterprise;