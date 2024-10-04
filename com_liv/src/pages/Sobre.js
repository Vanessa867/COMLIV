import '../Styles/Sobre.css';
import React from 'react'
import images from "./images/home (1).png";

const Sobre = () => {
    return (
      <div className='container'>
        <h1>Sobre nós</h1>
        <p>Somos uma equipe <strong>apaixonada por leitura</strong>, comprometida em facilitar o acesso a clubes de leitura e promover o <strong>incentivo à leitura</strong>em todo o Brasil</p>
        <img className='imagem' src={images} alt='imagem da home do site'/>
        <p>Essa é a <strong>essência do nosso clube:</strong> prezamos pela simplicidade, garantindo que o entendimento seja acessível para <strong>diferentes gerações.</strong></p>
      </div>
    );
  };
  
  export default Sobre;
  