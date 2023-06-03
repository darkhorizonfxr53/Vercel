import Layout from '../../components/Layout';
const DetailsPage = ({ film }) => {
  return (
    <Layout>
      <h1>{film.title}</h1>
      <p>Director: {film.director}</p>
      <p>Release Date: {film.release_date}</p>
      <p>Opening Crawl: {film.opening_crawl}</p>
    </Layout>
  );
};

export default DetailsPage;
export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://swapi.dev/api/films/${id}`);
  const film = await res.json();

  return {
    props: {
      film,
    },
  };
}