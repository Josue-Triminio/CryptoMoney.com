import { useEffect ,useState} from "react"
import seleccionarMonedas from "../hooks/seleccionarMonedas"
import Error from "./Error"





export default function Form({setMonedas}) {
    const monedas =[
        {id:'USD',nombre:'Dolar Estadounidense'},
        {id:'EUR',nombre:'Euro'},
        {id:'GBP',nombre:'Libra Esterlina'},
        {id:'MXN',nombre:'Peso Mexicano'},
    ]
    const [criptoMoneda, setCriptoMoneda] = useState([])
    const [error, setError] = useState(false)
    const [moneda,SeleccionarMoneda] = seleccionarMonedas( 'Seleccione su Moneda',monedas)
    const [criptomoneda,SeleccionarCriptoMoneda] = seleccionarMonedas( 'Seleccione una Cripto Moneda',criptoMoneda)
     

    useEffect(() => {

      const consultarApi= async()=>{
            const url='https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD';
            const res= await fetch(url);
            const result= await res.json()
            
            const arrayCriptos= result.Data.map(money=>{
                const objetomonedas= {
                    id:money.CoinInfo.Name,
                    nombre:money.CoinInfo.FullName
                }
                return objetomonedas;
            }) 

            setCriptoMoneda(arrayCriptos)
        }

    consultarApi()
      
    }, [])
    
    const handleSubmit =e=>{
        e.preventDefault()
        if ([moneda,criptomoneda].includes('')) {
            setError(true)
            return
        }
        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }

    
  return (
    <form 
        onSubmit={handleSubmit}
        className=" flex flex-col items-center gap-5 justify-center mt-10  bg-slate-950 rounded-md p-9  w-[90%] lg:mt-0 lg:w-[40rem]">
        {error && <Error children='Seleccione todos los campos'/>}
        <SeleccionarMoneda />
        <SeleccionarCriptoMoneda />
        <input type="submit" value={'Cotizar'} className='mt-10 bg-green-400 w-[12rem] text-center rounded-md
                                            text-white p-2 uppercase text-md hover:bg-green-700 transition-all hover:text-white'/>
    </form>
  )
}
