import { useRouter } from "next/router";
import Layout from "../components/layout";

const DynamicPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center mt-8">
        Página Dinâmica: {slug}
      </h1>
      <p className="text-center mt-4">
        Esta é uma página dinâmica que muda conforme a URL. Slug atual:{" "}
        <strong>{slug}</strong>
      </p>
    </Layout>
  );
};

export default DynamicPage;
