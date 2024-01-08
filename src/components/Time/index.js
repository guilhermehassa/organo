import './Time.css'
import Colaborador from "../Colaborador";
 
const Time = (props) => {
  
  return (
    props.colaboradores.length > 0 ? <section style={{backgroundColor:props.corSecundaria}} className='time'>
      <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
      
      <div className='colaboradores'>
        {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} corDeFundo={props.corPrimaria} cargo={colaborador.cargo} imagem={colaborador.imagem}  />)}
      </div>

    </section>
    : ''
  );
}

export default Time;