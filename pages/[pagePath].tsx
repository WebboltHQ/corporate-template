import React from 'react';
import MarkdownIt from 'markdown-it';

import Layout from '../components/Layout';
import classes from '../config/classes';
import stlyes from '../styles/[pagePath].module.scss';

const mdParser = new MarkdownIt(/* Markdown-it options */);

const ChildPage = ({ childPageList, pageData, site }) => {
  return (
    <Layout site={site} childPageList={childPageList}>
      <div className={`${classes.wrapper} text-gray-700 body-font py-24`}>
        <div
          className={stlyes['childpage-content']}
          dangerouslySetInnerHTML={{ __html: mdParser.render(pageData.content) }}></div>
      </div>
    </Layout>
  );
};

export default ChildPage;

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.API_URL}/getChildPageList?${new URLSearchParams({
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
      `${process.env.API_URL}/getSite?${new URLSearchParams({
        apiKey: process.env.NEXT_PUBLIC_GET_SITE_API_KEY,
        userId: process.env.NEXT_PUBLIC_USER_ID,
        siteId: process.env.NEXT_PUBLIC_SITE_ID,
      })}`,
    ),
    // 子ページ一覧
    fetch(
      `${process.env.API_URL}/getChildPageList?${new URLSearchParams({
        apiKey: process.env.NEXT_PUBLIC_GET_SITE_API_KEY,
        userId: process.env.NEXT_PUBLIC_USER_ID,
        siteId: process.env.NEXT_PUBLIC_SITE_ID,
      })}`,
    ),
    // 子ページ詳細
    fetch(
      `${process.env.API_URL}/getChildPage?${new URLSearchParams({
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
