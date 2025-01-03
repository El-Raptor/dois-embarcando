import { useRouter } from "next/router";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

export default function CountryPage({ countryData }) {
  const router = useRouter();
  const { slug } = router.query;

  if (!countryData) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{countryData.name}</h1>
      <p>{countryData.description}</p>
      <p>Idioma: {countryData.language}</p>
      <p>Moeda: {countryData.currency}</p>
      <p>População: {countryData.population}</p>

      <h2>Destaques</h2>
      <ul>
        {countryData.highlights?.map((highlight, index) => (
          <li key={index}>
            <strong>{highlight.name}</strong>: {highlight.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), "public/content/countries"));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "public/content/countries", `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return { props: { countryData: data } };
}
