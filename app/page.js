import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export const metadata = {
  title: "The Snake Den",
  charset: "utf-8"
}

export default function Home() {
  return (
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
  );
}