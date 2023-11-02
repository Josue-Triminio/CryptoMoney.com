

export default function Resultado({resultado}) {
const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE}=resultado
  return (
    <div className=" flex flex-col w-full justify-center  items-center gap-2 lg:w-auto lg:mt-16 lg:gap-8">
        <div className="">
            <p className="text-2xl  lg:text-3xl font-semibold text-gray-500 p-2 transition-all">El precios es <span className="text-lg bg-gray-700 rounded-md text-green-500 p-2">{PRICE}</span></p>
            <p className=" lg:text-md font-semibold text-gray-500 p-2 transition-all">Precio mas alto del dia <span className="text-sm bg-gray-700 rounded-md text-white p-2">{HIGHDAY}</span></p>
            <p className=" lg:text-md font-semibold text-gray-500 p-2 transition-all">Precio mas bajo del dia <span className="text-sm bg-gray-700 rounded-md text-white p-2">{LOWDAY}</span></p>
            <p className=" lg:text-md font-semibold text-gray-500 p-2 transition-all">Precio de las ultimas 24h <span className="text-sm bg-gray-700 rounded-md text-white p-2">{CHANGEPCT24HOUR}</span></p>
            <p className=" lg:text-md font-semibold text-gray-500 p-2 transition-all">Ultima actualizacion <span className="text-sm bg-gray-700 rounded-md text-white p-2">{LASTUPDATE}</span></p>

        </div>

        <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen criptomoneda" className="w-[5rem]  lg:w-[15rem] lg:h-[15rem] border rounded-full" />
    </div>

  )
}
