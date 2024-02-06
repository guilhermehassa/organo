import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css';

export const FormularioColaborador = (props) => {

  const [nome , setNome] = useState('');
  const [cargo , setCargo] = useState('');
  const [imagem , setImagem] = useState('');
  const [time , setTime] = useState('');
  const [nomeTime , setNomeTime] = useState('');
  const [corTime , setCorTime] = useState('#000000');


  const aoSalvar = (evento) =>{
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  }
  return(
    <section className={`formulario ${props.visibilidadeFormulario} `}>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
}

export const FormularioTime = (props) => {

  const [nome , setNome] = useState('');
  const [cargo , setCargo] = useState('');
  const [imagem , setImagem] = useState('');
  const [time , setTime] = useState('');
  const [nomeTime , setNomeTime] = useState('');
  const [corTime , setCorTime] = useState('#000000');


  const aoSalvar = (evento) =>{
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  }
  return(
    <section className={`formulario ${props.visibilidadeFormulario} `}>
      <form onSubmit={(evento) => {
        evento.preventDefault();
        props.cadastrarTime({nome: nomeTime, cor: corTime})
      }}>
        <h2>Preencha os dados para criar um novo time</h2>
        <Campo
          obrigatorio
          label="Nome"
          placeholder="Digite o Nome do Time"
          valor={nomeTime}
          aoAlterado={valor => setNomeTime(valor)}
        />
        <Campo
          obrigatorio={true}
          type='color'
          label="Cor"
          placeholder="Digite a cor do Time"
          valor={corTime}
          aoAlterado={valor => setCorTime(valor)}
        />
        <Botao>
          Criar um novo Time
        </Botao>
      </form>
    </section>
  );
}
