export default function HeaderHome() {
    return(
        <div>
            <div className="backdrop-blur sm:w-full px-6 grid grid-cols-1 place-content-between items-center h-32 md:grid-cols-2 md:h-12 md:px-12 lg:px-24 xl:px-24 pt-2 fixed z-10 bg-gradient-to-b from-green-200 to-transparent">
                <div className="flex justify-around md:justify-between mt-2 md:mt-0">
                    <a href="#">
                        <img
                            className="w-[150px] hover:opacity-80"
                            src="https://firebasestorage.googleapis.com/v0/b/amicosimagenes.appspot.com/o/amicos_logo.png?alt=media&token=4b0e4ed1-01b1-43b6-aff1-a0762b71b1c7"
                        ></img>
                    </a>
                </div>

                <div className="font-semibold justify-center mb-4 md:mb-0 opacity-80 gap-x-6 flex md:justify-end">

                    <div>
                        <a href="#atencion" className="hover:text-gray-600 text-3xl md:text-lg">Atención</a>
                    </div>
                    <div>
                        <a href="#info" className="hover:text-gray-600 text-3xl md:text-lg">Info</a>
                    </div>
                    <div>
                        <a href="#" className="hover:text-gray-600 text-3xl md:text-lg">Nosotros</a>
                    </div>
                    <div>
                        <a href="#" className="hover:text-gray-600 text-3xl md:text-lg">Redes</a>
                    </div>
                    <div>
                        <a href="/ingresar" className="hover:text-gray-600 text-3xl md:text-lg">Ingresar</a>
                    </div>

                </div> 

            </div>

            <div className="mt-32 w-[657px] h-[6px] sm:w-full lg:w-full md:mt-12 flex justify-end bg-[url('https://firebasestorage.googleapis.com/v0/b/amicosimagenes.appspot.com/o/barra_colores.jpg?alt=media&token=0efb6b48-846a-44e6-bd06-34f98f7574dd')]">
            </div> 
        </div>
    );
}