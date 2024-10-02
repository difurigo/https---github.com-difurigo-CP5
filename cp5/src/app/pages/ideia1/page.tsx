import Image from "next/image";

function Ideia1() {
    return (
        <div>
        <h1 className="example-title">Ideia 1 - Catástrofes Cósmicas</h1>
        <p className=".example-description">
            A primeira ideia de Velikovsky propõe que a história da Terra foi marcada por catástrofes cósmicas causadas por encontros próximos com outros corpos celestes.
        </p>
        <Image src="/cachorro-404.png" alt="Página de Erro" width={200} height={50} layout="responsive"/>
        </div>
    );
};

export default Ideia1;