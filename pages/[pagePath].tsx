import React from 'react';

import Layout from '../components/Layout';

const ChildPage = ({ childPageList, pageData, site }) => {
  return (
    <Layout site={site} childPageList={childPageList}>
      {pageData.content}
    </Layout>
  );
};

export default ChildPage;

export async function getStaticPaths() {
  const res = await fetch(
    `https://us-central1-instantly-app.cloudfunctions.net/getChildPageList?${new URLSearchParams({
      apiKey: process.env.NEXT_PUBLIC_GET_SITE_API_KEY,
      userId: process.env.NEXT_PUBLIC_USER_ID,
      siteId: process.env.NEXT_PUBLIC_SITE_ID,
    })}`,
  );
  const data = await res.json();
  const paths = data.map(pageData => {
    return {
      params: { pagePath: pageData.path, pageId: pageData.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [siteData, childPageListData, pageDataRes] = await Promise.all([
    // サイト情報
    fetch(
      `https://us-central1-instantly-app.cloudfunctions.net/getSite?${new URLSearchParams({
        apiKey: process.env.NEXT_PUBLIC_GET_SITE_API_KEY,
        userId: process.env.NEXT_PUBLIC_USER_ID,
        siteId: process.env.NEXT_PUBLIC_SITE_ID,
      })}`,
    ),
    // 子ページ一覧
    fetch(
      `https://us-central1-instantly-app.cloudfunctions.net/getChildPageList?${new URLSearchParams({
        apiKey: process.env.NEXT_PUBLIC_GET_SITE_API_KEY,
        userId: process.env.NEXT_PUBLIC_USER_ID,
        siteId: process.env.NEXT_PUBLIC_SITE_ID,
      })}`,
    ),
    // 子ページ詳細
    fetch(
      `https://us-central1-instantly-app.cloudfunctions.net/getChildPage?${new URLSearchParams({
        apiKey: process.env.NEXT_PUBLIC_GET_SITE_API_KEY,
        userId: process.env.NEXT_PUBLIC_USER_ID,
        siteId: process.env.NEXT_PUBLIC_SITE_ID,
        pagePath: params.pagePath,
      })}`,
    ),
  ]);

  const data = await siteData.json();
  const site = { name: data.name };

  const childPageList = await childPageListData.json();
  const pageData = await pageDataRes.json();
  return {
    props: {
      childPageList,
      pageData,
      site,
    },
  };
}
