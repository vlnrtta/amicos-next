export default function Footer() {
    return(
        <div className="w-[550px] sm:w-[1220px] px-12 sm:px-0 mx-auto pb-12 rounded-lg pt-44">
            <div className="max-w-screen-xl px-6 w-[550px] sm:w-full sm:mx-auto md:py-2">
                <div className="flex items-center justify-between py-2">
                    <a href="#" className="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img
                            className="h-7" src="https://firebasestorage.googleapis.com/v0/b/amicosimagenes.appspot.com/o/amicos_logo.png?alt=media&token=4b0e4ed1-01b1-43b6-aff1-a0762b71b1c7">                                
                        </img>
                        <span className="self-center text-xl text-green-700 font-bold whitespace-nowrap dark:text-white"></span>
                    </a>
                    <ul className="flex flex-wrap items-center  text-sm font-medium text-gray-600 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#atencion" className="hover:opacity-80 me-4 md:me-6 text-gray-800">Atención</a>
                        </li>
                        <li>
                            <a href="#info" className="hover:opacity-80 me-4 md:me-6 text-gray-800">Info</a>
                        </li>
                        <li>
                            <a href="#" className="hover:opacity-80 me-4 md:me-6 text-gray-800">Nosotros</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/amicos_mutual/" className="hover:opacity-80 me-4 md:me-6 flex align-bottom">
                            </a>

                        </li>
                        <li>
                            <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXDxqxtnRDWvxvjCRskvHxBBbtQrFZxkZvxVnvZHJcMgnTFxqsncsfpkgWVdjxkgkTvKg" className="hover:opacity-80">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="mb-2 border-gray-400 w-[550px] sm:w-full mx-auto" />
            <div className="grid grid-cols-2 mx-auto w-[550px]">
                <div className="text-gray-700">
                    <p>Asociación Mutual Intercooperativa Solidaria. <br></br>
                        C.U.I.T. 30-68761473-5 <br></br>
                        Mat. I.N.A.C.Y.M. Nº 680 <br></br>
                        N° de Inscripción RNEMP: 9999 | Superintendencia de Servicios de Salud.</p>
                </div>
                <div className="text-gray-700 inline-flex pl-12 sm:pl-0 justify-end sm:gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin" viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z"/><path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0"/><path d="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/></svg>
                    <h5>San Luis 71 - Nueva Cordoba - Cordoba.</h5>
                </div>
            </div>
        </div>
    );
}