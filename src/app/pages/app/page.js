export default function App() {
    return(
        <div>
            <div className="w-[657px] sm:w-full -z-2 mt-32 h-[6px] bg-[url('https://firebasestorage.googleapis.com/v0/b/amicosimagenes.appspot.com/o/barra_colores.jpg?alt=media&token=0efb6b48-846a-44e6-bd06-34f98f7574dd')]">
            </div> 
            <div className="w-[657px]  sm:w-full h-[750px] sm:h-[570px] 2xl:h-[620px] z-28 -mb-4 grid grid-cols-1 place-content-start bg-right bg-[url('https://firebasestorage.googleapis.com/v0/b/amicosimagenes.appspot.com/o/app3.avif?alt=media&token=d6a0fecc-ad66-4660-acc3-1febb11fd89a')] bg-cover">
                <div className="">
                    <h1 className="ml-4 sm:ml-24 mt-8 sm:mt-16 text-6xl font-bold text-shadow text-gray-100">
                        Conocé nuestra <br></br>
                        App.
                    </h1>
                    <h6 className="ml-4 sm:ml-24 sm:mt-12 text-3xl font-bold text-shadow text-gray-100">
                        Con la App podés acceder a:
                    </h6>
                    
                    <ul className="sm:ml-28 p-4 mt-8 sm:mt-0 text-xl text-shadow text-gray-100">
                        <li className="w-[320px] sm:w-full">● Credencial digital de todo el grupo famliar.</li>
                        <li className="w-[320px] sm:w-full">● Información sobre el estado de tu cuenta.</li>
                        <li className="w-[320px] sm:w-full">● Listado de prestadores y delegaciones.</li>
                        <li className="w-[320px] sm:w-full">● Nuestros teléfonos útiles y formas de contacto.</li>
                    </ul>
                    
                </div>
                <div className="p-4 sm:mx-20 my-6">
                    <a href="https://play.google.com/store/apps/details?id=ar.com.amicos">
                        <button type="button" className="h-16 gap-4 text-gray-900 shadow-2xl bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg w-64 justify-center py-2.5 inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 -0.5 408 467.8"><linearGradient id="a" x2="261.746" y1="112.094" y2="112.094" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#63be6b"/><stop offset=".506" stop-color="#5bbc6a"/><stop offset="1" stop-color="#4ab96a"/></linearGradient><linearGradient id="b" x1=".152" x2="179.896" y1="223.393" y2="223.393" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3ec6f2"/><stop offset="1" stop-color="#45afe3"/></linearGradient><linearGradient id="c" x1="179.896" x2="407.976" y1="229.464" y2="229.464" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#faa51a"/><stop offset=".387" stop-color="#fab716"/><stop offset=".741" stop-color="#fac412"/><stop offset="1" stop-color="#fac80f"/></linearGradient><linearGradient id="d" x1="1.744" x2="272.296" y1="345.521" y2="345.521" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ec3b50"/><stop offset="1" stop-color="#e7515b"/></linearGradient><path fill="url(#a)" d="M261.7 142.3 15 1.3C11.9-.5 8-.4 5 1.4c-3.1 1.8-5 5-5 8.6 0 0 .1 13 .2 34.4l179.7 179.7z"/><path fill="url(#b)" d="M.2 44.4C.5 121.6 1.4 309 1.8 402.3L180 224.1z"/><path fill="url(#c)" d="m402.9 223-141.2-80.7-81.9 81.8 92.4 92.4L403 240.3c3.1-1.8 5-5.1 5-8.6 0-3.6-2-6.9-5.1-8.7z"/><path fill="url(#d)" d="M1.7 402.3c.2 33.3.3 54.6.3 54.6 0 3.6 1.9 6.9 5 8.6 3.1 1.8 6.9 1.8 10 0l255.3-148.9-92.4-92.4z"/></svg>
                            <p className="text-xl ">Google Play</p>
                        </button>
                    </a>
                </div>

            </div>
            <div className="w-[657px] sm:w-full -z-2 mt-4 mb-12 h-[6px] bg-[url('https://firebasestorage.googleapis.com/v0/b/amicosimagenes.appspot.com/o/barra_colores.jpg?alt=media&token=0efb6b48-846a-44e6-bd06-34f98f7574dd')]">
            </div>
        </div>
    );
}