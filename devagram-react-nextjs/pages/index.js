import Head from 'next/head'
import Image from 'next/image'
import Botao from '@/components/botao'
import Avatar from '@/components/avatar'
import { UploadImagem } from '@/components/uploadImagem'
import { useState, useRef } from 'react'


export default function Home() {
  const [imagem, setImagem] = useState(null);
  const referenciaInput = useRef(null);

  return (
    <>
    <h1>Olá mundo!</h1>
    <button onClick={() => referenciaInput?.current?.click()}>abrir seletor de arquivos</button>

    <UploadImagem 
    setImagem={setImagem} 
    imagemPreview={imagem?.preview}
    aoSetarAReferencia={(ref) => referenciaInput.current = ref}
    />

  <Avatar/>

    <div style={{width: 250}}>
      <Botao texto={'Login'} cor='invertido' manipularClique={() => console.log('botao clicado')}/>
    </div>
    </>
  )
}
