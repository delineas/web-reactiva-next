import { useState, useContext } from 'react';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import siteMetadata from '../data/siteMetada';
import { getFeedItems } from '../lib/feed';

import AppContext from '../components/AppContext';
import EpisodeItem from '../components/EpisodeItem';

export async function getStaticProps() {

  const allFeedItems = await getFeedItems(siteMetadata.feed);
  return {
    props: {
      allFeedItems,
    },
  };
}

export default function Home({ allFeedItems }) {

  const { activeAudio, setActiveAudio } = useContext(AppContext);

  const handleEpisodeClick = (file) => {
    setActiveAudio(file);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Web Reactiva</title>
        <meta name="description" content="Podcast Web Reactiva" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Web Reactiva</h1>

        {allFeedItems.map((item) => (
          <EpisodeItem
            episode={item}
            handleEpisodeClick={handleEpisodeClick}
          ></EpisodeItem>
        ))}

        <p className={styles.description}>
          La tecnología es necesaria, pero las personas somos lo importante!!
        </p>

        <div className={styles.grid}>
          <a href="https://webreactiva.com" className={styles.card}>
            <h2>Feat 1 &rarr;</h2>
            <p>Lorem ipsum.</p>
          </a>

          <a href="https://webreactiva.com" className={styles.card}>
            <h2>Feat 2 &rarr;</h2>
            <p>Lorem ipsum.</p>
          </a>

          <a href="https://webreactiva.com" className={styles.card}>
            <h2>Feat 3 &rarr;</h2>
            <p>Lorem ipsum.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
