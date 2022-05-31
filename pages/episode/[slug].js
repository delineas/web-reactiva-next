import { useContext } from "react";
import Link from "next/link";
import AppContext from "../../components/AppContext";
import { getFeedItemsIds, getFeedItemData } from "../../lib/feed";

export async function getStaticProps({ params }) {
  console.log(params);
  const episode = await getFeedItemData(params.slug);
  return {
    props: {
      episode,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getFeedItemsIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Episode({ episode }) {
  const { activeAudio, setActiveAudio } = useContext(AppContext);
  return (
    <>
      <h1>
        {episode.title} // <em>{activeAudio}</em>
      </h1>
      <Link href="/">Ir a home</Link>
      <button onClick={() => setActiveAudio(episode.enclosure.url)}>
        Play
      </button>
    </>
  );
}
