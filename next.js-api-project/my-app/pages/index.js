import Layout from '../components/Layout';
import Link from 'next/link';
const IndexPage = ({ films }) => {
  return (
    <Layout>
      <h1>Star Wars Films</h1>
      <ul>
        {films.map((film) => (
          <li key={film.url}>
            <Link href={`/details/${film.id}`}>
              <a>{film.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;
export async function getStaticProps() {
  const res = await fetch('https://swapi.dev/api/films');
  const data = await res.json();

  const films = data.results.map((film, index) => ({
    id: index + 1,
    title: film.title,
    url: film.url,
  }));

  return {
    props: {
      films,
    },
  };
}