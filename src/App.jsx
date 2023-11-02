
import { useState,useEffect } from 'react'
import Form from './components/Form'
import Resultado from './components/Resultado'



function App() {
const [monedas, setMonedas] = useState({})
const [resultado, setResultado] = useState({})

useEffect(() => {
  if (Object.keys(monedas).length>0) {
    const cotizarCripto = async()=>{
      const {moneda,criptomoneda}=monedas
      const url= `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
      const respuesta= await fetch(url)
      const resultado= await respuesta.json()
      setResultado(resultado.DISPLAY[criptomoneda][moneda]);
    }
    cotizarCripto()
  }
}, [monedas])


  return (
    <main className='flex flex-col items-center justify-center lg:w-[80%] lg:mx-auto  '>
    
    
      <h1 className=' text-4xl mx-auto font-bold lg:text-7xl text-gray-600 mt-10 '>Criptomoney<span className='text-green-400'>.com</span></h1>
      
      <section className=' flex flex-col items-center justify-center w-full lg:flex-row lg:gap-24 lg:mt-24'>
        <Form 
          setMonedas={setMonedas}
        />
        {resultado.PRICE && <Resultado resultado={resultado}/>}
      </section>
    </main>
  )
    
}

export default App
