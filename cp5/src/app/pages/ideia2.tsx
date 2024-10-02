import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";

const Ideia2 = () => {
    return (
    <Layout>
        <div className="idea-page text-center">
        <h1 className="text-3xl font-bold">Ideia 2 - Influência dos Cometas</h1>
        <p className="mt-4 text-lg">
            A segunda ideia sugere que os cometas desempenharam um papel fundamental em eventos históricos e alterações climáticas no passado.
        </p>
        <Image src="/cachorro-404.png" alt="Página de Erro" width={200} height={50} layout="responsive"/>
        </div>
    </Layout>
    );
};

export default Ideia2;
