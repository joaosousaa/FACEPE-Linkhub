import { useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import axios from "axios";
import Header from "../components/Header";
import About from "../components/About";
import Links from "../components/Links";

function Portifolio() {
    const [darkMode, setDarkMode] = useState(false);

    //   //frases api
    //   const [frase, setFrase] = useState("");

    // //api
    //   useEffect(() => {
    //     const fetchFrase = async () => {
    //       try {
    //         const response = await axios.get("https://motivational-spark-api.vercel.app/api/quotes/random");
    //         setFrase(`${response.data.quote} — ${response.data.author}`);
    //       } catch (error) {
    //         console.error("Erro ao buscar frases:", error);
    //       }
    //     };

    //     // Buscar imediatamente
    //     fetchFrase();

    //     // Atualizar a cada 100 milissegundos
    //     const interval = setInterval(fetchFrase, 5000);

    //     // Limpar o intervalo quando o componente desmontar
    //     return () => clearInterval(interval);
    //   }, []);

    return (
        <div className={darkMode ? "app dark" : "app"}>
            <div className="container">

                <button className="toggle" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>

                <Header />
                <About />
                <Links />

                {/* <p className="frase">{frase}</p> */}
            </div>

        </div>
    );
}

export default Portifolio;
