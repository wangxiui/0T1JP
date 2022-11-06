import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps, GetServerSideProps } from "next";

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        {/*SEO*/}
        {/*<meta name="googlebot" content="noindex,nofollow" />*/}
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <link rel="canonical" href="https://example.com/blog/original-post" key="canonical" />
        <title>iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple</title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta property="og:description" content="And a social description for our cool page" />
        <meta property="og:image" content="https://example.com/images/cool-page.jpg" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm wangxiui. Welcome!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

/*export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      // props for your component
    },
  };
}*/
