import { useEffect } from 'react';
import {useHistory, useParams} from'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



function DeleteClient(){

    const mySwal = withReactContent(Swal);
    let token =localStorage.getItem('token');
    const {id} = useParams();
    const navigate = useHistory();

    useEffect(()=>{


        if(!token){
            navigate.push("/")
        }else{
            mySwal.fire({
                title: 'Certeza que Deseja Excluir Este Cliente?',
                text: "Está Ação não pode ser Desfeita. O Cliente será excluido",
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
                    fetch(`http://localhost:5000/clients/delete/${id}`, options)
                    .then((response)=>{
                        if(response.ok){
                            console.log(response);
                            let deletou = 'excluida com sucesso!'
                            localStorage.setItem('excluir', deletou);
                            navigate.push("/admin/client");
            
                        }else if(!response.ok){
                            let error = 'error';
                            localStorage.setItem('error', error);
                            navigate.push("/admin/client");

                        }

                    } )
                  
                 
                }else{
                    navigate.push("/admin/client");
                }
              })
    
        }
      


       
    


    },[])

   
return(
    <>
    </>
)
}

export default DeleteClient;