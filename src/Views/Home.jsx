import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Ofertas from "../Components/Ofertas";
import Portada from "../Components/Portada";
import PreciosDest from "../Components/PreciosDest";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPrecios } from "../Redux/actions";
import { useSelector } from "react-redux";
import WhatsApp from "../Components/WhatsApp";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPrecios());
  }, [dispatch]);

  const precios = useSelector((state) => state.precios);
  console.log("preciosss", precios);
  return (
    <>
      <NavBar />
      <Portada />
      <WhatsApp />
      <PreciosDest />
      <Ofertas />
      <Footer />
    </>
  );
}
export default Home;
