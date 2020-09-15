import React, { useState } from 'react';
import '../style.css';
import Modal from 'react-modal';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { ModalBody, ModalFooter } from 'react-bootstrap';

//import ModalButt from './ModalButt';


/*-----------------------------------------------------------------------------------------------BUENO y PORFIN ACABADO!!!!!*/

const ItemListado = (props) => {

  const noticia = props.noticia;

  const customStyles = {
    content : {
    position: 'absolute' ,
    left: '15rem' ,    
    right: '15rem' ,
    top: '5.5rem' ,
    bottom: '5.5rem' ,
    backgroundColor: '#fff',
    boxShadow: '0 0 10px 0 rgba(0,0,97,0.5)',
    overflow:'auto',
    borderRadius: '4px',
    outline: 'none',
    align: 'center'
      
    }
  };

  var subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'black';
  }
 
  function closeModal(){
    setIsOpen(false);
  }



  
  return (
        
    <div style={{ float: 'left' }} className="card col-md-6 " >
      <img className="card-img-top " style={{ width: '90%', marginLeft: '5%' }} src={noticia.thumb} alt={noticia.titulo} />
        <div className="card-body">
          <h2 className="card-title">{noticia.titulo}</h2>
            <em>{noticia.fecha}</em>
            <div>
        <button onClick={openModal} style={{borderRadius:'4px', backgroundColor:'lightblue'}}>Ves a la notícia!</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          width="800"
          height="600"
          effect="fadeInUp"
          scrollable={true}
        >
 
          <ModalHeader>
          <h3 ref={_subtitle => (subtitle = _subtitle)}>{noticia.titulo}</h3>
          <h4>{noticia.fecha}</h4>
          </ModalHeader>
          <ModalBody>
          <div style={{display:'flex'}}>
          <p>{noticia.contenido}</p>
          <img style={{ width: '20%', marginLeft: '30%', alignItems: 'center', display:'flex'}} src={noticia.thumb} alt={noticia.titulo}></img>
            
          </div>
            
  
          </ModalBody>
          <ModalFooter>
          <img className="logo" alt="Logo" style={{ width: '20%',  alignItems: 'center'}} src="http://www.mesebre.cat/img/logo-mesebre.png" />
          </ModalFooter>
        </Modal>
      </div>
        </div>
    </div>
)

  
  }

export default ItemListado;

/****************************************************************************Funciona solo el 1r post, hay que progamar el useState
const ItemListado = (props) => {

  const noticia = props.noticia;

  return (
        
        <div style={{ float: 'left' }} className="card col-md-6 ">
          <img className="card-img-top " style={{ width: '90%', marginLeft: '5%' }} src={noticia.thumb} alt={noticia.titulo} />
          <div className="card-body">
            <h2 className="card-title">{noticia.titulo}</h2>
            <em>{noticia.fecha}</em>
              <div>
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"  >
                  Ves a la notícia!
                  </button>
                  

                <div className="modal fade" id="exampleModalCenter"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id={noticia.fecha}> {noticia.titulo}</h5>
                        <h5 className="modal-title" id="exampleModalCenterTitle"> {noticia.fecha}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        {noticia.contenido}
                      </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Tanca
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
        </div>
    )
  }

export default ItemListado;
 
 ***********************************************************************************************************************************/

/*const ItemListado = (props) => {

  const noticia = props.noticia;
  
  return (
    //aqui se carga la imagen, titulo y id de la noticia, supongo que es aqui donde debo progmar el modal para que cuando clique aparezca el pop
    <Link to={`/noticia/${noticia.id}`} style={{ float: 'left' }} className="card col-md-6 ">      
        <img className="card-img-top " style={{ width:'90%', marginLeft:'5%'}} src={noticia.thumb} alt={noticia.titulo}/>
          <div className="card-body">
          <h2 className="card-title">{noticia.titulo}</h2>         
            <em>{noticia.fecha}</em>          
          </div>
      </Link>
    
  )
    
}

export default ItemListado;*/

/*const ItemListado = (props) => {

  const noticia = props.noticia;

  const[show, setShow] = useState(false); 

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);


 function clicar(props) {
    console.log(noticia.contenido)
    // prompt(noticia.id, noticia.contenido, noticia.fecha)
    //return window.open('mesebre.com');
  }

   return (
        
        <div style={{ float: 'left' }} className="card col-md-6 ">
          <img className="card-img-top " style={{ width: '90%', marginLeft: '5%' }} src={noticia.thumb} alt={noticia.titulo} />
          <div className="card-body">
            <h2 className="card-title">{noticia.titulo}</h2>
            <em>{noticia.fecha}</em>

            <button onClick={() => handleShow()}>
              Ves a la noticia
            </button>

            <Modal  
            show={show}
                    width="800"
                    height="600"
                    effect="fadeInUp"
                    scrollable={true}
                    onClickAway={() => handleClose()}>

<div>
                        <h1>Aqui va la notici</h1>
                    </div>

             
            </Modal>

          </div>
          
        </div>
        
    
  
)

  }

export default ItemListado;*/



/*********************************************************************GOOOOOOOOOOOOOOOOD
export const ItemListado = (props) => {

  const noticia = props.noticia;

  const[modalState, setModalState] = useState(false); 

  const toggleModalState = () => {
    setModalState(!modalState)
  }

 /*function clicar(props) {
    console.log(noticia.contenido)
    // prompt(noticia.id, noticia.contenido, noticia.fecha)
    //return window.open('mesebre.com');
  }

  return (
        
    <div style={{ float: 'left' }} className="card col-md-6 ">
      <img className="card-img-top " style={{ width: '90%', marginLeft: '5%' }} src={noticia.thumb} alt={noticia.titulo} />
      <div className="card-body">
        <h2 className="card-title">{noticia.titulo}</h2>
        <em>{noticia.fecha}</em>
        
          <div className={`modalBackground modalShowing-${modalState}`}>
            <div className="ModalInner" role="dialog">
                <div className="modalTitulo">
                  <p>
                  {noticia.contenido}
                  </p>
                  
                </div>
            </div>
         </div>
      </div>
      <button onClick={() => toggleModalState()}>Ves a la noticia</button>
      <ModalButt></ModalButt>
      <Modal></Modal>
    </div>
    


)

}

export default ItemListado; */


/*----------------------------------------------------------------------------------------------------------------------------------*/
  /*function foo (props) {
    return (
      <Modal isOpen={true}>
        <img className="card-img-top " style={{ width: '90%', marginLeft: '5%' }} src={noticia.thumb} alt={noticia.titulo} />
        <div className="card-body">
          <h2 className="card-title">{noticia.titulo}</h2>
          <em>{noticia.fecha}</em>
        </div>
      </Modal>
    )


  }*/

  /*function clicar(noticia) {

    return (
      console.log(noticia.id)
    )
  }

  return (
    <button onclick={clicar}>
<div style={{ float: 'left' }} className="card col-md-6 ">
      <img className="card-img-top " style={{ width: '90%', marginLeft: '5%' }} src={noticia.thumb} alt={noticia.titulo} />
      <div className="card-body">
        <h2 className="card-title">{noticia.titulo}</h2>
        <em>{noticia.fecha}</em>
      </div>
    </div></button>
    
  )*/


/*function clicar(noticia) {
  return (
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div>{props.thumb}</div>
      <div>{noticia.thumb}</div>

    </Popup>
  )


}

return (
  <div onClick={clicar}>
    <img className="card-img-top " style={{ width: '90%', marginLeft: '5%' }} src={noticia.thumb} alt={noticia.titulo} />
    <div className="card-body">
      <h2 className="card-title">{noticia.titulo}</h2>
      <em>{noticia.fecha}</em>
    </div>
  </div>
)*/






/*return (
  //aqui se carga la imagen, titulo y id de la noticia, supongo que es aqui donde debo progmar el modal para que cuando clique aparezca el pop
  <div to={`/noticia/${noticia.id`} onClick={clicar()} style={{ float: 'left' }} className="card col-md-6 ">
    <img className="card-img-top " style={{ width: '90%', marginLeft: '5%' }} src={noticia.thumb} alt={noticia.titulo} />
    <div className="card-body">
      <h2 className="card-title">{noticia.titulo}</h2>
      <em>{noticia.fecha}</em>
    </div>
  </div>

)*/
/*return (
  function clicar(props) {
    return (
      <Modal {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <ModalHeader>
          <div>{noticia.titulo}</div>
        </ModalHeader>
        <ModalBody>
          <div>{noticia.descripcion}</div>
        </ModalBody>
      </Modal>
    )
  }
  {<div onClick={clicar()} style={{ float: 'left' }} className="card col-md-6 ">
    <img className="card-img-top " style={{ width: '90%', marginLeft: '5%' }} src={noticia.thumb} alt={noticia.titulo} />
    <div className="card-body">
      <h2 className="card-title">{noticia.titulo}</h2>
      <em>{noticia.fecha}</em>
    </div>
  </div>}
)*/

