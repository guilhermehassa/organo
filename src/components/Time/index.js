import './Time.css'
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';

 
const Time = (props) => {
  return (
    props.colaboradores.length > 0 ? <section style={{backgroundColor:hexToRgba(props.cor, '0.4')}} className='time'>
      <input type='color' className='input-cor' value={props.cor} onChange={evento => props.mudarCor(evento.target.value , props.id)} />
      <h3 style={{borderColor:props.cor}}>{props.nome}</h3>
      
      <div className='colaboradores'>
        {props.colaboradores.map(colaborador => {          
          return (
            <Colaborador
              aoFavoritar={props.aoFavoritar}
              id={colaborador.id}
              key={colaborador.nome}
              nome={colaborador.nome}
              corDeFundo={props.cor}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              aoDeletar={props.aoDeletar} 
              favorito={colaborador.favorito}
            />
          )
        })}
      </div>

    </section>
    : ''
  );
}

export default Time;