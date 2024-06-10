// titulo style="color: rgba(252, 252, 252, 0.89); text-shadow: rgba(27, 27, 27, 0.781) 3px 0 10px;"
// subtitulo style="color: rgba(3, 19, 3, 0.961); text-shadow: rgba(255, 255, 255, 0.781) 3px 1px 5px;"

export default function Presentacion() {
  return(
    <div className="-z-6 bg-cover h-[530px] bg-[url('https://firebasestorage.googleapis.com/v0/b/amicosimagenes.appspot.com/o/image3_1.avif?alt=media&token=6d773f48-8cc7-4fbf-b182-6db36aa5dd7a')]">
        <div className="w-[657px] grid grid-cols-1 place-content-start sm:pt-28 -mb-4 sm:grid-cols-2 sm:py-2 lg:grid-cols-3 sm:w-full" >
            <div className="col-span-2">
                <h1 className="pl-4 sm:pl-12 text-6xl font-bold flex flex-row sm:mt-28 mt-16 drop-shadow-2xl  text-green-800" >
                    Asociación Mutual <br></br>
                    Intercooperativa Solidaria.
                </h1>
                <h2 className="pt-10 sm:pt-0 pl-4 pb-4 sm:pl-12 text-2xl sm:text-xl opacity-80 inset-0 -z-10 font-bold" >
                    Mas de 25 años de seriedad y prestigio. Otorgando <br></br>	
                    amplia cobertura en los mejores Centros Médicos de la <br></br>
                    Provincia de Córdoba.
                </h2>
            </div>
            <div className="mx-24 pt-12 sm:pt-0 grid grid-cols-2 place-content-center sm: mb-48 sm: sm:mb-0 sm:col-span-1 sm:grid-cols-1 sm:mt-[120px] ">
                <div className="sm:mt-0 sm:mb-12">
                    <a href="/asociarme">
                        <button type="button" className="shadow-lg shadow-gray-800/60 hover:shadow-gray-800/80 text-white bg-gradient-to-br from-blue-400 to-green-600 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg sm:text-lg text-2xl py-2.5 text-center mb-2 w-52 h-20 sm:w-48 sm:h-14">
                            Asociarme
                        </button>
                    </a>
                </div>
                <div className="ml-8 sm:ml-0">
                    <a href="/ingresar">
                        <button type="button" className="shadow-lg shadow-gray-800/60 hover:shadow-gray-800/80 text-white bg-gradient-to-br from-green-600 to-blue-400 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-2xl sm:text-lg  py-2.5 text-center mb-2 w-52 h-20 sm:w-48 sm:h-14">
                            Soy asociado
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}
