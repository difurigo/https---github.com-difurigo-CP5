import React from "react";
import Layout from "@/components/layout";

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
        <img
          src="/images/velikovsky.jpg"
          alt="Ilustração de Velikovsky"
          className="mx-auto mt-8 w-1/2"
        />
      </div>
    </Layout>
  );
};

export default Home;
