import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";

function Ideia3() {
    return (
        <div className="idea-page text-center">
        <h1 className="text-3xl font-bold">Ideia 3 - Impactos no Passado</h1>
        <p className="mt-4 text-lg">
        A terceira ideia aborda como impactos de asteroides e outros corpos celestes podem ter sido responsáveis por grandes extinções e mudanças no desenvolvimento humano.
        </p>
        <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                </ul>
            </nav>
        <Image src="/asteroides.png" alt="Página de Erro" width={200} height={50} layout="responsive"/>
        </div>
    );
};

export default Ideia3;