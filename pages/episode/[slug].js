import { useContext, useState } from "react";
import Link from "next/link";
import { useAppContext } from "../../state/AppContext";
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
  const { activeAudio, setActiveAudio } = useAppContext();

  return (
    <>
      <h1>
        {episode.title} // <em>{activeAudio}</em>
      </h1>
      <Link href="/">Ir a home</Link>
      <button
        className="px-4 py-2 font-mono font-semibold bg-lime-300 text-black border border-black shadow-offset-black"
        onClick={() => setActiveAudio(episode.enclosure.url)}
      >
        Play
      </button>
    </>
  );
}
