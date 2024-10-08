import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";

function Calculo() {
    return (
        <div className="calculation-page text-center">
        <h1 className="text-3xl font-bold">Cálculo Proposto por Velikovsky</h1>
        <p className="mt-4 text-lg">
            Velikovsky propôs um cálculo para determinar a influência gravitacional de encontros próximos com planetas e seus efeitos no eixo terrestre.
        </p>
        <p>Velikovsky utilizava fórmulas simplificadas e intuitivas para tentar explicar interações gravitacionais e magnéticas entre corpos celestes. Embora suas ideias fossem rejeitadas pela comunidade científica, elas popularizaram a discussão sobre o impacto de eventos cósmicos na história da Terra.</p>
        <div className="mt-8 p-4 bg-gray-100 border border-gray-300 rounded">
          <h2 className="text-xl font-bold">Fórmula: F = G * (m1 * m2) / r²</h2>
            <p className="mt-4">
            Onde: <br />
            <strong>F</strong> = Força gravitacional <br />
            <strong>G</strong> = Constante gravitacional <br />
            <strong>m1</strong> e <strong>m2</strong> = Massas dos corpos <br />
            <strong>r</strong> = Distância entre os corpos
            </p>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <Image src="/calculo.png" alt="Página de Erro" width={200} height={50} layout="responsive"/>
        </div>
    );
};

export default Calculo;