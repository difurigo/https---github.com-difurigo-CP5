import Image from "next/image";
import "@/app/globals.css" 

export default function NotFound() {
  return (
    <div className="not-found-container ">
        <h1 className="not-found-title">
          404: Page Not Found
          </h1>

        <h2 className="not-found-subtitle">
          O recurso que você está tentando acessar não está disponível.
          </h2>

        <Image src="/cachorro-404.pnghttps://ecomspark.com/wp-content/uploads/2015/07/DOCTYPE-Declaration.gif" alt="Página de Erro" width={200} height={50} layout="responsive" className="not-found-image"/>
    </div>
  )
}