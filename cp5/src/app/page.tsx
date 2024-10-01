import React from "react";
import Layout from "../components/layout";
import Image from "next/image";

const Home = () => {
  return (
    <Layout>
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          Bem-vindo ao Projeto: Worlds in Collision
        </h2>
        <p className="mt-4 text-lg">
          Este projeto ilustra as principais ideias de Velikovsky sobre eventos
          cósmicos que influenciaram a história da Terra.
        </p>
        <Image src="/velikovsky.png" alt="velikovsky" width={200} height={50} layout="responsive"/>
      </div>
    </Layout>
  );
};

export default Home;
