import { useState } from 'react';
import comAutorizacao from '@/hoc/comAutorizacao';
import Pessoa from '../components/Pessoa';

function Home() {
  const [idadeRaul, setIdade] = useState(23);

  const pessoas = [
    {
      nomePessoa:'Cleiton',
      idadePessoa: 28
    },
    {
      nomePessoa: 'Glau',
      idadePessoa:25
    },
    {
      nomePessoa:'Paulo',
      idadePessoa: 30
    }

  ]

  const incrementaIdade = () => {
    setIdade(prevState => prevState + 1);
  }


  return (
    <>
      <h1>Ola Mundo! {process.env.NEXT_PUBLIC_TESTE}</h1>
      <Pessoa nome='Raul' idade={idadeRaul}/>
      <Pessoa nome='Luiz' idade={51}/>
      <Pessoa nome='Lucimara' idade={48}/>

      {pessoas.map(({nomePessoa, idadePessoa}) => {
        return <Pessoa 
          nome={nomePessoa} 
          idade={idadePessoa}
          key={nomePessoa}
          />
      })};

      <button  onClick={incrementaIdade}>Incrementa idade</button>
    </>
  )
}

export default comAutorizacao(Home)