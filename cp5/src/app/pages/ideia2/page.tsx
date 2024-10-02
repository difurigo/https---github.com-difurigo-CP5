import Image from "next/image";
import "@/app/globals.css";
import Link from "next/link";

function Ideia2() {
    return (
        <div className="idea-page">
        <h1 className="idea-title">Ideia 2 - Influência dos Cometas</h1>
        <p className="idea-description">
            A segunda ideia sugere que os cometas desempenharam um papel fundamental em eventos históricos e alterações climáticas no passado.
        </p>
        <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                </ul>
            </nav>
        <Image src="/cometas.png" alt="Página de Erro" width={200} height={50} layout="responsive" className="idea-image"/>
        </div>
    );
};

export default Ideia2;