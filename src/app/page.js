import Presentacion from "./pages/presentacion/page";
import Info from "./pages/info/page";
import Contactos from "./pages/contactos/page";
import Atencion from "./pages/atencion/page";
import Ubicacion from "./pages/ubicacion/page";
import App from "./pages/app/page";
import Carousel from "../components/carousel/page";
import Background from "../components/background/page";


export default function Home() {
  return(
    <div>
      <Presentacion/>
      <Contactos/>
      <Info/>
      <Atencion/>
      <Ubicacion/>
      {//<Carousel/>
      }
      <App/>
      <Background/>
    </div>
  );
}
