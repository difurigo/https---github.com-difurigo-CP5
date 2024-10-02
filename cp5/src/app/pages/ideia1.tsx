import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";

const Ideia1 = () => {
    return (
    <Layout>
        <div className="idea-page text-center">
        <h1 className="text-3xl font-bold">Ideia 1 - Catástrofes Cósmicas</h1>
        <p className="mt-4 text-lg">
            A primeira ideia de Velikovsky propõe que a história da Terra foi marcada por catástrofes cósmicas causadas por encontros próximos com outros corpos celestes.
        </p>
        <Image src="/cachorro-404.png" alt="Página de Erro" width={200} height={50} layout="responsive"/>
        </div>
    </Layout>
    );
};

export default Ideia1;
