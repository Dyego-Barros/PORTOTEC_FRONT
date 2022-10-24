import load from'../../assets/img/cargando-loading.gif';
function Loading(){
return(
    <>
    <div className="loading_container">
        <img className="loading" src={load} alt="Loading"></img>

    </div>
    </>
)
}

export default Loading;