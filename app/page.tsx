import Head from 'next/head';
import Header from './components/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Seoulutioners</title>
        <meta name='description' content='Welcome to My Company' />
      </Head>
      <Header />
      <main className='p-4'>
        <h2 className='text-6xl text-white'>Welcome to My Company</h2>
        <p>We provide the best services in the industry.</p>
      </main>
    </div>
  );
};

export default Home;
