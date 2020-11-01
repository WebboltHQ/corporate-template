import Head from 'next/head';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home({ site, childPageList }) {
  return (
    <>
      <Head>
        <title>{site.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Nav name={site.name} childPages={childPageList} />
        <main>
          <Hero title={site.heroTitle} subtitle={site.heroSubtitle} headerImage={site.headerImage} />
          <WhoWeAre team={site.team} />
          <Contact contact={site.contact} />
        </main>

        <Footer name={site.name} contact={site.contact} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const [siteData, childPageListData] = await Promise.all([
    fetch(
      `${process.env.API_URL}/getSite?${new URLSearchParams({
        apiKey: process.env.NEXT_PUBLIC_GET_SITE_API_KEY,
        userId: process.env.NEXT_PUBLIC_USER_ID,
        siteId: process.env.NEXT_PUBLIC_SITE_ID,
      })}`,
    ),
    fetch(
      `${process.env.API_URL}/getChildPageList?${new URLSearchParams({
        apiKey: process.env.NEXT_PUBLIC_GET_SITE_API_KEY,
        userId: process.env.NEXT_PUBLIC_USER_ID,
        siteId: process.env.NEXT_PUBLIC_SITE_ID,
      })}`,
    ),
  ]);

  const data = await siteData.json();
  const site = {
    name: data.name,
    heroTitle: data.heroTitle,
    heroSubtitle: data.heroSubtitle,
    headerImage: data.headerImage,
    team: data.team,
    contact: data.contact,
  };

  const childPageList = await childPageListData.json();

  return {
    props: {
      site,
      childPageList,
    },
  };
}
