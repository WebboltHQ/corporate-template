import Head from 'next/head';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home({ site }) {
  return (
    <>
      <Head>
        <title>{site.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Nav name={site.name} />
        <main>
          <Hero title={site.heroTitle} subtitle={site.heroSubtitle} headerImage={site.headerImage} />
          <WhoWeAre team={site.team} />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://us-central1-instantly-app.cloudfunctions.net/getSite?${new URLSearchParams({
      apiKey: process.env.NEXT_PUBLIC_GET_SITE_API_KEY,
      userId: process.env.NEXT_PUBLIC_USER_ID,
      siteId: process.env.NEXT_PUBLIC_SITE_ID,
    })}`,
  );
  const data = await res.json();
  const site = {
    name: data.name,
    heroTitle: data.heroTitle,
    heroSubtitle: data.heroSubtitle,
    headerImage: data.headerImage,
    team: data.team,
  };

  return {
    props: {
      site,
    },
  };
}
