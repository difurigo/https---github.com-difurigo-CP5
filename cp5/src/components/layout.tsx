import React, { ReactNode } from "react";
import Head from "next/head";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="pt-br">
      <Head>
        <title>Projeto Worlds in Collision</title>
        <meta
          name="description"
          content="Explorando as ideias de Immanuel Velikovsky sobre eventos cósmicos."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gray-50 text-gray-800">
        <header className="bg-blue-500 text-white py-4">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold">Projeto Worlds in Collision</h1>
          </div>
        </header>
        <main className="container mx-auto py-8">{children}</main>
        <footer className="bg-blue-500 text-white py-4 text-center">
          <p>&copy; 2024 Velikovsky Team. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
