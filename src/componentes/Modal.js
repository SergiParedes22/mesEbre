/*import React, { Component, useState } from 'react';
import Modal from 'react-awesome-modal';
import  ItemListado from './ItemListado'
import { Noticia } from '../paginas/Noticia';




export default class Examples extends Component {
    //creamos constructor e incicializamos su visibilidad como escondida, false
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.noticia ={
            
        }
    }

    //function para cuando est visible
    openModal() {
        this.setState({
            visible: true
        });
    }

    //funcion para cuando cerramos con un click
    closeModal() {
        this.setState({
            visible: false
        });
        console.log(this.props)
    }

    render() {
        return (
            <section>
                <input type="button" style={{backgroundColor:'white', color: 'black', border: '2px solid #008CBA', textAlign: 'center'}} value="Ves a la notícia" onClick={() => this.openModal()} />
                <Modal
                    visible={this.state.visible}
                    width="800"
                    height="600"
                    effect="fadeInUp"
                    scrollable={true}
                    onClickAway={() => this.closeModal()}
                >
                    <div>
        <h1>Aqui va la noticia {this.noticia.id}</h1>
        <h1>Aqui va la noticia {this.noticia.id}</h1>

                    </div>
                </Modal>
            </section>
        );
    }
}*/
/*
const Tester = (props) => {

    const notica = props.notica;

    const[modalState, setModalState] = useState(false); 

  const toggleModalState = () => {
    setModalState(!modalState)
  }

    return (
        <section>
            <input type="button" style={{backgroundColor:'white', color: 'black', border: '2px solid #008CBA', textAlign: 'center'}} value="Ves a la notícia" onClick={() => toggleModalState} />
            <Modal
                visible={this.state.visible}
                width="800"
                height="600"
                effect="fadeInUp"
                scrollable={true}
                onClickAway={() => this.closeModal()}
            >
                <div>
                    
                    {notica.id}
                    <p>Contenido</p>
                </div>
            </Modal>
        </section>
    );


}

export default Tester;*/