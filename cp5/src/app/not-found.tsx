import Image from "next/image";

export default function NotFound() {
  return (
    <div>
        <h1>404: Page Not Found</h1>
        <h2>O recurso que você está tentando acessar não está disponível.</h2>
        <Image src="../public/cachorro-404.png" alt="Página de Erro" width={200} height={50} layout="responsive"/>
    </div>
  )
}