import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";

const Ideia3 = () => {
  return (
    <Layout>
        <div className="idea-page text-center">
        <h1 className="text-3xl font-bold">Ideia 3 - Impactos no Passado</h1>
        <p className="mt-4 text-lg">
          A terceira ideia aborda como impactos de asteroides e outros corpos celestes podem ter sido responsáveis por grandes extinções e mudanças no desenvolvimento humano.
        </p>
        <Image src="/cachorro-404.png" alt="Página de Erro" width={200} height={50} layout="responsive"/>
      </div>
    </Layout>
  );
};

export default Ideia3;
