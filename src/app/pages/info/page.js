export default function Info() {
    return (
        <div>
            <div id="info" className="mt-32 mb-12 mx-12">
                <p className="text-xl font-semibold text-green-700">Información</p>
                <hr className="border-green-600" />
            </div>

            <div className="grid grid-cols-2 place-content-center gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-[130px]" id="info">

                <div className="p-4 mx-auto leading-normal">
                    <a href="/">
                        <div className="group bg-transparent rounded-lg ">
                            <img className="w-[160px] mx-auto" src="https://firebasestorage.googleapis.com/v0/b/amicosimagenes.appspot.com/o/prestadores1.png?alt=media&token=8e9d78a0-ea1c-40fa-8ff2-0e5a0db7f8f0" alt="" />
                            <div className="m-4">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-green-700">Prestadores</h5>
                                <p className="font-normal text-gray-700 group-hover:text-green-700">Contamos con prestaciones en las mejores instituciones de la provincia.</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="p-4 mx-auto leading-normal">
                    <a href="/planes">
                        <div className="group bg-transparent rounded-lg ">
                            <img className="w-[160px] mx-auto" src="https://firebasestorage.googleapis.com/v0/b/amicosimagenes.appspot.com/o/planes.png?alt=media&token=03c2a9ef-3ecd-424f-9e3b-cfaa1aae9561" alt="" />
                            <div className="m-4">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-green-700">Planes</h5>
                                <p className="font-normal text-gray-700  group-hover:text-green-700">Nuestros Planes abarcan una amplia cobertura.</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div  className="p-4 mx-auto leading-normal">
                    <a href="/planes">
                        <div className="group bg-transparent rounded-lg ">
                            <img className="w-[160px] mx-auto" src="https://firebasestorage.googleapis.com/v0/b/amicosimagenes.appspot.com/o/vadem%C3%A9cum1.png?alt=media&token=34094665-c3f6-4d7a-a1c7-789feb11ac2d" alt="" />
                            <div className="m-4">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-green-700">Vademécum</h5>
                                <p className="font-normal text-gray-700  group-hover:text-green-700">Cobertura en medicamentos.</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div  className="p-4 mx-auto leading-normal">
                    <a href="/planes">
                        <div className="group bg-transparent rounded-lg ">
                            <img className="w-[160px] mx-auto" src="https://firebasestorage.googleapis.com/v0/b/amicosimagenes.appspot.com/o/chicago.png?alt=media&token=a2afa5b9-d092-4c8c-88c7-301da13592b1" alt="" />
                            <div className="m-4">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-green-700">Delegaciones</h5>
                                <p className="font-normal text-gray-700  group-hover:text-green-700">Estamos en varias localidades del interior.</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div  className="p-4 mx-auto leading-normal">
                    <a href="/planes">
                        <div className="group bg-transparent rounded-lg ">
                            <img className="w-[130px] sm:w-[160px] mx-auto" src="https://firebasestorage.googleapis.com/v0/b/amicosimagenes.appspot.com/o/asesores.png?alt=media&token=5d62c605-55c9-44d0-989f-762381b882bc" alt="" />
                            <div className="m-4">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-green-700">Promotores | Asesores</h5>
                                <p className="font-normal text-gray-700 group-hover:text-green-700">Consultá con nuestros promotores para asesorarte.</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div  className="p-4 mx-auto leading-normal">
                    <a href="/planes">
                        <div className="group bg-transparent rounded-lg ">
                            <img className="w-[130px] sm:w-[160px] mx-auto" src="https://firebasestorage.googleapis.com/v0/b/amicosimagenes.appspot.com/o/ubicacion.png?alt=media&token=a2b90ab0-11b5-4c72-bf22-160a53409bc5" alt="" />
                            <div className="m-4">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-green-700">Ubicación</h5>
                                <p className="font-normal text-gray-900 group-hover:text-green-700">Dónde nos ubicamos.</p>
                            </div>
                        </div>
                    </a>
                </div>


            </div>
        </div>
    );
}