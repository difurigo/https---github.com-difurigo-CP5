import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";

function Ideia1() {
    return (
        <div>
            
        <h1 className="example-title">Ideia 1 - Catástrofes Cósmicas</h1>
        <p className=".example-description">
            A primeira ideia de Velikovsky propõe que a história da Terra foi marcada por catástrofes cósmicas causadas por encontros próximos com outros corpos celestes.
        </p>
        <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                </ul>
            </nav>
        <Image src="/catastrofe.png" alt="Página de Erro" width={200} height={50} layout="responsive" className="example-image"/>
        </div>
    );
};

export default Ideia1;