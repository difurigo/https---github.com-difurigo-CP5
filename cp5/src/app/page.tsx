import React from "react";
import Image from "next/image";
import "@/app/globals.css" 
import Link from "next/link";

const Home = () => {
  return (
    <div className="not-found-container">
      <div className="text-center">
        <h2 className="text-3xl">
          Bem-vindo ao Projeto: Worlds in Collision
        </h2>
        <div className="menu">
        <h3>Tres principais ideias e um cálculo proposto por Velikovsky:</h3>
        <nav>
            <ul>
                <li>
                    <Link href="/pages/ideia1">Ideia 1</Link>
                </li>
                <li>
                    <Link href="/pages/ideia2">Ideia 2</Link>
                </li>
                <li>
                    <Link href="/pages/ideia3">Ideia 3</Link>
                </li>
                <li>
                    <Link href="/pages/calculo">Cálculo</Link>
                </li>
            </ul>
        </nav>
        </div>
        <p className="descricao">
          Este projeto ilustra as principais ideias de Velikovsky sobre eventos
          cósmicos que influenciaram a história da Terra.
        </p>
        <Image src="/velikovsky.png" alt="velikovsky" width={200} height={50} layout="responsive" className="home-image"/>
        
      </div>
      </div>
  );
};

export default Home;
