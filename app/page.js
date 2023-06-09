import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export const metadata = {
  title: {siteTitle},
}

export default function Home() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}