import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo
          illum porro vitae unde harum, consequatur quasi enim quae cum
          architecto quibusdam, tempora atque suscipit ab similique inventore,
          ipsum ducimus.
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo
          illum porro vitae unde harum, consequatur quasi enim quae cum
          architecto quibusdam, tempora atque suscipit ab similique inventore,
          ipsum ducimus.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
